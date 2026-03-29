import { test, expect } from '@playwright/test';

test('トップページの基本的な表示が正常に行われること', async ({ page }) => {
  // baseUrl が playwright.config.ts で設定されているため、"/" への遷移でトップページを開く
  await page.goto('/');

  // 1. タイトルの確認
  await expect(page).toHaveTitle(/マリコ☆バタフライ オフィシャルサイト/);

  // 2. メインのH1見出しが含まれているか（Heroセクション）
  const heroHeading = page.locator('h1').first();
  await expect(heroHeading).toBeVisible();

  // 3. プロジェクトセクションへのナビゲーションが存在するか
  // HeaderMenuの「プロジェクト」リンクを確認
  const navProjects = page.getByRole('link', { name: 'プロジェクト' }).first();
  await expect(navProjects).toBeVisible();
});
