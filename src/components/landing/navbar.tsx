"use client";

import { useState } from "react";
import Link from "next/link";
import { Wallet, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <div className="shrink-0 rounded-xl bg-indigo-600 p-2 text-white">
            <Wallet size={22} />
          </div>
          <span className="truncate text-lg font-bold sm:text-xl">
            Expense<span className="text-indigo-600">Track</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          <Link href="#features" className="hover:text-indigo-600">
            Features
          </Link>
          <Link href="#how-it-works" className="hover:text-indigo-600">
            How It Works
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost">
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t bg-white px-4 pb-6 pt-2 md:hidden"
        >
          <div className="flex flex-col text-sm font-medium text-gray-600">
            <Link
              href="#features"
              className="rounded-lg px-3 py-2.5 hover:bg-gray-50 hover:text-indigo-600"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-lg px-3 py-2.5 hover:bg-gray-50 hover:text-indigo-600"
              onClick={() => setOpen(false)}
            >
              How It Works
            </Link>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Button variant="outline" className="h-10 w-full">
              <Link href="/signin" onClick={() => setOpen(false)}>
                Sign In
              </Link>
            </Button>
            <Button className="h-10 w-full bg-indigo-600 hover:bg-indigo-700">
              <Link href="/signup" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
