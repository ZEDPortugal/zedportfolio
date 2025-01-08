
import { Geist, Geist_Mono } from "next/font/google";
import Home from "../../components/Home";
import App from "../../components/App";
import ChatBot from "../../components/chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <>
 
  
    <App />   

    </>

  );
}
