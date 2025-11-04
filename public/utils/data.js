import Toggle from "@/app/components/Toggle";
import {
  diamond,
  exploreIcon,
  music,
  progressIcon,
  notepadIcon,
  users,
  usersIcon,
  reminderIcon,
  qrCode,
  addUserIcon,
  diaryIcon,
  toggleOnIcon,
  toggleOffIcon,
  loadingIcon,
} from "./svgs";
import ReminderAlert from "@/app/components/ReminderAlert";
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
    svg: "card2",
    title: "Select Engagement Model",
    desc: "Decide between staff augmentation or fixed-price project outsourcing.",
  },
  {
    id: 3,
    number: "03",
    svg: "card3",
    title: "Proposal & Agreement Finalization",
    desc: "Collaborate to make any final adjustments based on feedback.",
  },
  {
    id: 4,
    number: "04",
    svg: "card4",
    title: "Kick-off & Execution",
    desc: "We help you integrate them into your workflow.",
  },
  {
    id: 5,
    number: "YOUR PROJECT",
    svg: "card5",
    title: "Launch_your_app",
    desc: "Assemble your dream tech team with BX Track's pre-vetted talent. Seamlessly integrate our elite talents into your existing team through our Team Augmentation services, and leave it to us to handle all legal.",
  },
];
export const featureCardsData = [
  {
    id: 1,
    icon: music,
    heading: (
      <>
        {" "}
        AI Smart Notes and <br className="hidden sm:block" /> Auto-Reminders
      </>
    ),
    children: (
      <div className="flex flex-col gap-3 sm:gap-4">
        <ReminderAlert
          icon={notepadIcon}
          text={"Auto-record & note key details"}
        />
        <ReminderAlert icon={reminderIcon} text={"Smart follow-up reminders"} />
      </div>
    ),
  },
  {
    id: 2,
    heading: <>Smart Digital Business Card</>,
    children: (
      <div className="flex flex-col gap-3 sm:gap-4">
        <ReminderAlert
          icon={qrCode}
          text={"Instant sharing via QR code NFC, and link"}
        />
        <ReminderAlert
          icon={addUserIcon}
          text={"Customizable profile with branding options"}
        />
        <ReminderAlert
          icon={diaryIcon}
          text={"Auto-update ensures contacts always have your latest info"}
        />
      </div>
    ),
  },
  {
    id: 3,
    heading: "Effortless Sharing and Control",
    desc: "Enable/disable details anytime for privacy",
    children: (
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex justify-between items-center px-3 py-1 bg-white rounded-lg">
          <p className="text-black text-lg leading-6">Personal Information</p>
          <Toggle />
        </div>
        <div className="flex justify-between items-center px-3 py-1 bg-white rounded-lg">
          <p className="text-black text-lg leading-6">Contact Details</p>
          <Toggle />{" "}
        </div>
        <div className="flex justify-between items-center px-3 py-1 bg-white rounded-lg">
          <p className="text-black text-lg leading-6">Portfolio and Links</p>
          <Toggle />
        </div>
        <div className="flex justify-between items-center px-3 py-1 bg-white rounded-lg">
          <p className="text-black text-lg leading-6">Presentation</p>
          <Toggle />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    heading: "AI Networking",
    desc: "Connect smarter with AI-driven contact management.",
    children: (
      <div className="flex flex-col gap-2 relative">
        <div className="flex justify-between items-center py-4 w-full bg-white rounded-lg" />
        <div className="flex justify-between items-center py-4 w-full bg-white rounded-lg" />
        <div className="flex justify-between items-center py-3 w-full bg-white rounded-lg" />
        <div className="flex justify-between items-center py-2 w-full bg-white rounded-lg" />
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-0.5 items-center justify-center"
        >
          {loadingIcon}
          <p className="leading-6 text-xs text-black text-center">
            Generating Ideas
          </p>
        </div>
      </div>
    ),
  },
];
