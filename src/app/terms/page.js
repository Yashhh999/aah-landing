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
                <h1 className="text-4xl font-bold text-center text-white mt-5">Terms of Service</h1>

                <h1 className="text-lg font-bold mt-8 text-white bg-navbar mx-10 p-4 rounded-lg">Terms of Service
These Terms of Service (&quot;Terms&quot;) govern your use of the services provided by Arcade Alliance Hosting, an Indian government-registered hosting company. By using our services, you agree to be bound by these Terms.<br/>

1. Service Usage: Our services include VPS hosting, web hosting, mail server hosting, WordPress hosting, and Discord bot hosting. You agree to use these services in compliance with all applicable laws and regulations.<br/>

2. Account Responsibility: You are responsible for maintaining the security of your account and any activities or actions under your account. Arcade Alliance Hosting is not liable for any loss or damage from your failure to comply with this security obligation.<br/>

3. Payment and Fees: All fees are due in advance and are non-refundable, except as otherwise provided by our refund policy. We reserve the right to change the fees for our services at any time.<br/>

4. Termination: We reserve the right to suspend or terminate your account at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of our services.<br/>

5. Limitation of Liability: Arcade Alliance Hosting shall not be liable for any indirect, incidental, special, or consequential damages arising out of the use or inability to use our services.<br/>

6. Changes to Terms: We reserve the right to modify these Terms at any time. Your continued use of our services following any changes signifies your acceptance of the new Terms.<br/>

7. Governing Law: These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Pune, Maharashtra.
</h1>
                </div>
        </section>


      
        </>
    )
}