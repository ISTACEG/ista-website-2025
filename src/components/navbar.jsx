"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = ({ onClick }) => (
    <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
      <li>
        <a
          href="#intro"
          onClick={onClick}
          className="text-sm text-white/80 hover:text-white transition-colors"
        >
          Intro
        </a>
      </li>
      <li>
        <a
          href="#features"
          onClick={onClick}
          className="text-sm text-white/80 hover:text-white transition-colors"
        >
          Features
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={onClick}
          className="text-sm text-white/80 hover:text-white transition-colors"
        >
          Contact
        </a>
      </li>
      <li className="md:hidden">
        <Button asChild size="sm" className="w-full">
          <a href="#get-started" onClick={onClick}>
            Get Started
          </a>
        </Button>
      </li>
    </ul>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mt-4 rounded-2xl border border-white/15 bg-[rgba(24,24,27,0.35)] backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.35),0_0_20px_rgba(0,255,255,0.15),0_0_40px_rgba(0,255,255,0.08)] before:absolute before:inset-0 before:rounded-2xl before:border before:border-cyan-400/20 before:shadow-[inset_0_1px_0_rgba(0,255,255,0.1)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-60"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,255,255,0.03) 0%, rgba(0,255,255,0.01) 100%)",
            }}
          />
          <div className="flex items-center justify-between px-4 py-3">
            {/* Brand */}
            <a href="#" className="flex items-center gap-2">
              <div className="size-6 rounded-md bg-gradient-to-br from-cyan-200 to-cyan-500" />
              <span className="text-white/90 font-semibold tracking-wide">
                ISTA
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <NavLinks />
              <Button asChild size="sm">
                <a href="#get-started">Get Started</a>
              </Button>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <button
                    aria-label="Open menu"
                    className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/10 p-2 text-white/90 hover:bg-white/15"
                  >
                    {open ? (
                      <X className="size-5" />
                    ) : (
                      <Menu className="size-5" />
                    )}
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-neutral-900/80 backdrop-blur-2xl border-white/10 text-white"
                >
                  <SheetHeader>
                    <SheetTitle className="text-white">Menu</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <NavLinks onClick={() => setOpen(false)} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
