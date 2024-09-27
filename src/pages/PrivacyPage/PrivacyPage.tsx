import PrivacyStatement from "./PrivacyPageComponents/PrivacyStatement";
import ContactingUs from "./PrivacyPageComponents/ContactingUs";
import SidebarNavigation from "../../components/SidebarNavigation/SidebarNavigation";
import { useEffect, useMemo, useRef, useState } from "react";
import TheCategoriesOfPersonal from "./PrivacyPageComponents/TheCategoriesOfPersonal";
import WhereWeCollectPersonal from "./PrivacyPageComponents/WhereWecollectPersonal";
import HowWeUsePersonal from "./PrivacyPageComponents/HowWeUsePersonal";
import YourPrivacyRights from "./PrivacyPageComponents/YourPrivacyRights";
import ComunicationAndMarketing from "./PrivacyPageComponents/ComunicationAndMarketing";
import AdvertisingChoices from "./PrivacyPageComponents/AdvertisingChoices";
import "./PrivacyPage.css";

// TODO:
// find solution to keep active elements of sidebar in view
// make onpen/close state of each section

const PrivacyPage = () => {
  const [ activeSection, setActiveSection ] = useState('');
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  const options = useMemo(() => {
    return {
      threshold: 0,
      rootMargin: '-10px'
    }
  }, [])

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    const currentEntryId = entry.target.id;
    const currentEntryIndex = sectionRefs.current.findIndex(el => el.id === currentEntryId);
    const activeSectionIndex = sectionRefs.current.findIndex(el => el.id === activeSection);
    const previouseToActiveSectionId = sectionRefs.current[activeSectionIndex - 1]?.id;
    const nextSectionId = sectionRefs.current[activeSectionIndex + 1]?.id;
    
    if (currentEntryIndex === activeSectionIndex && !entry.isIntersecting) {
      setActiveSection(nextSectionId);
      return
    }
    if (previouseToActiveSectionId === currentEntryId && entry.isIntersecting) {
      setActiveSection(currentEntryId)
      return
    }
  }, options)

useEffect(() => {
    if (activeSection === '') {
        setActiveSection(sectionRefs.current[0]?.id);
    }

    sectionRefs.current.forEach(ref => {
        observer.observe(ref);
    });

    return () => {  
      sectionRefs.current.forEach(ref => {
          observer.unobserve(ref);
      });
    };
}, [activeSection]);

  return(
    <div className="bg-white text-black">
      <div> back to home link and print button here </div>
      <div>
        <div className="sideBar sticky top-[100px] max-w-[275px] w-[25%] overflow-y-auto float-left border-t-4 border-red">
          <SidebarNavigation activeSection={activeSection} setActiveSection={setActiveSection} allSections={sectionRefs.current} />
        </div>
        <div className="flex flex-col ml-auto">
          <PrivacyStatement id="privacy-statement" ref={addToRefs} />
          <ContactingUs id="contacting-us" ref={addToRefs} />
          <section>
            <h2 
              className={`text-3xl my-10 `} 
              id="section-a" 
              ref={addToRefs}
            > 
              Section A: Our Collection, Use, and Disclosure of Personal Information
            </h2>
            <TheCategoriesOfPersonal ref={addToRefs} id="the-categories-of-personal-information-we-collect" />
            <WhereWeCollectPersonal ref={addToRefs} id="where-we-collect-personal-information-from" />
            <HowWeUsePersonal ref={addToRefs} id="how-we-use-your-personal-information" />
          </section>
          <section>
            <h2 
              className={`text-3xl my-10 `} 
              id="section-b" 
              ref={addToRefs}
            > 
              Section B: Your Rights and Controls
            </h2>
            <YourPrivacyRights ref={addToRefs} id="your-privacy-rights" />
            <ComunicationAndMarketing ref={addToRefs} id="communication-and-marketing-preferences" />
            <AdvertisingChoices ref={addToRefs} id="advertising-choices" />
          </section>
        </div>
      </div>
        {/* remove in the end */}
        <div className="min-h-[200dvh]"></div>
    </div>
  )
};

export default PrivacyPage;
