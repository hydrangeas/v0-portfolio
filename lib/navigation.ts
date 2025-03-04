import { ReactNode } from 'react';

// ナビゲーションリンクの型定義
export interface NavLink {
  href: string;
  label: string;
}

// セクションの型定義
export interface Section {
  id: string;
  component: ReactNode;
}

// ナビゲーションリンク
export const navLinks: NavLink[] = [
  { href: "#home", label: "ホーム" },
  { href: "#skills", label: "スキル" },
  { href: "#articles", label: "記事" },
  { href: "#experience", label: "経験" },
  { href: "#contact", label: "お問い合わせ" },
];

// ナビゲーションリンクの共通クラス
export const navLinkClass =
  "text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors";

// セクションの共通クラス
export const sectionClass = "py-12 md:py-24";