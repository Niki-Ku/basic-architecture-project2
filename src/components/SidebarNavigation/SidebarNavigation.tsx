import SidebarDropdown from "../SidebarDropdown/SidebarDropdown";

const sidebarDropdownLinks = [
  {
    title: 'contactingUs',
    id: 'contacting-us',
  },
  {
    title: 'sectionA',
    id: 'section-a',
    subLinks: [
      {
        title: "theCategoriesOfPersonalInformationWeCollect",
        id: "the-categories-of-personal-information-we-collect",
      },
      {
        title: "whereWeCollectPersonalInformationFrom",
        id: "where-we-collect-personal-information-from",
      },
      {
        title: "howWeUseYourPersonalInformation",
        id: "how-we-use-your-personal-information",
      },
    ]
  },
  {
    title: 'sectionB',
    id: 'section-b',
    subLinks: [
      {
        title: "yourPrivacyRights",
        id: "your-privacy-rights",
      },
      {
        title: "communicationAndMarketingPreferences",
        id: "communication-and-marketing-preferences",
      },
      {
        title: "advertisingChoices",
        id: "advertising-choices",
      },
    ]
  },
]

interface ISidebarNavigation {
  activeTopic: string;
  allSections: HTMLDivElement[];
  setActiveTopic: Function;
  openSection?: string;
}

const SidebarNavigation:React.FC<ISidebarNavigation> =  ({ activeTopic, allSections, setActiveTopic, openSection }) => {
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
          openSection={openSection}
         />
      ))}
    </div>
  );
};

export default SidebarNavigation;
