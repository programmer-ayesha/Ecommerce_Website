import React from "react";
import { FiPhone, FiMapPin, FiMail, FiArrowDown } from "react-icons/fi";

const Office = () => {
    // Data for each contact card
    const cards = [
        {
            icon: <FiPhone className="text-[#23A6F0] text-[48px] w-[72px] h-[72px]" />,
            title1: "georgia.young@example.com",
            title2: "georgia.young@ple.com",
            description: "Get Support",
            button: "Submit Request",
        },
        {
            icon: <FiMapPin className="text-[#23A6F0] text-[48px] w-[72px] h-[72px]" />,
            title1: "123 Main Street, LA",
            title2: "California, USA",
            description: "Find Us",
            button: "View on Map",
        },
        {
            icon: <FiMail className="text-[#23A6F0] text-[48px] w-[72px] h-[72px]" />,
            title1: "info@example.com",
            title2: "support@example.com",
            description: "Email Us",
            button: "Send Email",
        },
    ];

    return (
        <section className="flex flex-col items-center justify-center text-center py-10 px-4">
            {/* Header Section */}
            <header className="mb-10">
                <h3 className="text-[#252B42] font-semibold text-[14px] mb-4">VISIT OUR OFFICE</h3>
                <h2 className="text-[#252B42] font-bold text-[40px]">
                    We help small businesses <br />
                    with big ideas
                </h2>
            </header>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`${index === 1
                                ? "bg-[#252B42] text-white h-[400px]" // Styling for the middle card
                                : "bg-white text-[#252B42]"
                            } shadow-md rounded-lg p-6 max-w-sm text-center`}
                    >
                        {/* Icon Section */}
                        <div className="flex justify-center items-center mb-4">
                            {card.icon}
                        </div>

                        {/* Card Information */}
                        <p className="font-semibold text-[16px]">{card.title1}</p>
                        <p className="font-semibold text-[16px] mb-4">{card.title2}</p>
                        <p className="font-semibold text-[18px] mb-6">{card.description}</p>

                        {/* Button Section */}
                        <button
                            className={`${index === 1
                                    ? "bg-transparent border border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
                                    : "bg-transparent border border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
                                } font-semibold py-4 px-6 rounded-full transition`}
                        >
                            {card.button}
                        </button>
                    </div>
                ))}
            </div>

            {/* Footer Section */}
            <div className="mt-16 py-10 text-center">
                {/* Down Arrow Icon */}
                <div className="flex justify-center items-center">
                    <FiArrowDown className="text-[#23A6F0] text-[48px] transform -rotate-45" />
                </div>

                {/* Heading and Subheading */}
                <h3 className="text-[#252B42] font-semibold text-[16px] mt-4">WE CAN&apos;T WAIT TO MEET YOU</h3>
                <h2 className="text-[#252B42] font-bold text-[58px] mt-3">Let&apos;s Talk</h2>

                {/* Call to Action Button */}
                <button className="bg-[#23A6F0] text-[#FFFFFF] px-8 py-4 rounded-md m-4 hover:bg-blue-500">
                    Try it free now
                </button>
            </div>
        </section>
    );
};

export default Office;
