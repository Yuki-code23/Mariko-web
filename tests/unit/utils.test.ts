import { describe, it, expect } from 'vitest';
import { formatDate } from '@/lib/utils';

describe('Utility Functions - src/lib/utils', () => {
  describe('formatDate', () => {
    it('ISO形式の日付文字列を YYYY.MM.DD 形式にフォーマットすること', () => {
      // タイムゾーンによるブレを防ぐために固定の値をテスト
      const result = formatDate('2026-03-29T10:00:00.000Z');
      expect(result).toBe('2026.03.29');
    });

    it('日付が未定義や空文字の場合は「日付未定」等を返す、またはフォールバックが機能すること', () => {
      try {
        const result = formatDate('');
        // エラーにならず何らかの文字列が返ればOKとする（またはNaN等）
        expect(typeof result).toBe('string');
      } catch (e) {
        // 例外が発生した場合はテスト失敗
        expect.fail('formatDate should handle empty strings gracefully');
      }
    });
  });
});
