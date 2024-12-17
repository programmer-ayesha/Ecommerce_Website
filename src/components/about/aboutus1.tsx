import Image from "next/image";
import Logos from "../pages/Logos";

// Companies Section
const Companies = () => {
    return (
        <section className="mt-32 bg-[#FAFAFA]">
            {/* Heading Section */}
            <div className="font-bold text-center py-10">
                <h2 className="text-[40px] text-[#252B42] tracking-wide">Big Companies Are Here</h2>
                <p className="text-[14px] text-[#737373] tracking-wide font-normal w-[80%] md:w-1/2 mx-auto mt-5">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
                </p>
            </div>

            {/* Logos Section */}
            <div className="pb-10">
                <Logos />
            </div>

            {/* Work with Us Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
                {/* Left Section */}
                <div className="bg-[#2A7CC7] lg:col-span-2 py-32 px-10 font-bold text-white text-center md:text-left flex flex-col justify-center lg:justify-start">
                    <h3 className="text-[16px] tracking-wide">WORK WITH US</h3>
                    <h1 className="tracking-wide text-[40px] mt-4">Now Let&apos;s Grow Yours</h1>
                    <p className="font-normal mt-4 tracking-wide max-w-[80%] mx-auto lg:mx-0">
                        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century...
                    </p>
                    <button className="mt-6 px-10 py-3 font-bold text-[14px] border border-white rounded-md tracking-wide mx-auto lg:mx-0">
                        Button
                    </button>
                </div>

                {/* Right Section (Image) */}
                <div className="w-full">
                    <Image
                        src="/aboutimage2.jpg"
                        alt="Shopping Woman"
                        width={2000}
                        height={2000}
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Companies;
