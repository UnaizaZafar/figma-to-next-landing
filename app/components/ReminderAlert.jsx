
const ReminderAlert = ({icon,text}) => {
    return (
        <div className="rounded-lg flex gap-2.5 sm:gap-4 items-center bg-white px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-sm hover:shadow-md transition-all duration-300">
            <span className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:h-9 md:w-9 flex items-center justify-center">{icon}</span>
            <p className="text-sm sm:text-base md:text-lg text-black leading-5 sm:leading-6">{text}</p>
        </div>)
}

export default ReminderAlert