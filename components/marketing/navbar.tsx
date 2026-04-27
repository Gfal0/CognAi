"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { navItems } from "@/lib/site";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/6 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/login">Entrar</Link>
          </Button>
          <Button asChild>
            <Link href="/onboarding">Comecar gratis</Link>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}

