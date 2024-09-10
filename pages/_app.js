import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";
import 'github-markdown-css/github-markdown.css';


export default function App({ Component, pageProps }) {
  return <>
  <ThemeProvider>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </ThemeProvider>
  </>;
}
