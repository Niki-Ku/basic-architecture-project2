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


// TODO:
// find solution to keep active elements of sidebar in view
// fix bug (when you click on section to scroll it into view, active section shows wrong)    DONE
// make onpen/close state of each section
// setActiveSection on click



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
// upgrade if/else statement in observer
  // set first element as current         DONE 
  // check if previous element intersecting with page, if yes then set it to current      DONE
  // if current element is intersecting then there is no changes 
  // when current element is no longer intersecting, then set active state to next element

  useEffect(() => {
    if (activeSection === '') {
      setActiveSection(sectionRefs.current[0].id);
      return
    } 
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      const activeEntry = entries.find(entry => entry.target.id === activeSection);
      const currentIndex = sectionRefs.current.indexOf(activeEntry?.target as HTMLDivElement);    //rename
      // const activeEntryIndex = entries.indexOf(activeEntry!);
      const prevEntry = entries[currentIndex - 1];
      // const nextEntry = entries[activeEntryIndex + 1];

      if (prevEntry?.isIntersecting) {
        console.log('prev')
        console.log(prevEntry)
        setActiveSection(sectionRefs.current[currentIndex - 1]?.id);
        return
      } 

      if (activeEntry && !activeEntry?.isIntersecting) {

        setActiveSection(sectionRefs.current[currentIndex + 1]?.id);
        return
      }
    }, options)

    sectionRefs.current.forEach(ref => {
      observer.observe(ref);
    })
  }, [activeSection, options])

  useEffect(() => {
    console.log(activeSection)
  })

  return(
    <div className="bg-white text-black">
      <div> back to home link and print button here </div>
      <div className="flex">
        <div className="max-w-[35%] h-[50dvh] overflow-auto fixed">
          <SidebarNavigation activeSection={activeSection} setActiveSection={setActiveSection} allSections={sectionRefs.current} />
        </div>
        <div className="flex flex-col w-[60%] ml-auto">
          <PrivacyStatement id="privacy-statement" ref={addToRefs} />
          <ContactingUs id="contacting-us" ref={addToRefs} />
          <section>
            <h2 
              className={`text-3xl my-10 `} 
              style={activeSection === "sectionA" ? {color: "white", backgroundColor: "black"} : {}}
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
                style={activeSection === "sectionA" ? {color: "white", backgroundColor: "black"} : {}}
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
