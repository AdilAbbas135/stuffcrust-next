"use client";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Banners from "@/Components/Home/Banners";
import Hero from "@/Components/Home/Hero";
import Loader from "@/Components/Loader";
import Menu from "@/Components/Menu";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <>
        {isLoading ? (
          <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
        ) : (
          <div>
            <Header />
            <Hero />
            <Banners />
            <Menu HomePage={true} />
            <Footer />
          </div>
        )}
      </>
    </>
  );
}
