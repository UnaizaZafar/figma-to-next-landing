import { star } from "@/public/utils/svgs"
import ProcessCard from "./ProcessCard"

const OurProcess = () => {
    return (
        <div className="py-20 md:py-30 lg:py-37.5 flex flex-col gap-3 md:gap-4 items-center max-w-11/12 md:max-w-225 w-full md:mx-auto max-sm:px-4 max-md:px-6">
            <div className="bg-white text-neutral-900 border border-dashed border-grey rounded-4xl pl-4 pr-2.5 py-1.5 flex gap-1.5 items-center text-sm sm:text-base">{star} Our Process</div>
            <div className="flex flex-col gap-0.5 items-center">
                <p className="font-semibold text-3xl sm:text-4xl md:text-5xl text-neutral-900 leading-tight md:leading-14 text-center tracking-tightest">How our Approach</p>
                <p className="font-medium text-sm sm:text-base md:text-lg leading-relaxed md:leading-7 tracking-0.18 max-w-11/12 md:max-w-116.5 w-full text-center">A quick overview of how we work together to make your </p>
            </div>
                <ProcessCard />
            {/* </div> */}
        </div>
    )
}

export default OurProcess