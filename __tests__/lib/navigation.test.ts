import { navLinks, navLinkClass, sectionClass } from '../../lib/navigation';

describe('Navigation', () => {
  it('should have the correct navigation links', () => {
    // ナビゲーションリンクの数を確認
    expect(navLinks.length).toBe(5);
    
    // 各リンクの構造を確認
    expect(navLinks[0]).toEqual({ href: '#home', label: 'ホーム' });
    expect(navLinks[1]).toEqual({ href: '#skills', label: 'スキル' });
    expect(navLinks[2]).toEqual({ href: '#articles', label: '記事' });
    expect(navLinks[3]).toEqual({ href: '#experience', label: '経験' });
    expect(navLinks[4]).toEqual({ href: '#contact', label: 'お問い合わせ' });
  });

  it('should have the correct navLinkClass', () => {
    // クラス名が文字列であることを確認
    expect(typeof navLinkClass).toBe('string');
    
    // クラス名に特定のスタイルが含まれていることを確認
    expect(navLinkClass).toContain('text-gray-600');
    expect(navLinkClass).toContain('hover:text-gray-900');
    expect(navLinkClass).toContain('dark:text-gray-400');
  });

  it('should have the correct sectionClass', () => {
    // クラス名が文字列であることを確認
    expect(typeof sectionClass).toBe('string');
    
    // クラス名に特定のスタイルが含まれていることを確認
    expect(sectionClass).toContain('py-12');
    expect(sectionClass).toContain('md:py-24');
  });
});