import { Navbar } from "./components/nav";
import "./styles/global.scss";
import Footer from "./components/footer";

export const metadata = {
  metadataBase: new URL("https://lorem-ipsum.dev"),
  title: {
    default: "Lorem Ipsum | Home",
    template: "%s | Lorem Ipsum",
  },
  description: "Lorem Ipsum.",
  openGraph: {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum .",
    url: "https://lorem-ipsum.dev",
    siteName: "Lorem Ipsum",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="page-wrapper">
          <Navbar />
          <main>{children}</main>
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
