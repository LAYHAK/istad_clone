'use client';

import {Footer, FooterLinkGroup} from 'flowbite-react';
import Image from "next/image";
import cstad from '../../public/images/logo/cstad-lg.png';
import {FaTelegram, FaYoutube} from "react-icons/fa";


const titleTheme = {
    base: 'text-blue-50 text-lg font-extrabold uppercase mb-6 ',
}
const linkTheme = {
    base: 'text-blue-50 hover:text-blue-100 font-medium',
};
const copyRightTheme = {
    base: 'text-blue-50 text-sm font-medium',
};
const iconTheme = {
    base: 'text-blue-50 hover:text-blue-100',
};
export default function FooterComponent() {
    return (
        <Footer className={`bg-blue-800 rounded-none  font`}>
            <div className="w-full container mx-auto">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                    <FooterLinkGroup theme={linkTheme} col>
                        <Footer.Link href="#">
                            <Image src={cstad} alt="Cstad logo" className="sm:w-36 sm:h-36 sm:ms-10 w-24 h-24"/>
                        </Footer.Link>
                        <Footer.Link href="#">Start your IT career with CSTAD</Footer.Link>
                    </FooterLinkGroup>
                    <div>
                        <Footer.Title title="Learn More" theme={titleTheme}/>
                        <Footer.LinkGroup theme={linkTheme} col>
                            <Footer.Link href="#">Course</Footer.Link>
                            <Footer.Link href="#">IT News</Footer.Link>
                            <Footer.Link href="#">Job Opportunity</Footer.Link>
                            <Footer.Link href="#">Privacy & Policy</Footer.Link>
                            <Footer.Link href="#">FAQ</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Contact Us" theme={titleTheme}/>
                        <Footer.LinkGroup theme={linkTheme} col>
                            <Footer.Link href="#">(+855) 95-990-910</Footer.Link>
                            <Footer.Link href="#">(+855) 93-990-910</Footer.Link>
                            <div className={`flex gap-3`}>
                                <Footer.Link href="#"><FaTelegram className='inline me-1'/>Telegram</Footer.Link>
                                <Footer.Link href="#"><FaYoutube className='inline me-1'/>Youtube</Footer.Link>
                            </div>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Follow Us" theme={titleTheme}/>
                        <Footer.LinkGroup theme={linkTheme} col>
                            <Footer.Link href="#">
                                <iframe width="300" height="200"
                                        src="https://www.youtube-nocookie.com/embed/DTx0m4zqBXI?si=-flYXivlJ7h3hk7u"
                                        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay;
                            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen>
                                </iframe>
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <Footer.Divider/>
                <div className="  px-4 py-6 flex justify-center gap-2.5">
                    <Footer.Copyright theme={copyRightTheme} href="#" by="Flowbite™" year={2024}/>
                    <p className="text-blue-50">Center of Science and Technology Advanced Development | All Rights
                        Reserved</p>
                </div>
            </div>
        </Footer>
    )
        ;
}
