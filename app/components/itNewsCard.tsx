import React from 'react';
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


const card = data.map((item) => {
    return (
        <CardCarousel key={item.title} {...item}/>
    )
})
const ItNewsCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-20 py-5">
            {card}
        </div>
    );
};

export default ItNewsCard;