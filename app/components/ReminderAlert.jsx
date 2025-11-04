
const ReminderAlert = ({icon,text}) => {
    return (
        <div className="rounded-lg flex gap-4 items-center bg-white px-3 py-2">
            <span>{icon}</span>
            <p className="text-lg text-black leading-6">{text}</p>
        </div>)
}

export default ReminderAlert