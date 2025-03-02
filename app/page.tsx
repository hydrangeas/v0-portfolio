import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Articles from "@/components/articles"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <a href="#" className="text-xl font-bold">
            <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
            <span>開発者名</span>
            <span className="text-gray-600 dark:text-gray-400">{"}"}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            >
              ホーム
            </a>
            <a
              href="#skills"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            >
              スキル
            </a>
            <a
              href="#articles"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            >
              記事
            </a>
            <a
              href="#experience"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            >
              経験
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            >
              お問い合わせ
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="container px-4 pt-20 md:px-6">
        <section id="home" className="py-12 md:py-24">
          <Hero />
        </section>
        <section id="skills" className="py-12 md:py-24">
          <Skills />
        </section>
        <section id="articles" className="py-12 md:py-24">
          <Articles />
        </section>
        <section id="experience" className="py-12 md:py-24">
          <Experience />
        </section>
        <section id="contact" className="py-12 md:py-24">
          <Contact />
        </section>
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 md:py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} 開発者名. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

