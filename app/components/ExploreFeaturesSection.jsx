import CardsCarousel from "./CardsCarousel"

const ExploreFeaturesSection = () => {
    return (
        <div className="flex flex-col items-center gap-10 sm:gap-12 py-5 sm:py-8 md:py-10 pb-24 sm:pb-32 md:pb-37.5">
            <div className="flex flex-col gap-3 sm:gap-4 items-center max-sm:px-6">
                <p className="font-medium text-base sm:text-xl md:text-2xl leading-snug sm:leading-7 text-center text-[#535862]">Intelligent tools for effortless networking</p>
                <p className="font-lufga bg-linear-to-l bg-clip-text to-[#0FB287] from-[#0A3E94] lg:max-w-156 w-full  text-transparent font-extrabold text-4xl sm:text-5xl md:text-6xl
                 leading-tight sm:leading-14 uppercase text-center">Explore Our Powerful Features</p>
            </div>

            <CardsCarousel />
        </div>
    )
}

export default ExploreFeaturesSection