'use client'
import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/Featureprod";
import LatestProducts from "../components/LatestProducts";
import ShopexOffer from "../components/shopexoffer";
import UniqueFeatures from "../components/UniqueFeatures";
import TrendingProducts from "../components/TrendingProducts";
import Discount from "../components/Discount";
import TopCateg from "../components/TopCateg";
import Offers from "../components/Offers";
import Blog from "../components/Blogs";
import Footer from "../components/Footer";


const Home: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <FeaturedProducts />
        <LatestProducts />
        <ShopexOffer />
        <UniqueFeatures />
        <TrendingProducts />
        <Discount/>
        <TopCateg/>
        <Offers/>
        <Blog/>
        <Footer/>
      </main>
    </div>
  );
};

export default Home;