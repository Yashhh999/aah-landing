import Link from "next/link"


export default function Footer() {
    return(
        <>
        <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-footer text-white">
        <p className="text-xs">&copy; 2024 Arcade Alliance. All rights reserved.</p>
        <div className="mx-20">
          <Link href="/terms" className="text-xs">Terms of Service</Link>
          <Link href="/privacy" className="text-xs mx-5">Privacy Policy</Link>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-" />
      </footer>
        </>
    )
}