import { music, notepadIcon, reminderIcon } from "@/public/utils/svgs"
import ReminderAlert from "./ReminderAlert"

const ExploreFeaturesSection = () => {
    return (
        <div className="flex flex-col items-center gap-12 py-2.5 pb-37.5">
            <div className="flex flex-col gap-4 items-center">
                <p className="font-medium text-2xl leading-7 text-center text-[#535862]">Intelligent tools for effortless networking</p>
                <p className="font-lufga bg-linear-to-l bg-clip-text to-[#0FB287] from-[#0A3E94] w-[625px] text-transparent font-extrabold text-6xl leading-14 uppercase text-center">Explore Our Powerful Features</p>
            </div>
            {/* cards carousal */}
            <div className="flex flex-col gap-5.5 justify-between rounded-22 bg-[#F7F7F7] pt-8 pb-3.5 px-4.5 mx-auto">
                <span className="place-items-center px-5">
                    {music}
                </span>
                <p className="font-bold text-3xl leading-9 text-black">
                    AI Smart Notes and <br /> Auto-Reminders
                </p>
                <div className="flex flex-col gap-4">
                    <ReminderAlert icon={notepadIcon} text={"Auto-record & note key details"} />
                    <ReminderAlert icon={reminderIcon} text={"Smart follow-up reminders"} />
                </div>
            </div>

        </div>
    )
}

export default ExploreFeaturesSection