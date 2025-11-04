import { music, notepadIcon, reminderIcon } from "@/public/utils/svgs"
import ReminderAlert from "./ReminderAlert"

const ExploreFeaturesSection = () => {
    return (
        <div className="flex flex-col items-center gap-10 sm:gap-12 py-5 sm:py-8 md:py-10 pb-24 sm:pb-32 md:pb-37.5 max-sm:px-6">
            <div className="flex flex-col gap-3 sm:gap-4 items-center">
                <p className="font-medium text-base sm:text-xl md:text-2xl leading-snug sm:leading-7 text-center text-[#535862]">Intelligent tools for effortless networking</p>
                <p className="font-lufga bg-linear-to-l bg-clip-text to-[#0FB287] from-[#0A3E94] md:w-[625px] text-transparent font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight sm:leading-14 uppercase text-center">Explore Our Powerful Features</p>
            </div>
            {/* cards carousal */}
            <div className="flex flex-col gap-4 sm:gap-5.5 justify-between rounded-22 bg-[#F7F7F7] pt-6 sm:pt-8 pb-4 sm:pb-3.5 px-4 md:px-4.5 mx-auto">
                <span className="place-items-center px-4 sm:px-5  flex items-center justify-center">
                    {music}
                </span>
                <p className="font-bold text-2xl sm:text-3xl leading-8 sm:leading-9 text-black pt-6">
                    AI Smart Notes and <br  className="hidden sm:block" /> Auto-Reminders
                </p>
                <div className="flex flex-col gap-3 sm:gap-4">
                    <ReminderAlert icon={notepadIcon} text={"Auto-record & note key details"} />
                    <ReminderAlert icon={reminderIcon} text={"Smart follow-up reminders"} />
                </div>
            </div>

        </div>
    )
}

export default ExploreFeaturesSection