
const ProjectBatch = ({ icon, children }) => {
    return (
        <div className="flex items-center gap-2 text-xs leading-5.5 font-semibold px-1 rounded-lg hover:bg-[#EBF4CD] transition-all duration-300 w-max">
            {icon && icon}
            {children}
        </div>
    )
}

export default ProjectBatch