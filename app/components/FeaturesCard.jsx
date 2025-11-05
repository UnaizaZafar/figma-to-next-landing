
import { featureCardsData } from "@/public/utils/data"

const FeaturesCard = () => {
    const repeatedCards = [...featureCardsData, ...featureCardsData]

    return (
        <div className="w-full flex flex-col items-center">
            {/* Cards container */}
            <div
                className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10.5 justify-center items-stretch overflow-hidden"
            >
                {repeatedCards.map((item, index) => (
                    <div  key={`${item.id}-${index}`} className={`flex flex-col gap-4 sm:gap-5.5 justify-around rounded-22 bg-[#F7F7F7] pt-6 sm:pt-8 pb-4 sm:pb-3.5 px-4 md:px-4.5 mx-auto aspect-[4/4.3]
                     ${index === Math.floor(repeatedCards.length / 2)
                            ? "scale-105 shadow-xl z-10" // Center card larger
                            : "scale-100 opacity-90"}
              w-[260px] sm:w-[300px] md:w-[340px] lg:max-w-114.5 
                    `}>
                        {item.icon && <span className="place-items-center px-4 sm:px-5  flex items-center justify-center">
                            {item?.icon}
                        </span>
                        }
                        <p className={`font-bold text-2xl sm:text-3xl leading-8 sm:leading-9 text-black  ${item.icon && "pt-6"}`}>
                            {item.heading}
                        </p>
                        <p className="text-black text-sm sm:text-base leading-6">{item?.desc}</p>
                        {item.children}
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-2 mt-6">
                {featureCardsData.map((_, i) => (
                    <span
                        key={i}
                        className={`w-2 h-2 rounded-full ${i === 0 ? "bg-[#0A3E94]" : "bg-gray-400"
                            }`}
                    ></span>
                ))}
            </div>
        </div>
    )
}

export default FeaturesCard