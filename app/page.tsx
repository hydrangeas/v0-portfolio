import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Articles from "@/components/articles";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import ThemeToggle from "@/components/theme-toggle";
import { navLinks, navLinkClass, sectionClass, Section } from "@/lib/navigation";

export default function Home() {
  // セクションの定義
  const sections: Section[] = [
    { id: "home", component: <Hero /> },
    { id: "skills", component: <Skills /> },
    { id: "articles", component: <Articles /> },
    { id: "experience", component: <Experience /> },
    { id: "contact", component: <Contact /> },
  ];

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
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="container px-4 pt-20 md:px-6">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className={sectionClass}>
            {section.component}
          </section>
        ))}
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 md:py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} 開発者名. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
