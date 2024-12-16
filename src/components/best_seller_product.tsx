// import Image from "next/image";
// // import { Product } from "../../types";
// import ProductCard, { Product } from "@/components/best_seller_cards";

// const FeatureProducts: React.FC = () => {
//   const products: Product[] = [
//     {
//       image: "/graphic-designer.png",
//       name: "Graphic Design Essentials",
//       department: "Creative Arts",
//       originalPrice: "$29.99",
//       discountedPrice: "$19.99",
//       colors: ["bg-[#E63946]", "bg-[#F1FAEE]", "bg-[#A8DADC]", "bg-[#457B9D]"],
//     },
//     {
//       image: "/web-development.png",
//       name: "Advanced Web Development",
//       department: "Tech & Development",
//       originalPrice: "$49.99",
//       discountedPrice: "$34.99",
//       colors: ["bg-[#1D3557]", "bg-[#457B9D]", "bg-[#F1FAEE]", "bg-[#A8DADC]"],
//     },
//     {
//       image: "/digital-marketing.png",
//       name: "Digital Marketing Pro",
//       department: "Marketing Department",
//       originalPrice: "$39.99",
//       discountedPrice: "$24.99",
//       colors: ["bg-[#FF6F61]", "bg-[#FFE66D]", "bg-[#28B5B5]", "bg-[#252B42]"],
//     },
//     {
//       image: "/ux-design.png",
//       name: "UX/UI Design Bootcamp",
//       department: "Product Design",
//       originalPrice: "$59.99",
//       discountedPrice: "$39.99",
//       colors: ["bg-[#6A0572]", "bg-[#FFB997]", "bg-[#E77C40]", "bg-[#252B42]"],
//     },
//     {
//       image: "/branding.png",
//       name: "Creative Branding Workshop",
//       department: "Branding Strategy",
//       originalPrice: "$25.99",
//       discountedPrice: "$15.99",
//       colors: ["bg-[#0E9F6E]", "bg-[#FFC857]", "bg-[#FAF3E0]", "bg-[#252B42]"],
//     },
//     {
//       image: "/app-development.png",
//       name: "Full-Stack App Development",
//       department: "Tech Department",
//       originalPrice: "$69.99",
//       discountedPrice: "$49.99",
//       colors: ["bg-[#3A86FF]", "bg-[#8338EC]", "bg-[#FF006E]", "bg-[#252B42]"],
//     },
//     {
//       image: "/business-strategy.png",
//       name: "Business Strategy Mastery",
//       department: "Sales & Strategy",
//       originalPrice: "$45.99",
//       discountedPrice: "$30.99",
//       colors: ["bg-[#06D6A0]", "bg-[#FFD166]", "bg-[#118AB2]", "bg-[#073B4C]"],
//     },
//     {
//       image: "/content-creation.png",
//       name: "Content Creation Tools",
//       department: "Media & Content",
//       originalPrice: "$19.99",
//       discountedPrice: "$12.99",
//       colors: ["bg-[#FB5607]", "bg-[#FFBE0B]", "bg-[#FF006E]", "bg-[#8338EC]"],
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center text-center mt-28 mb-7 overflow-x-hidden">
//       {/* Section Header */}
//       <div>
//         <h3 className="text-[#737373] text-[20px]">Featured Products</h3>
//         <h2 className="text-[#252B42] text-[24px] font-bold mt-2">
//           BESTSELLER PRODUCTS
//         </h2>
//         <p className="text-[#737373] text-[14px] mt-2">
//           Discover the best tools for learning and success
//         </p>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 w-full px-4 md:px-0">
//         {products.map((product, index) => (
//           <ProductCard key={index} product={product} />
//         ))}
//       </div>

//       {/* Green Section */}
//       <div className="bg-[#23856D] w-full mt-16 pt-7 px-4 sm:px-12 md:px-36 flex flex-col md:flex-row items-center justify-between">
//         {/* Text Section */}
//         <div className="text-white space-y-4 text-center md:text-left md:max-w-md">
//           <h3 className="text-[20px]">SUMMER 2024</h3>
//           <h2 className="text-[40px] sm:text-[50px] font-bold">
//             Limited Edition <br />
//             <span>Creative Bundle</span>
//           </h2>
//           <p className="text-[14px] sm:text-[16px]">
//             Get all the tools you need to elevate your skills <br />
//             and unlock your creativity.
//           </p>

