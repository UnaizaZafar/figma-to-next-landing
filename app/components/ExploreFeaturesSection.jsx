import { music, notepadIcon, reminderIcon } from "@/public/utils/svgs"
import ReminderAlert from "./ReminderAlert"
import FeaturesCard from "./FeaturesCard"

const ExploreFeaturesSection = () => {
    return (
        <div className="flex flex-col items-center gap-10 sm:gap-12 py-5 sm:py-8 md:py-10 pb-24 sm:pb-32 md:pb-37.5 max-sm:px-6">
            <div className="flex flex-col gap-3 sm:gap-4 items-center">
                <p className="font-medium text-base sm:text-xl md:text-2xl leading-snug sm:leading-7 text-center text-[#535862]">Intelligent tools for effortless networking</p>
                <p className="font-lufga bg-linear-to-l bg-clip-text to-[#0FB287] from-[#0A3E94] md:w-[625px] text-transparent font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight sm:leading-14 uppercase text-center">Explore Our Powerful Features</p>
            </div>
            {/* cards carousal */}
            <div className="flex items-center gap-10.5">
                <FeaturesCard />
            </div>
        </div>
    )
}

export default ExploreFeaturesSection