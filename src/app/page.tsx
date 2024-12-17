import Image from "next/image";
import Header from "@/components/blue-header";
import Hero from "@/components/herosec";
import Editors from "@/components/editorspick";
import BestSellerProduct from "@/components/best_seller_product";
import FeatureProducts from "@/components/feature-products";
import Footer from "@/components/footer"



export default function Home() {
  return (

    <>
    <Header />
    <Hero/>
    <Editors/>
    <BestSellerProduct/>
    <FeatureProducts/>
    <Footer/>
    </>
  );
}
