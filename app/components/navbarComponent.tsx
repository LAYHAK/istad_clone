'use client'
import {Navbar} from 'flowbite-react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cstad from '../../public/images/logo/cstad.png';

const customTheme = {
    root: {
        inner: {
            base: 'mx-auto flex lg:gap-32 flex-wrap justify-between  lg:items-center lg:justify-start ',
        }
    },
};
const customLink = {
    active: {
        off: 'text-blue-50 font-extrabold',
    }
}
const customBrand = {
    base: 'flex gap-2 items-center justify-center',
};
const toggle = {
    base: 'flex items-center justify-center  rounded-lg p-2 text-sm text-blue-50  focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-blue-400 dark:focus:ring-blue-600 lg:hidden'
}
const collapse = {
    base: 'w-full lg:block lg:w-auto',
    list: 'mt-4 flex flex-col md:mt-0 lg:flex-row lg:space-x-8 md:justify-center md:text-sm md:font-medium',
}
const NavbarComponent = () => {
    return (

        <Navbar fluid theme={customTheme} className="sticky lg:ps-10 top-0 z-50 bg-blue-800  ">
            <Navbar.Brand as={Link} href="https://flowbite-react.com" theme={customBrand} className="lg:ps-10">
                <Image src={cstad} alt="ISTAD" width={45} height={45}/>
                <span
                    className="self-center whitespace-nowrap text-blue-50 text-2xl font-extrabold ">CSTAD</span>
            </Navbar.Brand>
            <Navbar.Toggle theme={toggle}/>
            <Navbar.Collapse theme={collapse}>
                <Navbar.Link href="/" className="text-lg text-blue-50 font-extrabold text-center lg:text-start"
                             theme={customLink}>
                    Home
                </Navbar.Link>
                <Navbar.Link as={Link} className="text-lg text-blue-50 font-extrabold text-center lg:text-start "
                             theme={customLink} href="/enroll">
                    Enroll
                </Navbar.Link>
                <Navbar.Link className="text-lg text-blue-50 font-extrabold text-center lg:text-start "
                             theme={customLink}
                             href="/course">Course</Navbar.Link>
                <Navbar.Link className="text-lg text-blue-50 font-extrabold text-center lg:text-start"
                             theme={customLink}
                             href="/it-news">IT News</Navbar.Link>
                <Navbar.Link className="text-lg text-blue-50 font-extrabold text-center lg:text-start"
                             theme={customLink}
                             href="/job-opportunity">Job Opportunity</Navbar.Link>
                <Navbar.Link className="text-lg text-blue-50 font-extrabold text-center lg:text-start"
                             theme={customLink}
                             href="/about-us">About Us</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );


};

export default NavbarComponent;