import React from 'react';
import {Card} from "flowbite-react";
import {FaTags} from "react-icons/fa";

type CardProps = {
    img: string;
    title: string;
}
const CardCarousel = ({img, title}: CardProps) => {
    return (
        <Card
            className="w-full mb-5"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
        >
            <img src={img} alt="image"/>
            <div className='flex justify-between'>
                <div>
                    <FaTags className="text-blue-800 inline"/><span>blog</span>
                </div>
                <div>
                    24/12/2023
                </div>
            </div>
            <p className=" text-gray-700 dark:text-gray-400 font-bold line-clamp-1">
                {title}
            </p>
        </Card>

    );
};

export default CardCarousel;