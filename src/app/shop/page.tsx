import ProductCard from "@/components/shop/productcard";
import ShopProducts from "@/components/shop/shopproduct";
import Header from "@/components/green-header";
import Footer from "@/components/shop/footer";

export default function Shop() {
    return (
        <div>
            <Header />
            <ProductCard />
            <ShopProducts />
            <Footer />
        </div>
    )
}