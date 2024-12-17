import BestProduct from "@/components/pages/BestProduct";
import Description from "@/components/pages/Description";
import Logos from "@/components/pages/Logos";
import ProductDetail from "@/components/pages/ProductDetail";
import Header from "@/components/green-header";
import Footer from "@/components/footer"
// import GreenHeader from "@/components/green-header"



export default function Products() {
    return (
        <div>
            {/* <GreenHeader/> */}
            <Header />
            <ProductDetail />
            <Description />
            <BestProduct />
            <Logos />
            <Footer />
        </div>
    )
}