import { diamond, exploreIcon, progressIcon, users, usersIcon } from "./svgs";
import ProjectBatch from "@/app/components/ProjectBatch";

export const projectOverviewData = [
  {
    id: 1,
    icon: progressIcon,
    title: "Inprogress",
  },
  {
    id: 2,
    icon: users,
    title: usersIcon,
  },
  {
    id: 3,
    icon: exploreIcon,
    title: "Exploration",
  },
  {
    id: 4,
    icon: users,
    title: "User interviews",
  },
  {
    id: 5,
    icon: diamond,
    title: (
      <>
        Project Timeline <span className="text-[#71788A]">100%</span>
      </>
    ),
  },
  {
    id: 6,
    icon: diamond,
    title: (
      <>
        Project Estimation <span className="text-[#71788A]">100%</span>
      </>
    ),
  },
];
export const ourApproachCardsData = [
  {
    id: 1,
    number: "01",
    children: (
      <div className="rounded-t-xl px-6 pt-6 mt-5 shadow-[0px_-1px_2px_rgba(48, 59, 10, 0.12),-1px_0px_4px_rgba(48, 59, 10, 0.12)] flex flex-col gap-3 w-4/5">
        <div className="flex gap-3 items-center">
          <p className="font-semibold text-xl leading-5.5 text-[#2F333F]">
            Project Overview
          </p>
          <p className="font-medium text-[10px] text-[#9F9F9F]/70">
            25 Oct 2024
          </p>
        </div>
        {/* Inside card */}
        <div className="flex gap-3 ">
          <div className="flex flex-col gap-2 text-[#71788A] leading-5.5 font-medium text-xs">
            <p>Properties</p>
            <p> Docs & links</p>
            <p>Milestones</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {projectOverviewData.map((item) => (
              <ProjectBatch icon={item.icon} key={item.id}>
                {item.title}
              </ProjectBatch>
            ))}
          </div>
        </div>
      </div>
    ),
    title: "Define Your Niche",
    desc: "Understand your project’s needs and gather all relevant requirements.",
  },
  {
    id: 2,
    number: "02",
    children: "<>",
    title: "Select Engagement Model",
    desc: "Decide between staff augmentation or fixed-price project outsourcing.",
  },
  {
    id: 3,
    number: "03",
    children: "<>",
    title: "Proposal & Agreement Finalization",
    desc: "Collaborate to make any final adjustments based on feedback.",
  },
  {
    id: 4,
    number: "04",
    children: "<>",
    title: "Kick-off & Execution",
    desc: "We help you integrate them into your workflow.",
  },
  {
    id: 5,
    number: "YOUR PROJECT",
    children: "<>",
    title: "Launch_your_app",
    desc: "Assemble your dream tech team with BX Track's pre-vetted talent. Seamlessly integrate our elite talents into your existing team through our Team Augmentation services, and leave it to us to handle all legal.",
  },
];
