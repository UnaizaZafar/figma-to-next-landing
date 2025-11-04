import { featureCardsData } from "@/public/utils/data"
const FeaturesCard = () => {
    return (
        <>
            {featureCardsData.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 sm:gap-5.5 justify-between rounded-22 bg-[#F7F7F7] pt-6 sm:pt-8 pb-4 sm:pb-3.5 px-4 md:px-4.5 mx-auto max-w-114.5">
                    {item.icon &&
                        <span className="place-items-center px-4 sm:px-5  flex items-center justify-center">
                            {item?.icon}
                        </span>
                    }
                    <p className={`font-bold text-2xl sm:text-3xl leading-8 sm:leading-9 text-black  ${item.icon && "pt-6"}`}>
                        {item.heading}
                    </p>
                    <p className="text-black ">{item?.desc}</p>
                    {item.children}

                </div>
            ))}
        </>
    )
}

export default FeaturesCard