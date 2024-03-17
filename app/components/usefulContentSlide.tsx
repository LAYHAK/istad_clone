'use client';
import {Carousel} from '@mantine/carousel';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {rem} from "@mantine/core";
import classes from "@/app/css/slide.module.css";
import React, {useRef} from "react";
import Autoplay from "embla-carousel-autoplay";
import CardCarousel from "@/app/components/cardCarousel";


const data = [
    /* ... urls of images */
    {
        img: '/images/useful_content/useful1.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    {
        img: '/images/useful_content/useful2.png',
        title: 'Mission',
    },
    {
        img: '/images/useful_content/useful3.png',
        title: 'Vision',
    },
    {
        img: '/images/useful_content/useful4.png',
        title: 'Vision',
    },
    {
        img: '/images/useful_content/useful5.png',
        title: 'Vision',
    },
    {
        img: '/images/useful_content/useful6.png',
        title: 'Vision',
    },
    {
        img: '/images/useful_content/useful7.png',
        title: 'Vision',
    },
    {
        img: '/images/useful_content/useful8.png',
        title: 'Vision',
    },
    {
        img: '/images/useful_content/useful9.png',
        title: 'Vision',
    },
    {
        img: '/images/useful_content/useful10.png',
        title: 'Vision',
    },
    {
        img: '/images/useful_content/useful11.png',
        title: 'Vision',
    },
    {
        img: '/images/useful_content/useful12.png',
        title: 'Vision',
    },
    {
        img: '/images/useful_content/useful13.png',
        title: 'Vision',
    },
    {
        img: '/images/useful_content/useful14.png',
        title: 'Vision',
    },
]
const slides = data.map((item) => {
    return (
        <Carousel.Slide key={item.title}>
            <CardCarousel {...item}/>
        </Carousel.Slide>
    )
});
const card = data.map((item) => {
    return (
        <CardCarousel key={item.title} {...item}/>
    )
})
export default function UsefulContentSlide() {
    const autoplay = useRef(Autoplay({delay: 3000}));
    return (
        <div className="container mx-auto my-5">
            <h1 className="text-gray-900 font-extrabold text-3xl my-3 mx-20"> Useful Content</h1>
            <Carousel
                className="mx-20"
                nextControlIcon={
                    <FaArrowRight style={{width: rem(30), height: rem(30), color: '#1e429f'}}/>
                }
                previousControlIcon={
                    <FaArrowLeft
                        style={{width: rem(30), height: rem(30), color: '#1e429f'}}/>
                }
                controlSize={40}
                classNames={{indicator: classes.indicator}}
                loop
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                slideSize={{base: '100%', sm: '50%', md: '33.333333%'}}
                slideGap={{base: 0, sm: 10, md: 20}}
            >
                {slides}
            </Carousel>
        </div>
    );
}
