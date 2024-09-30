import SidebarDropdown from "../SidebarDropdown/SidebarDropdown";

const sidebarDropdownLinks = [
  {
    title: 'Contacting Us',
    id: 'contacting-us',
  },
  {
    title: 'Section A: Our Collection, Use, and Disclosure of Personal Information',
    id: 'section-a',
    subLinks: [
      {
        title: "The Categories of Personal Information We Collect",
        id: "the-categories-of-personal-information-we-collect",
      },
      {
        title: "Where We Collect Personal Information From",
        id: "where-we-collect-personal-information-from",
      },
      {
        title: "How We Use Your Personal Information",
        id: "how-we-use-your-personal-information",
      },
    ]
  },
  {
    title: 'Section B: Your Rights and Controls',
    id: 'section-b',
    subLinks: [
      {
        title: "Your Privacy Rights",
        id: "your-privacy-rights",
      },
      {
        title: "Communication and Marketing Preferences",
        id: "communication-and-marketing-preferences",
      },
      {
        title: "Advertising Choices",
        id: "advertising-choices",
      },
    ]
  },
]

interface ISidebarNavigation {
  activeTopic: string;
  allSections: HTMLDivElement[];
  setActiveTopic: Function ;
}

const SidebarNavigation:React.FC<ISidebarNavigation> =  ({ activeTopic, allSections, setActiveTopic }) => {
  return (
    <div>
      {sidebarDropdownLinks.map(dropdownLink => (
        <SidebarDropdown 
          key={dropdownLink.id} 
          title={dropdownLink.title} 
          id={dropdownLink.id} 
          subLinks={dropdownLink.subLinks} 
          allSections={allSections} 
          activeTopic={activeTopic}
          setActiveTopic={setActiveTopic}
         />
      ))}
    </div>
  );
};

export default SidebarNavigation;
