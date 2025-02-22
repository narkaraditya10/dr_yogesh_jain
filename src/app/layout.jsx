import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Internal Medicine Doctor In Mumbai | Dr. Yogesh Jain Clinic",
  icons: {
    icon: "/logo.jpg",
  },
  description:
    "Consult Dr. Yogesh Jain, best internal medicine doctor in mumbai offering expert care for complex medical conditions with personalized treatment plans.",
};

export default function RootLayout({ children }) {
  const projectId = "qcaldpf5sj";
  Clarity.init(projectId);
  return (
    <html lang="en">
      <head>
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${projectId}");
          `,
          }}
        />
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />

        <Script id="ga-script" strategy="lazyOnload">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}
        </Script>
        <meta
          name="google-site-verification"
          content="XZCDXa84QDpEh8vXIcZjmlkAxtHHl2xDhmTnddUZGfw"
        />
      </head>
      <body className={`${inter.className} text-dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
