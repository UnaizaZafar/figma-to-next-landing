'use client'
import { useState } from 'react';
import { featureCardsData } from "@/public/utils/data"
import { arrowRightIcon } from '@/public/utils/svgs';
import CardPlaceholder from './CardPlaceholder';

const CardsCarousel = () => {
    const [currentIdx, setCurrentIdx] = useState(1);
    const totalItems = featureCardsData.length;

    const getIndex = (index) => (index % totalItems + totalItems) % totalItems;

    const leftIdx = getIndex(currentIdx - 1);
    const centerIdx = currentIdx;
    const rightIdx = getIndex(currentIdx + 1);

    const changeItem = (step) => {
        setCurrentIdx((prevIdx) => getIndex(prevIdx + step));
    };



    return (
        <div className="h-auto md:h-100 relative w-full">
            <div className="mx-auto mt-10 md:mt-20 relative px-2 sm:px-4 md:px-14 md:w-5/6 h-4/5">
                <div className="lg:grid lg:grid-cols-[1fr_1.7fr_1fr] gap-4 sm:gap-6 md:gap-8  h-full items-center md:items-start">
                    <div className="hidden lg:block h-full transition-all duration-500 transform scale-y-[0.8] scale-x-90">
                        <CardPlaceholder data={featureCardsData[leftIdx]} isAdjacent={true} />
                    </div>
                    <div
                        className="z-10 h-full transition-all duration-500 transform scale-y-[1] scale-x-[1] translate-y-0"
                    >
                        <CardPlaceholder data={featureCardsData[centerIdx]} isActive={true} />
                    </div>

                    <div className="hidden lg:block h-full transition-all duration-500 transform scale-y-[0.8] scale-x-90">
                        <CardPlaceholder data={featureCardsData[rightIdx]} isAdjacent={true} />
                    </div>
                </div>
                {/* Arrows */}
                <span
                    className=" absolute top-1/2 left-2 sm:left-4 md:left-6 z-20 rotate-180 cursor-pointer -translate-y-1/2 p-0.5 md:p-2"
                    onClick={() => changeItem(-1)}
                >
                    {arrowRightIcon}
                </span>
                <span
                    className=" absolute top-1/2 right-2 sm:right-4 md:right-6 z-20 cursor-pointer -translate-y-1/2 p-0.5 md:p-2"
                    onClick={() => changeItem(1)}
                >
                    {arrowRightIcon}
                </span>
            </div>
            {/* Pagination */}
            <div className="absolute flex gap-2 sm:gap-3 md:gap-4 -bottom-4 md:bottom-0 left-1/2 -translate-x-1/2">
                {featureCardsData.map((_, index) => (
                    <span
                        key={index}
                        className={`block  rounded-md cursor-pointer transition-colors duration-300 ${index === currentIdx ? 'bg-yellow-400 w-4 h-2 sm:w-4.5 sm:h-2.5':"bg-grey w-2 h-2 sm:w-2.5 sm:h-2.5"
                            }`}
                        onClick={() => setCurrentIdx(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default CardsCarousel;