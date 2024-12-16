import Image from "next/image";
import React from "react";

const EditorsPics = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-16 mb-7 bg-[#FAFAFA] pt-3">
      {/* Heading */}
      <div>
        <h2 className="text-[#252B42] font-bold text-[24px] mb-2">
          EDITOR&apos;S PICK
        </h2>
        <p className="text-[#737373] text-[14px]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex justify-center items-start gap-6 mt-6">
        {/* Men Image */}
        <div className="relative w-[500px] h-[500px]">
          <Image
            src="/image1.png"
            alt="Men"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center shadow-md">
            <span className="text-[#252B42] font-bold text-lg">MEN</span>
          </div>
        </div>

        {/* Women Image */}
        <div className="relative w-[240px] h-[500px]">
          <Image
            src="/image2.png"
            alt="Women"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center shadow-md">
            <span className="text-[#252B42] font-bold text-lg">WOMEN</span>
          </div>
        </div>

        {/* Accessories and Kids */}
        <div className="flex flex-col gap-6">
          {/* Accessories */}
          <div className="relative w-[240px] h-[242px]">
            <Image
              src="/mage4.png"
              alt="Accessories"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center shadow-md">
              <span className="text-[#252B42] font-bold text-lg">ACCESSORIES</span>
            </div>
          </div>

          {/* Kids */}
          <div className="relative w-[240px] h-[242px]">
            <Image
              src="/image3.png"
              alt="Kids"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center shadow-md">
              <span className="text-[#252B42] font-bold text-lg">KIDS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden flex flex-col items-center justify-center gap-6 mt-6">
        {/* Men  */}
        <div className="relative w-[90%] sm:w-full ml-15">
        
          <Image src={"/image1.png"} alt="men" width={400} height={500} />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-[#252B42] font-bold text-lg">MEN</span>
          </div>
        </div>

        {/* Women */}
        <div className="relative w-[90%] sm:w-full ml-24">
          <Image src={"/image2.png"} alt="women" width={240} height={500} />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-[#252B42] font-bold text-lg">WOMEN</span>
          </div>
        </div>

        {/* Accessories */}
        <div className="flex flex-col gap-6 w-[90%] sm:w-full">
          {/* Accessories Image with Fixed Size White Div */}
          <div className="relative ml-12">
            <Image src={"/mage4.png"} alt="accessories" width={240} height={242} />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42] font-bold text-lg">ACCESSORIES</span>
            </div>
          </div>

          {/* Kids Image with Fixed Size White Div */}
          <div className="relative ml-12">
            <Image src={"/image3.png"} alt="kids" width={240} height={242} />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42] font-bold text-lg">KIDS</span>
            </div>
          </div>
  </div>
</div>

      </div>
    
  );
};

export default EditorsPics;


