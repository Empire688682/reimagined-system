
import { AppProvider } from "@/component/Context";
import Navbar from "@/component/Navbar/Navbar";
import "./globals.css";
import ContactPage from "@/component/Contact/Contact";
import Footer from "@/component/Footer/Footer";

export const metadata = {
  title: "Ayinla Film",
  description: "This is Ayinla Film web site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <AppProvider>
          <Navbar/>
          {children}
          <ContactPage />
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
