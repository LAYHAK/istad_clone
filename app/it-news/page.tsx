import React from 'react';
import ItNewsCard from "@/app/components/itNewsCard";
import PaginationComponent from "@/app/components/pagination";

const Page = () => {
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-gray-900 font-extrabold uppercase text-3xl my-3 mx-20"> Useful Contents</h1>
            <ItNewsCard/>
            <PaginationComponent/>
        </div>
    );
};

export default Page;