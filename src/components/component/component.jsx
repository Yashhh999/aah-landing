"use client"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Image } from "next/image"
import ImageSlider from "./ImageSlider"
import { useState } from "react"
import Footer from "./footer"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const makeMenuOpen = () => setIsMenuOpen(true);
  return (
    (<div className="flex flex-col min-h-[100dvh] w-screen overflow-hidden">
              

      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-navbar z-40">
          <div className="container mx-auto p-4">
            <ul className="font-medium flex flex-col space-y-4">
              <li>
                <Link href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                  Discord Hosting
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  VPS Hosting
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Web Hosting
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      <main className="flex-1 pt-14 max-w-screen">
      <section className="w-screen pt-12 md:pt-24 lg:pt-32 border-y">
  <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
      <div>
        <h1 className="lg:leading-tighter text-white text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
          Empowering Digital Horizons with Seamless Hosting Solutions
        </h1>
        <p className="mx-auto max-w-[700px] mt-5 text-muted-foreground md:text-xl">
          Arcade Alliance Hosting offers a range of hosting solutions to meet your needs, from Discord hosting to VPS and web hosting. Experience reliable, scalable, and secure hosting for your online projects.
        </p>
        <div className="space-x-4 mt-6 mb-10">
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-purple-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get Started
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 text-black items-center justify-center rounded-md border border-input bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="lg:w-full lg:h-full w-80 h-64 justify-center items-center flex">
        <ImageSlider />
      </div>
    </div>
  </div>
</section>
        <section className="w-screen py-12 md:py-24 lg:py-32 lg:ml-16">
          <div className="container space-y-12 px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm bg-slate-300">Hosting Solutions</div>
                <h2 className="text-3xl font-bold text-gray-200 tracking-tighter sm:text-5xl">Tailored Hosting for Your Needs</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Arcade Alliance Hosting offers a range of hosting solutions to meet your specific needs, whether
                  you're running a Discord bot, a virtual private server, or a website.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid bg-navbar rounded-2xl p-3 items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-2 mr-5">
                <h3 className="text-lg font-bold text-white">Discord Hosting</h3>
                <p className="text-sm text-muted-foreground">
                  Reliable and scalable hosting for your Discord bot, with advanced features and 24/7 support.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-purple-900  px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Learn More
                </Link>
              </div>
              <div className="grid gap-2 mr-5">
                <h3 className="text-lg font-bold text-white">VPS Hosting</h3>
                <p className="text-sm text-muted-foreground">
                  Powerful and flexible virtual private servers with customizable resources and advanced security
                  features.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-purple-900  px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Learn More
                </Link>
              </div>
              <div className="grid gap-2 ">
                <h3 className="text-lg font-bold text-white">Web Hosting</h3>
                <p className="text-sm text-muted-foreground">
                  Reliable and scalable web hosting with advanced features, easy-to-use tools, and 24/7 support.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-purple-900  px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>

        </section>

        <section className="py-12 mb-20 bg-navbar text-white mx-10 p-1 rounded-xl">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <span className="inline-block rounded-lg bg-muted px-3 py-1 text-sm bg-slate-300 text-black">
                Incredibly features
              </span>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Premium Hosting Server
              </h2>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

              <div className="text-center lg:text-left">
              <img src="/1.png" alt="1" width={200} height={24} className="w-16 h-16 mx-auto lg:mx-0 mb-5" />

                <h3 className="text-xl font-semibold">Super Quick Setup</h3>
                <p className="mt-2 text-gray-400">
                  DArcade Alliance Hosting ensures a super quick setup with instant
                  provisioning, getting your services up and running in minutes.
                </p>
              </div>


              <div className="text-center lg:text-left">
              <img src="/2.png" alt="1" width={200} height={24} className="w-16 h-16 mx-auto lg:mx-0 mb-5" />                <h3 className="text-xl font-semibold">Premium Hardware</h3>
                <p className="mt-2 text-gray-400">
                  Arcade Alliance Hosting utilizes premium hardware, delivering
                  top-tier performance, reliability, and speed for all your hosting
                  needs.
                </p>
              </div>


              <div className="text-center lg:text-left">
              <img src="/3.png" alt="1" width={200} height={24} className="w-16 h-16 mx-auto lg:mx-0 mb-5" />                <h3 className="text-xl font-semibold">DDoS Protection</h3>
                <p className="mt-2 text-gray-400">
                  Arcade Alliance Hosting provides powerful DDoS protection,
                  ensuring your services stay online and secure against all types of
                  attacks.
                </p>
              </div>


              <div className="text-center lg:text-left">
              <img src="/4.png" alt="1" width={200} height={24} className="w-16 h-16 mx-auto lg:mx-0 mb-5" />                <h3 className="text-xl font-semibold">Fast Support</h3>
                <p className="mt-2 text-gray-400">
                  Arcade Alliance Hosting offers fast customer support, available
                  24/7, to promptly resolve any issues and keep your services
                  running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 text-white my-20">
  <div className="container mx-auto px-4">
    <div className="text-center">
      <span className="inline-block rounded-lg bg-muted px-3 py-1 text-sm bg-slate-300 text-black">
        Payment Methods
      </span>
      <h3 className="mt-2 text-2xl font-bold text-gray-200 sm:text-3xl">
        We accept
      </h3>
    </div>
    <div className="mt-6 flex justify-center space-x-4 flex-wrap">
      <div className="p-2 bg-gray-800 rounded-lg">
        <img src="/visa.webp" alt="Visa" className="h-12 w-auto" />
      </div>

      <div className="p-2 bg-gray-800 rounded-lg">
        <img src="/mastercard.webp" alt="MasterCard" className="h-12 w-auto" />
      </div>

      <div className="p-3 bg-gray-800 rounded-lg">
        <img src="/paypal.webp" alt="PayPal" className="h-12 w-auto" />
      </div>

      <div className="p-4  bg-gray-800 rounded-lg mt-4 lg:mt-0">
        <img src="/rp.png" alt="Razor Pay" className="h-12 w-auto" />
      </div>

      <div className="p-2 bg-gray-800 rounded-lg mt-4 lg:mt-0">
        <img src="/gpay.png" alt="Google Pay" className="h-12 w-auto" />
      </div>
    </div>
  </div>
</section>

        <section className="mx-10 bg-navbar py-12 md:py-24 lg:py-32 rounded-xl bg-muted">
          <div
            className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl text-gray-200 font-bold tracking-tighter md:text-4xl/tight">
                Why Choose Arcade Alliance Hosting?
              </h2>
              <p
                className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Arcade Alliance Hosting offers reliable, scalable, and secure hosting solutions to meet your online
                needs, with 24/7 support and advanced features.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-purple-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Sign Up Now
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-slate-300 px-3 py-1 text-sm">Trusted by Thousands</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Customers Love Arcade Alliance Hosting
                </h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Arcade Alliance Hosting is trusted by thousands of customers worldwide, from individuals to large
                  organizations. See what our customers have to say.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Testimonial"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-slate-200">Reliable and Scalable</h3>
                  <p className="text-muted-foreground">
                  &quot;Arcade Alliance Hosting has been a game-changer for my <br /> Discord bot. The reliability and
                    scalability have been<br /> fantastic, and the support team is always there to help.&quot;
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Avatar>
                      <AvatarImage src="/placeholder-avatar.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>John Doe, Discord Bot Owner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-navbar mx-10 mb-10 rounded-xl">
          <div
            className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm bg-slate-300">Performance</div>
              <h2
                className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-white">
                Reliable and Scalable Hosting
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Arcade Alliance Hosting is designed to handle traffic spikes and scale with your needs, ensuring your
                online presence is always available and performing at its best.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-purple-900  px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Get Started
              </Link>
            </div>

            <div className="flex flex-col items-start space-y-4 m-5">

              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm bg-slate-300">Security</div>
              <h2
                className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-white">
                Security
              </h2>
              <p

                className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Arcade Alliance Hosting provides advanced security features to protect your online assets, including
                DDoS protection, SSL/TLS encryption, and regular backups.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      
    </div>)
  );
}

function GamepadIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}
