import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();

    // microCMS等から送信されるWebhookのシークレットを複数パターンで検証
    // （URLパラメータ ?secret=xxx、またはカスタムヘッダーとして）
    const secret =
      request.nextUrl.searchParams.get('secret') ||
      request.headers.get('x-webhook-secret') ||
      request.headers.get('x-microcms-secret');

    const expectedSecret = process.env.MICROCMS_WEBHOOK_SECRET;

    // シークレットが設定されていない、または一致しない場合は401を返す
    if (!expectedSecret || secret !== expectedSecret) {
      console.error('[Webhook Error] Invalid or missing secret token.');
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    // JSONボディをパース
    const payload = JSON.parse(rawBody);

    // microCMSからの通知の場合、payload内に `api` 属性でエンドポイント名（news等）が含まれている
    const tag = payload.api;

    if (!tag) {
      return NextResponse.json({ message: 'Missing "api" field in payload' }, { status: 400 });
    }

    // 指定されたタグを持つキャッシュデータをパージし、次回のアクセスで最新化する
    revalidateTag(tag, 'max');
    console.log(`[Webhook Success] Revalidated tag: ${tag}`);

    return NextResponse.json({ revalidated: true, tag, now: Date.now() });
  } catch (error) {
    console.error('[Webhook Exception]', error);
    return NextResponse.json({ message: 'Error processing webhook' }, { status: 500 });
  }
}
