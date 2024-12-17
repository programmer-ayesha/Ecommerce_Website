import Image from "next/image";

export interface Product {
  image: string;
  name: string;
  department: string;
  originalPrice: string;
  discountedPrice: string;
  colors: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-xl">
      {/* Product Image */}
      <div className="w-full flex justify-center">
        <Image
          src={product.image}
          alt={product.name}
          height={350}
          width={250}
          className="object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4 text-center space-y-2">
        <h3 className="text-[#252B42] text-[18px] font-bold">{product.name}</h3>
        <p className="text-[#737373] text-[14px]">{product.department}</p>

        {/* Prices */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <p className="text-[#BDBDBD] text-[16px] line-through">
            {product.originalPrice}
          </p>
          <p className="text-[#2DC071] text-[18px] font-bold">
            {product.discountedPrice}
          </p>
        </div>

        {/* Color Options */}
        <div className="flex justify-center gap-2 mt-4">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className={`w-5 h-5 ${color} rounded-full border border-gray-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
