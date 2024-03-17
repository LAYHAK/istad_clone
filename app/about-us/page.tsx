import React from 'react';
import {FaBullseye, FaCode, FaEye, FaFacebook, FaTelegram, FaYoutube} from "react-icons/fa";
import Image from 'next/image';
import cstad from "@/public/images/logo/cstad-lg.png";
import {AiFillMessage} from "react-icons/ai";
import {FaLocationDot} from "react-icons/fa6";
import {MdOutlinePhoneIphone} from "react-icons/md";
import {IoMail} from "react-icons/io5";
import {BsGlobeAsiaAustralia} from "react-icons/bs";

const Page = () => {
    return (
        <div className="container mx-auto">
            <div className="mx-20 bg-blue-50 rounded-lg border border-blue-50 shadow my-3 p-10 space-y-5">
                <div className="flex gap-2 items-center">
                    <FaCode className="text-blue-800 w-5 h-5"/>
                    <h1 className="font-bold text-xl text-gray-900">
                        WHAT IS CENTER OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT?
                    </h1>
                </div>
                <p>
                    CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students
                    to advanced science and technology, research, and develop digital skills and our graduates have been
                    guaranteed excellent job opportunities with the Top IT company. CSTAD will continue to provide
                    high-quality training with the latest methodology, and roadmap as well as the best choice for those
                    who want to be an IT expert in Cambodia.
                </p>
                <Image src={cstad} alt="ISTAD" width={200} height={200} className="mx-auto"/>
            </div>
            <div className="mx-20 bg-blue-50 rounded-lg border border-blue-50 shadow my-3 p-10 space-y-5">
                <div className="flex gap-2 items-center">
                    <FaEye className="text-blue-800 w-5 h-5"/>
                    <h1 className="font-bold text-xl text-gray-900">
                        VISION
                    </h1>
                </div>
                <p>
                    Advanced IT Institute in Cambodia
                </p>
            </div>
            <div className="mx-20 bg-blue-100 rounded-lg border border-blue-50 shadow my-3 p-10 space-y-5">
                <div className="flex gap-2 items-center">
                    <FaBullseye className="text-blue-800 w-5 h-5"/>
                    <h1 className="font-bold text-xl text-gray-900">
                        MISSION
                    </h1>
                </div>
                <ul className="list-disc">
                    <li>
                        Provide the latest methodology with high quality training and mentoring
                    </li>
                    <li>
                        Build up the capacity and career of IT experts Cambodia
                    </li>
                    <li>
                        Consult and connect CSTAD trainees to top IT careers
                    </li>
                </ul>
            </div>
            <div className="mx-20 bg-blue-50 rounded-lg border border-blue-50 shadow my-3 p-10 space-y-5">
                <div className="flex gap-2 items-center">
                    <AiFillMessage className="text-blue-800 w-5 h-5"/>
                    <h1 className="font-bold text-xl text-gray-900">
                        Our Slogan
                    </h1>
                </div>
                <p>
                    Start your IT Career with CSTAD
                </p>
            </div>
            <h1 className="font-bold text-2xl text-blue-800 text-center">
                IF YOU HAVE ANY QUESTIONS, PLEASE FEEL FREE TO CONTACT US.
            </h1>
            <div className="mx-20 bg-blue-50 rounded-lg border border-blue-50 shadow my-3 py-5 px-10 space-y-5">
                <div className="flex gap-2 items-center">
                    <FaLocationDot className="text-blue-800 w-5 h-5"/>
                    <a href="#" className="font-md text-lg text-gray-900 my-5">
                        No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork, Phnom Penh, Cambodia
                    </a>
                </div>
                <div className="flex gap-2 items-center">
                    <MdOutlinePhoneIphone className="text-blue-800 w-5 h-5"/>
                    <a href="#" className="font-md text-lg text-gray-900 my-5">
                        (+855) 95 990 910 | (+855) 93 990 910
                    </a>
                </div>
                <div className="flex gap-2 items-center">
                    <FaTelegram className="text-blue-800 w-5 h-5"/>
                    <a href="#" className="font-md text-lg text-gray-900 my-5">
                        Telegram Channel
                    </a>
                </div>
                <div className="flex gap-2 items-center">
                    <FaFacebook className="text-blue-800 w-5 h-5"/>
                    <a href="#" className="font-md text-lg text-gray-900 my-5">
                        Facebook
                    </a>
                </div>
                <div className="flex gap-2 items-center">
                    <IoMail className="text-blue-800 w-5 h-5"/>
                    <a href="" className="font-md text-lg text-gray-900 my-5">
                        info.istad@gmail.com
                    </a>
                </div>
                <div className="flex gap-2 items-center">
                    <BsGlobeAsiaAustralia className="text-blue-800 w-5 h-5"/>
                    <a href="" className="font-md text-lg text-gray-900 my-5">
                        www.istad.co
                    </a>
                </div>
                <div className="flex gap-2 items-center">
                    <FaYoutube className="text-blue-800 w-5 h-5"/>
                    <a href="#" className="font-md text-lg text-gray-900 my-5">
                        YouTube
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Page;