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
// fix bug (when you click on section to scroll it into view, active section shows wrong)    DONE
// make onpen/close state of each section
// setActiveSection on click
// clean observer

const PrivacyPage = () => {
  const [ activeSection, setActiveSection ] = useState('');
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  // const options = useMemo(() => {
  //   return {
  //     threshold: 0,
  //   }
  // }, [])

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

  // const observer = new IntersectionObserver((entries) => {
    
  //   const entry = entries[0];

  //   const activeEntry = entries.find(entry => entry.target.id === activeSection);
  //   const currentEntry = sectionRefs.current.find(el => el.id === entry.target.id);
  //   const currentEntryIndex = sectionRefs.current.indexOf(currentEntry as HTMLDivElement);
  //   const activeSectionElement = sectionRefs.current.find(el => el.id === activeSection);
  //   const activeSectionIndex = sectionRefs.current.indexOf(activeSectionElement as HTMLDivElement);
  //   const prevEntry = entries[currentEntryIndex - 1];
  //   const prevId = sectionRefs.current[currentEntryIndex - 1]?.id;
    
  //   if (currentEntryIndex - activeSectionIndex <= 1 && currentEntryIndex - activeSectionIndex >= -1 ) {
  //     // console.log(currentEntryIndex, activeSectionIndex, activeSection, entry.target.id)
  //     console.log(activeSectionIndex, activeSection)
  //     if (entry.target.id === activeSection && !entry.isIntersecting) {
  //       // console.log(currentEntryIndex - activeSectionIndex, currentEntryIndex, activeSectionIndex)
  //       setActiveSection(sectionRefs.current[currentEntryIndex + 1]?.id);
  //       return
  //     }
  //     if (sectionRefs.current[activeSectionIndex - 1]?.id === entry.target.id && entry.isIntersecting) {
  //       setActiveSection(entry.target.id)
  //       return
  //     }
  //     return
  //   }
  // }, options)

  const observer = useMemo(() => {
    return new IntersectionObserver((entries) => {
      let mostVisible = null;
      let maxIntersectionRatio = 0;
  
      entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
              maxIntersectionRatio = entry.intersectionRatio;
              mostVisible = entry.target.id;
          }
      });
  
      if (mostVisible) {
          setActiveSection(mostVisible);
      }
    }, {
      threshold: [0.1, 0.9] 
    });
  }, [])


useEffect(() => {
    if (activeSection === '') {
        setActiveSection(sectionRefs.current[0].id);
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

  // useEffect(() => {
  //   if (activeSection === '') {
  //     setActiveSection(sectionRefs.current[0].id);
  //     return
  //   } 

  //   sectionRefs.current.forEach(ref => {
  //     observer.observe(ref);
  //   })
  // }, [activeSection, options])

  useEffect(() => {
    // console.log(activeSection)
  })


  return(
    <div className="bg-white text-black">
      <div> back to home link and print button here </div>
      {/* <div className="flex"> */}
      <div className="">
        {/* <div className="h-[50dvh] sticky overflow-auto fixed"> */}
        <div className="sideBar sticky top-[100px] max-w-[275px] w-[25%] overflow-y-auto float-left border-t-4 border-red">
          <SidebarNavigation activeSection={activeSection} setActiveSection={setActiveSection} allSections={sectionRefs.current} />
        </div>
        {/* <div className="flex flex-col w-[60%] ml-auto"> */}
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
