import React from 'react';
import CardComponent from "@/app/components/cardComponent";

const cards = [
    {
        title: 'FLUTTER MOBILE DEVELOPMENT',
        description: 'Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.',
        image: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
    },
    {
        title: 'IOS MOBILE DEVELOPMENT',
        description: 'iOS development is the process of creating mobile applications for Apple hardware, including iPhone, iPad and iPod Touch. The software is written in the Swift programming language or Objective-C and then deployed to the App Store for users to download.',
        image: 'https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png',
    },
    {
        title: 'DEVOPS ENGINEERING',
        description: 'This course will provide you with in-depth knowledge on how to build applications on the cloud. This program will help you learn the best practices for deploying SaaS, PaaS, and IaaS applications on Server. Master DevOps tools to automate and improve the overall efficiency and delivery of software applications.',
        image: 'https://api.istad.co/media/image/835a7298-dbab-448d-8229-ee8a555c4846.png',
    },
    {
        title: 'SQL & DATA MODELING WITH POSTGRESQL',
        description: 'This course will provide you with in-depth knowledge on how to build applications on the cloud. This program will help you learn the best practices for deploying SaaS, PaaS, and IaaS applications on Server. Master DevOps tools to automate and improve the overall efficiency and delivery of software applications.',
        image: 'https://api.istad.co/media/image/354762b5-e27a-40ac-93c3-6de5cdb0362f.png',
    },
    {
        title: 'Web Design',
        description: 'Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization.',
        image: 'https://api.istad.co/media/image/3a3d2bf2-670b-4f2f-a72a-b9b8ba3a0f38.png',
    },
    {
        title: 'C++ Programming',
        description: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.',
        image: 'https://api.istad.co/media/image/73c3424a-39e0-450c-8969-8b35559594f5.png',
    },
    {
        title: 'Dockers',
        description: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.',
        image: 'https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png',
    },
    {
        title: 'Data Analysis',
        description: 'Data analysis is a process of inspecting, cleansing, transforming and modeling data with the goal of discovering useful information, informing conclusions and supporting decision-making. Data analysis has multiple facets and approaches, encompassing diverse techniques under a variety of names, and is used in different business, science, and social science domains.',
        image: 'https://api.istad.co/media/image/a3c4f87e-7a85-44c3-a568-6c5abef76cfe.png',
    }
];
const Course = () => {
    return (
        <section className='container mx-auto my-5'>
            <h1 className="text-gray-900 font-extrabold text-3xl my-3 mx-20"> Course</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-3 mx-20'>
                {cards.map((card, index) => (
                    <CardComponent key={index} card={card}/>
                ))}
            </div>
        </section>
    );
};
export default Course;