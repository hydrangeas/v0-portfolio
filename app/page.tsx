import dynamic from 'next/dynamic';
import ThemeToggle from "@/components/theme-toggle";
import { navLinks, navLinkClass, sectionClass, Section } from "@/lib/navigation";
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { MobileNav } from "@/components/mobile-nav";

// 遅延ロードするコンポーネント
const Hero = dynamic(() => import("@/components/hero"), { ssr: true });
const Skills = dynamic(() => import("@/components/skills"), { 
  loading: () => <Skeleton className="w-full h-[400px] rounded-lg" />,
  ssr: true
});
const Articles = dynamic(() => import("@/components/articles"), { 
  loading: () => <Skeleton className="w-full h-[400px] rounded-lg" />,
  ssr: true
});
const Experience = dynamic(() => import("@/components/experience"), { 
  loading: () => <Skeleton className="w-full h-[400px] rounded-lg" />,
  ssr: true
});
const Contact = dynamic(() => import("@/components/contact"), { 
  loading: () => <Skeleton className="w-full h-[400px] rounded-lg" />,
  ssr: true
});

export const revalidate = 3600; // 1時間ごとに再検証

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
            <MobileNav />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="container px-4 pt-20 md:px-6">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className={sectionClass}>
            <Suspense fallback={<Skeleton className="w-full h-[400px] rounded-lg" />}>
              {section.component}
            </Suspense>
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
