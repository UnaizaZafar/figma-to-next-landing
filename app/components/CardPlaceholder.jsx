const CardPlaceholder = ({ data }) => {
    return (
        <div className={`flex flex-col  gap-3 sm:gap-4 md:gap-5.5 justify-around rounded-22 bg-[#F7F7F7] pt-5 sm:pt-6 md:pt-8 pb-4 sm:pb-3.5 px-3 sm:px-4 md:px-4.5 mx-auto aspect-[4/4.3] w-full sm:w-auto 
        max-w-sm lg:max-w-114.5 
                    `}>
            {data.icon && <span className="place-items-center px-4 sm:px-5  flex items-center justify-center">
                {data?.icon}
            </span>
            }
            <p className={`font-bold text-2xl sm:text-3xl leading-8 sm:leading-9 text-black  ${data.icon && "pt-6"}`}>
                {data.heading}
            </p>
            <p className="text-black text-sm sm:text-base leading-6">{data?.desc}</p>
            {data.children}
        </div>
    );
};
export default CardPlaceholder