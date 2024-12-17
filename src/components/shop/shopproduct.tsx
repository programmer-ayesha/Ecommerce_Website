import Image from "next/image";

interface Product {
    id: number;
    image: string;
    title: string;
    category: string;
    price: string;
    originalPrice: string;
    colors: string[];
}
const products2 = [
    {
        id: 1,
        image: "/pic1.jpg",
        title: "Graphic Design",
        category: "English Department",
        price: "$11.64",
        originalPrice: "$14.64",
        colors: ["blue", "green", "yellow", "navyblue"],
    },
    {
        id: 2,
        image: "/pic2.jpg",
        title: "Graphic Design",
        category: "English Department",
        price: "$11.64",
        originalPrice: "$14.64",
        colors: ["blue", "green", "yellow", "navyblue"],
    },
    {
        id: 3,
        image: "/pic3.jpg",
        title: "Graphic Design",
        category: "English Department",
        price: "$11.64",
        originalPrice: "$14.64",
        colors: ["blue", "green", "yellow", "navyblue"],
    },
    {
        id: 4,
        image: "/pic4.jpg",
        title: "Graphic Design",
        category: "English Department",
        price: "$11.64",
        originalPrice: "$14.64",
        colors: ["blue", "green", "yellow", "navyblue"],
    },
    {
        id: 5,
        image: "/pic5.jpg",
        title: "Graphic Design",
        category: "English Department",
        price: "$11.64",
        originalPrice: "$14.64",
        colors: ["blue", "green", "yellow", "navyblue"],
    },
    {
        id: 6,
        image: "/pic6.jpg",
        title: "Graphic Design",
        category: "English Department",
        price: "$11.64",
        originalPrice: "$14.64",
        colors: ["blue", "green", "yellow", "navyblue"],
    },
    {
        id: 7,
        image: "/pic7.jpg",
        title: "Graphic Design",
        category: "English Department",
        price: "$11.64",
        originalPrice: "$14.64",
        colors: ["blue", "green", "yellow", "navyblue"],
    },
    {
        id: 8,
        image: "/pic8.jpg",
        title: "Graphic Design",
        category: "English Department",
        price: "$11.64",
        originalPrice: "$14.64",
        colors: ["blue", "green", "yellow", "navyblue"],
    },
    {
        id: 9,
        image: "/pic9.jpg",
        title: "Graphic Design",
        category: "English Department",
        price: "$11.64",
        originalPrice: "$14.64",
        colors: ["blue", "green", "yellow", "navyblue"],
    },
    {
        id: 10,
        image: "/pic10.jpg",
        title: "Graphic Design",
        category: "English Department",
        price: "$11.64",
        originalPrice: "$14.64",
        colors: ["blue", "green", "yellow", "navyblue"],
    },
    {
        id: 11,
        image: "/pic11.jpg",
        title: "Graphic Design",
        category: "English Department",
        price: "$11.64",
        originalPrice: "$14.64",
        colors: ["blue", "green", "yellow", "navyblue"],
    },
    {
        id: 12,
        image: "/pic12.jpg",
        title: "Graphic Design",
        category: "English Department",
        price: "$11.64",
        originalPrice: "$14.64",
        colors: ["blue", "green", "yellow", "navyblue"],
    },
];

export default function ShopProducts() {

    return (
        <div className=" bg-white">

            <div className="px-6 sm:px-8 lg:px-32 md:px-16 pt-5 pb-4">
                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                    {products2.map((product) => (
                        <div
                            key={product.id}
                            className="flex flex-col items-center text-center font-bold mt-10"
                        >
                            {/* Product Image */}
                            <div className="relative">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={1000}
                                    height={1000}
                                    className="object-cover"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="mt-4">
                                {/* Title and Category */}
                                <h4 className="text-[16px] text-[#252B42] font-bold">
                                    {product.title}
                                </h4>
                                <p className="text-sm text-[#737373] mt-1">
                                    {product.category}
                                </p>

                                {/* Price Section */}
                                <div className="flex justify-center items-center mt-2">
                                    <p className="text-sm text-[#BDBDBD] mr-2">
                                        {product.originalPrice}
                                    </p>
                                    <p className="text-sm text-[#23856D] font-semibold">
                                        {product.price}
                                    </p>
                                </div>

                                {/* Colors Section */}
                                <div className="flex justify-center items-center mt-2 space-x-2">
                                    {product.colors.map((color, index) => (
                                        <Image
                                            key={index}
                                            src={`/${color}.svg`} 
                                            alt={`Color ${index + 1}`}
                                            width={16} 
                                            height={16} 
                                            className="rounded-full"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}