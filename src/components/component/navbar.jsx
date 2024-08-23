"use client"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useState } from "react"
import { MenuIcon } from '@heroicons/react/outline';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const makeMenuOpen = () => setIsMenuOpen(true);
    return(
        <>
         <header className="fixed top-0 left-0 w-screen h-14 flex items-center bg-navbar text-white z-50">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-6">
          <Link href="/" className="flex items-center" prefetch={false}>
            <img src="/logo.png" width="40" height="40" alt="Arcade Alliance" />
            <span className="text-lg font-bold ml-2">Arcade Alliance Hosting</span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="w-5 h-5" />
          </button>
          <div className="hidden md:block">
            <ul className="font-medium flex flex-row space-x-8 rtl:space-x-reverse">
              <li>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-gray-200" prefetch={false}>
                  Discord Hosting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-gray-200" prefetch={false}>
                  VPS Hosting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-gray-200" prefetch={false}>
                  Web Hosting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-gray-200" prefetch={false}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-gray-200" prefetch={false}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
        </>
    )
}