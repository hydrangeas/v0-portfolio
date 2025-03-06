import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ReactNode } from "react"

// フォントの最適化: 必要なサブセットのみをロード
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
  variable: '--font-inter',
})

export const metadata = {
  title: "開発者名 - プログラマーポートフォリオ",
  description: "フルスタック開発者のポートフォリオサイト。モダンな技術を駆使して、革新的なウェブアプリケーションを構築しています。",
  generator: 'v0.dev',
  keywords: ["開発者", "プログラマー", "ポートフォリオ", "フルスタック", "ウェブ開発", "アプリケーション開発"],
  authors: [{ name: "開発者名" }],
  creator: "開発者名",
  publisher: "開発者名",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "開発者名 - プログラマーポートフォリオ",
    description: "フルスタック開発者のポートフォリオサイト。モダンな技術を駆使して、革新的なウェブアプリケーションを構築しています。",
    url: "https://example.com",
    siteName: "開発者名 ポートフォリオ",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "開発者名 - プログラマーポートフォリオ",
    description: "フルスタック開発者のポートフォリオサイト。モダンな技術を駆使して、革新的なウェブアプリケーションを構築しています。",
    creator: "@username",
  },
  robots: {
    index: true,
    follow: true,
  }
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* テーマフラッシュ防止のためのスクリプト */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme') || 'system';
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  const theme = storedTheme === 'system' ? systemTheme : storedTheme;
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch (e) {
                  console.error('テーマ設定エラー:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}