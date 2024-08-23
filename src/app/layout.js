import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/component/footer";
import Navbar from "@/components/component/navbar";
import { image } from "@nextui-org/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arcade Alliance Hosting",
  description: "Empowering Digital Horizons with Seamless Hosting Solutions",
 image:"/thumbnail.gif"
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
        <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={metadata.title} />
  <meta name="twitter:description" content={metadata.description} />
  <meta name="twitter:image" content={metadata.image} />
        
      </head>       
      <body className={inter.className}>
      <Navbar  />
      {children}
      <Footer />
      </body>
      
    </html>
  );
}
