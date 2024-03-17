'use client';
import {FaLayerGroup} from "react-icons/fa";
import {Card} from 'flowbite-react';
import {IoIosTime} from "react-icons/io";

const children = {
    root: {
        children: 'flex h-full flex-col justify-center gap-10 p-10 ',
    }
}
export default function CardComponent({card}) {
    const {title, description, image} = card;

    return (
        <Card className="w-full" imgSrc={image} theme={children} horizontal>
            <div className='flex flex-row gap-2.5'>
                <div className="basis-[70%]">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900  dark:text-white">
                        {title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                        {description}
                    </p>
                </div>
                <div className="basis-[30%]">
                    <div>
                        <IoIosTime className="text-blue-800 inline"/><span className="text-[13px]"> 80 hours</span>
                    </div>
                    <div>
                        <FaLayerGroup className="text-blue-800 inline "/><span className="text-[13px]"> Medium</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}
