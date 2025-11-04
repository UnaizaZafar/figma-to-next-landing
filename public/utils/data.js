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
    svg: "card1",
    title: "Define Your Niche",
    desc: "Understand your project’s needs and gather all relevant requirements.",
  },
   {
    id: 2,
    number: "02",
    svg:"card2",
    title: "Select Engagement Model",
    desc: "Decide between staff augmentation or fixed-price project outsourcing.",
  },
  {
    id: 3,
    number: "03",
    svg:"card3",
    title: "Proposal & Agreement Finalization",
    desc: "Collaborate to make any final adjustments based on feedback.",
  },
  {
    id: 4,
    number: "04",
    svg:"card4",
    title: "Kick-off & Execution",
    desc: "We help you integrate them into your workflow.",
  },
  {
    id: 5,
    number: "YOUR PROJECT",
    svg:"card5",
    title: "Launch_your_app",
    desc: "Assemble your dream tech team with BX Track's pre-vetted talent. Seamlessly integrate our elite talents into your existing team through our Team Augmentation services, and leave it to us to handle all legal.",
  },
];
