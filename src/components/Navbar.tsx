"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Readora
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>

          <a href="/#books" className="hover:text-blue-400">
            Books
          </a>

          <a href="/#about" className="hover:text-blue-400">
            About
          </a>

          <a href="/#contact" className="hover:text-blue-400">
            Contact
          </a>

          <Link
            href="/reserve"
            className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700"
          >
            Reserve Book
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-700 px-6 pb-5 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <a href="/#books" onClick={() => setMenuOpen(false)}>
              Books
            </a>

            <a href="/#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="/#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <Link
              href="/reserve"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-center"
            >
              Reserve Book
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}