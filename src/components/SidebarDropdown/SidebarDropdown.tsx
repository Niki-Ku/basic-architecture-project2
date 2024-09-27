import { Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { ReactComponent as ArrowDownShort } from '../../assets/icons/ArrowDownShort.svg';

interface ISubLink {
  title: string;
  id: string;
}

interface ISidebarDropdown {
  title: string;
  subLinks?: ISubLink[] | null;
  id: string;
  openSection?: string;
  currentSection?: string;
  allSections: HTMLDivElement[];
  setActiveSection: Function ;
}

const SidebarDropdown:React.FC<ISidebarDropdown> = ({ title, subLinks, id, currentSection, allSections, setActiveSection, openSection }) => {
  const handleDetailsClick = (e:React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(id);
    allSections.find(section => section.id === id)?.scrollIntoView({behavior: 'smooth'});
  }

  const handleDetailsChildClick = (e:React.MouseEvent, id:string) => {
    e.stopPropagation();
    allSections.find(section => section.id === id)?.scrollIntoView({behavior: 'smooth'})
  }

  const [arrowStyles, setArrowStyles] = useState({})

  useEffect(() => {
    if (id === openSection && id === currentSection) {
      setArrowStyles({transform: 'rotate(0deg)', transformOrigin: 'center', fill: 'white'})
    } else if (id === openSection) {
      setArrowStyles({transform: 'rotate(0deg)', transformOrigin: 'center'})
    } else {
      setArrowStyles({})
    }
  }, [openSection, currentSection, id])
  
  return (
    <div className="bg-white text-black w-full">
      <details 
        open={id === openSection}
        onClick={(e) => handleDetailsClick(e)}
      >
          <summary 
            className={`text-base p-2 cursor-pointer list-none`}
            style={currentSection === id ? {color: "white", backgroundColor: "black"} : {}}
          >
            <Link to="#collectCategories" className="flex justify-between">
            <p>{title}</p>
            {subLinks && (
              <ArrowDownShort 
                className={`w-6 h-6 mr-2 fill-black -rotate-90 duration-100 shrink-0`} 
                style={arrowStyles}
              />
            )}
          </Link>
          </summary>
        {subLinks && (
          <ul className="">
            {subLinks.map(link => (
              <div key={link.title} className="mx-5 py-5">
                <li 
                  onClick={(e) => handleDetailsChildClick(e, link.id)}
                  className={`p-2 inline-block w-full text-wrap cursor-pointer`}
                  style={currentSection === link.id ? {color: "white", backgroundColor: "black"} : {}}
                >
                  {link.title}
                </li>
              </div>
            ))}
          </ul>
        )}
      </details>
    </div>
  )
};

export default SidebarDropdown;
