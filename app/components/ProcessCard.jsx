import { ourApproachCardsData } from "@/public/utils/data"

const ProcessCard = () => {
    return (
        <div className="pt-8.5 grid grid-cols-2 gap-2.5">
            {
                ourApproachCardsData.map((item) => (
                    <div className={`rounded-20 border border-grey border-dashed bg-white drop-shadow-custom pt-2.5 pl-2.5 w-full   ${item.id === ourApproachCardsData.length - 0 && "col-span-2"}`} key={item.id}>
                        <div className="flex justify-between overflow-hidden">
                            <div className="border border-grey border-dashed px-3.5 py-1 rounded-xl text-lg font-medium text-neutral-900 leading-6 tracking-[-1px] bg-snow-white h-max">{item.number}</div>
                            {item.children}
                        </div>
                        {/* text field */}
                        <div className="px-4 pb-6.5 pt-3.5 flex flex-col gap-2.5 bg-white">
                            <p className="font-medium text-xl leading-7 text-neutral-900">{item.title}</p>
                            <p className="text-gray-900 tracking-[-0.018em] leading-6">{item.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProcessCard