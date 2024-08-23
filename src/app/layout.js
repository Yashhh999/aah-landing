import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/component/footer";
import Navbar from "@/components/component/navbar";
import { image } from "@nextui-org/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arcade Alliance Hosting",
  description: "Empowering Digital Horizons with Seamless Hosting Solutions",
 image:"/logo.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
       
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo.png" />
        
      </head>       
      <body className={inter.className}>
      <Navbar  />
      {children}
      <Footer />
      </body>
      
    </html>
  );
}
