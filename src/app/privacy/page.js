"use client"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useState } from "react"
import { MenuIcon } from '@heroicons/react/outline';

export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const makeMenuOpen = () => setIsMenuOpen(true);
    return(
        <>
         <header className="fixed top-0 left-0 w-screen h-14 flex items-center bg-navbar text-white z-50">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-6">
          <Link href="#" className="flex items-center" prefetch={false}>
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

        <section>
            <div className="container mx-auto px-4 lg:px-6 py-12">
                <h1 className="text-4xl font-bold text-center text-white mt-5">Privacy Policy</h1>
                <p className="text-lg text-center mt-4">Last updated: January 1, 2024</p>
                <h1 className="text-lg font-bold mt-2 text-white bg-navbar rounded-lg p-4">Privacy Policy
At Arcade Alliance Hosting, we are committed to protecting your privacy. This Privacy Policy outlines the types of personal information we collect, how we use it, and the measures we take to ensure its security.<br/>

1. Information Collection: We collect personal information that you provide to us, such as your name, email address, billing information, and other details necessary to provide our services.<br/>

2. Use of Information: We use your personal information to provide and improve our services, process transactions, communicate with you, and for internal record-keeping.<br/>

3. Data Security: We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.<br/>

4. Third-Party Disclosure: We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties, except as required by law or to protect our rights.<br/>

5. Cookies: Our website uses cookies to enhance your experience, gather general visitor information, and track visits to our website.<br/>

6. Changes to This Policy: We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date of the latest revision will be indicated at the top.<br/>

7. Contact Us: If you have any questions about this Privacy Policy, please contact us at support@arcadealliancehosting.com. 
</h1>
                </div>
        </section>


      
        </>
    )
}