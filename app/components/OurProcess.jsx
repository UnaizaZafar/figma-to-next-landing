import { star } from "@/public/utils/svgs"
import ProcessCard from "./ProcessCard"

const OurProcess = () => {
    return (
        <div className="px-67.5 py-37.5 flex flex-col gap-4 items-center">
            <div className="bg-white text-neutral-900 border border-dashed border-grey rounded-4xl pl-4 pr-2.5 py-1.5 flex gap-1.5 items-center">{star} Our Process</div>
            <div className="flex flex-col gap-0.5 items-center">
                <p className="font-semibold text-5xl text-neutral-900 leading-14 text-center tracking-tightest">How our Approach</p>
                <p className="font-medium text-lg leading-7 tracking-[-0.18px] max-w-116.5 text-center">A quick overview of how we work together to make your </p>
            </div>
                <ProcessCard />
            {/* </div> */}
        </div>
    )
}

export default OurProcess