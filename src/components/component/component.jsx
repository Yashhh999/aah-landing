import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Image } from "next/image"
import ImageSlider from "./ImageSlider"
export function Component() {
  
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="fixed top-0 left-0 w-full px-4 lg:px-6 h-14 flex items-center bg-navbar text-white z-50">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <img src="/logo.png" width="40" height="40" alt="Arcade Alliance" />
          <span className="text-xl font-bold">Arcade Alliance Hosting</span>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-auto rounded-full sm:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
    <SheetContent side="right" className="sm:hidden">
      <nav className="grid gap-4 text-lg font-medium">
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4 text-blue-200"
          prefetch={false}>
          Discord Hosting
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4 text-blue-200"
          prefetch={false}>
          VPS Hosting
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4 text-blue-200"
          prefetch={false}>
          Web Hosting
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4 text-blue-200"
          prefetch={false}>
          Pricing
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4 text-blue-200"
          prefetch={false}>
          About
        </Link>
      </nav>
    </SheetContent>
  </Sheet>

  <nav className="ml-auto flex gap-4 sm:gap-6 hidden sm:flex">
    <Link
      href="#"
      className="text-sm font-medium hover:underline underline-offset-4 text-gray-200"
      prefetch={false}>
      Discord Hosting
    </Link>
    <Link
      href="#"
      className="text-sm font-medium hover:underline underline-offset-4 text-gray-200"
      prefetch={false}>
      VPS Hosting
    </Link>
    <Link
      href="#"
      className="text-sm font-medium hover:underline underline-offset-4 text-gray-200"
      prefetch={false}>
      Web Hosting
    </Link>
    <Link
      href="#"
      className="text-sm font-medium hover:underline underline-offset-4 text-gray-200"
      prefetch={false}>
      Pricing
    </Link>
    <Link
      href="#"
      className="text-sm font-medium hover:underline underline-offset-4 text-gray-200"
      prefetch={false}>
      About
    </Link>
  </nav>
</header>

      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div
              className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1
                  className="lg:leading-tighter text-white text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                 Empowering Digital Horizons with Seamless Hosting Solutions
                </h1>
                <p className="mx-auto max-w-[700px] mt-5 text-muted-foreground md:text-xl">
                  Arcade Alliance Hosting offers a range of hosting solutions to meet your needs, from Discord hosting
                  to VPS and web hosting. Experience reliable, scalable, and secure hosting for your online projects.
                </p>
                <div className="space-x-4 mt-6 mb-10">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-purple-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 text-black items-center justify-center rounded-md border border-input bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Learn More
                  </Link>
                </div>
              </div>
              <ImageSlider />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
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
                    "Arcade Alliance Hosting has been a game-changer for my <br/> Discord bot. The reliability and
                    scalability have been<br/> fantastic, and the support team is always there to help."
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
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
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-footer text-white">
        <p className="text-xs">&copy; 2024 Arcade Alliance. All rights reserved.</p>
        <div className="mx-20">
        <Link href="/" className="text-xs">Terms of Service</Link>
        <Link href="/" className="text-xs mx-5">Privacy Policy</Link>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-" />
      </footer>
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