//           {/* Button Section */}
//           <div className="flex items-center gap-4 mt-6">
//             <h3 className="text-[24px] font-bold">$49.99</h3>
//             <button className="bg-[#2DC071] text-[14px] font-bold py-3 px-8 rounded-md hover:bg-green-600">
//               ADD TO CART
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="w-full md:w-1/2 mt-6 md:mt-0">
//           <Image
//             src="/creative-bundle.png"
//             alt="creative-bundle"
//             width={510}
//             height={600}
//             className="w-full h-auto object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureProducts;


import Image from "next/image";
import ProductCard, { Product } from "@/components/best_seller_cards";

const FeatureProducts: React.FC = () => {
  const products: Product[] = [
    {
      image: "/graphic-design.png",
      name: "Graphic Design Essentials",
      department: "Creative Arts",
      originalPrice: "$29.99",
      discountedPrice: "$19.99",
      colors: ["bg-[#E63946]", "bg-[#F1FAEE]", "bg-[#A8DADC]", "bg-[#457B9D]"],
    },
    {
      image: "/web-development.png",
      name: "Advanced Web Development",
      department: "Tech & Development",
      originalPrice: "$49.99",
      discountedPrice: "$34.99",
      colors: ["bg-[#1D3557]", "bg-[#457B9D]", "bg-[#F1FAEE]", "bg-[#A8DADC]"],
    },
    {
      image: "/digital-marketing.png",
      name: "Digital Marketing Pro",
      department: "Marketing Department",
      originalPrice: "$39.99",
      discountedPrice: "$24.99",
      colors: ["bg-[#FF6F61]", "bg-[#FFE66D]", "bg-[#28B5B5]", "bg-[#252B42]"],
    },
    {
      image: "/ux-design.png",
      name: "UX/UI Design Bootcamp",
      department: "Product Design",
      originalPrice: "$59.99",
      discountedPrice: "$39.99",
      colors: ["bg-[#6A0572]", "bg-[#FFB997]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/branding.png",
      name: "Creative Branding Workshop",
      department: "Branding Strategy",
      originalPrice: "$25.99",
      discountedPrice: "$15.99",
      colors: ["bg-[#0E9F6E]", "bg-[#FFC857]", "bg-[#FAF3E0]", "bg-[#252B42]"],
    },
    {
      image: "/app-development.png",
      name: "Full-Stack App Development",
      department: "Tech Department",
      originalPrice: "$69.99",
      discountedPrice: "$49.99",
      colors: ["bg-[#3A86FF]", "bg-[#8338EC]", "bg-[#FF006E]", "bg-[#252B42]"],
    },
    {
      image: "/business-strategy.png",
      name: "Business Strategy Mastery",
      department: "Sales & Strategy",
      originalPrice: "$45.99",
      discountedPrice: "$30.99",
      colors: ["bg-[#06D6A0]", "bg-[#FFD166]", "bg-[#118AB2]", "bg-[#073B4C]"],
    },
    {
      image: "/content-creation.png",
      name: "Content Creation Tools",
      department: "Media & Content",
      originalPrice: "$19.99",
      discountedPrice: "$12.99",
      colors: ["bg-[#FB5607]", "bg-[#FFBE0B]", "bg-[#FF006E]", "bg-[#8338EC]"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center mt-28 mb-7 overflow-x-hidden">
      {/* Section Header */}
      <div>
        <h3 className="text-[#737373] text-[20px]">Featured Products</h3>
        <h2 className="text-[#252B42] text-[24px] font-bold mt-2">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-[#737373] text-[14px] mt-2">
          Discover the best tools for learning and success
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full px-4 md:px-0">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Green Section */}
      <div className="bg-[#23856D] w-full mt-16 pt-7 px-4 sm:px-12 md:px-36 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-white space-y-4 text-center md:text-left md:max-w-md">
          <h3 className="text-[20px]">SUMMER 2024</h3>
          <h2 className="text-[40px] sm:text-[50px] font-bold">
            Limited Edition <br />
            <span>Creative Bundle</span>
          </h2>
          <p className="text-[14px] sm:text-[16px]">
            Get all the tools you need to elevate your skills <br />
            and unlock your creativity.
          </p>

          {/* Button Section */}
          <div className="flex items-center gap-4 mt-6">
            <h3 className="text-[24px] font-bold">$49.99</h3>
            <button className="bg-[#2DC071] text-[14px] font-bold py-3 px-8 rounded-md hover:bg-green-600">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <Image
            src="/creative-bundle.png"
            alt="creative-bundle"
            width={510}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
