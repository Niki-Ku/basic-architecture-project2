import PrivacyStatement from "./PrivacyPageComponents/PrivacyStatement";
import ContactingUs from "./PrivacyPageComponents/ContactingUs";
import SidebarNavigation from "../../components/SidebarNavigation/SidebarNavigation";
import CollectPICategories from "./PrivacyPageComponents/CollectPICategories";
import { useEffect, useRef, useState } from "react";


// TODO:
// remove links from here and refactor them
// make sidebar component
// provide everything with corresponding link with title id content ...
// try to change selected section in sidebar with a help of intersection observer
// add more sections 



const PrivacyPage = () => {
  const [ activeSection, setActiveSection ] = useState('');

  const options = {
    // rootMargin: '0px 0px -100% 0px',
    threshold: 0,
  }
  // const options = {
  //   rootMargin: '',
  //   threshold: 1,
  // }

  const sectionRefs = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };
  // const arr = useRef([privacyStatementRef?.current, contactingUsRef?.current])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      // console.log(entry.isIntersecting, entry.target)
      if (entry.isIntersecting) {
        console.log(entry.target.id, entry.isIntersecting)
        setActiveSection(entry.target.id)
      } 
      else {
        console.log('previous')
      }
    }, options)

    sectionRefs.current.forEach(ref => {
      observer.observe(ref);
    })
    // if (!contactingUsRef.current) return;
    // arr.current.forEach(el => {
    //   console.log(el)
    //   // observer.observe(el!);
    // })
    console.log(sectionRefs)
  }, [])

  return(
    <div className="bg-white text-black">
      <div> back to home link and print button here </div>
      <div className="flex">
        <div className="min-w-[25%] h-[50dvh] overflow-auto">
          <SidebarNavigation />
        </div>
        <div className="flex flex-col">
          <PrivacyStatement />
          <ContactingUs ref={addToRefs} />
          <section>
            <h2 id="sectionA" ref={addToRefs}> Section A: Our Collection, Use, and Disclosure of Personal Information</h2>
            <CollectPICategories ref={addToRefs} />
          </section>
        </div>
      </div>
        {/* remove in the end */}
        <div className="min-h-[200dvh]"></div>
    </div>
  )
};

export default PrivacyPage;
