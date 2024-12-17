import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-4 py-8">
            {/* Contact Information Section */}
            <div className="w-full text-center md:text-left md:w-1/2 md:ml-16">
                <h3 className="text-[#252B42] font-semibold text-lg mb-6">CONTACT US</h3>
                <h1 className="text-[#252B42] font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
                    Get in touch <br />
                    today!
                </h1>
                <p className="text-[#737373] text-lg sm:text-xl md:text-2xl mt-5">
                    We understand how large objects behave, <br />
                    but small-scale elements are our focus.
                </p>

                {/* Contact Numbers Section */}
                <div className="text-[#252B42] font-semibold text-2xl mt-8">
                    <h3>Phone: +451 215 215</h3>
                    <h3 className="mt-5">Fax: +451 215 215</h3>
                </div>

                {/* Social Media Links Section */}
                <div className="flex justify-center md:justify-start gap-6 mt-8">
                    <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#252B42] hover:text-blue-500 text-3xl"
                    >
                        <FaTwitter />
                    </Link>
                    <Link
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#252B42] hover:text-blue-700 text-3xl"
                    >
                        <FaFacebook />
                    </Link>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#252B42] hover:text-pink-500 text-3xl"
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#252B42] hover:text-blue-600 text-3xl"
                    >
                        <FaLinkedin />
                    </Link>
                </div>
            </div>

            {/* Contact Image Section */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <Image
                    src="/contactus.png"
                    alt="Contact Us"
                    height={280}
                    width={415}
                    className="w-full h-auto object-contain"
                />
            </div>
        </section>
    );
};

export default ContactUs;
