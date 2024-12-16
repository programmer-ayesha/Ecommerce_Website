import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/herosec";
import Editors from "@/components/editorspick";
import FeatureProduct from "@/components/best_seller_product";



export default function Home() {
  return (

    <>
    <Header />
    <Hero/>
    <Editors/>
    <FeatureProduct/>
    </>
  );
}
