import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import { ReactComponent as ArrowDownShort } from '../../assets/icons/ArrowDownShort.svg';

interface ISubLink {
  title: string;
  id: string;
}

interface ISidebarDropdown {
  title: string;
  subLinks?: ISubLink[] | null;
  id: string;
  activeTopic?: string;
  allSections: HTMLDivElement[];
  setActiveTopic: Function ;
}

// make a dropdown component  DONE
// it should receives an array or object of headers, state open/closed, and selected/not selected state   DONE
// make logic outside of this component 
// add arrow depending on if component has childs     DONE
// make it act as link    DONE
// make interfaces      DONE
// change id and all related parameters so received parrameters would change accordingly 
// add scroll to the section on click
// remove some useless stuff


const SidebarDropdown:React.FC<ISidebarDropdown> = ({ title, subLinks, id, activeTopic, allSections, setActiveTopic }) => {
  
  const handleDetailsClick = (e:React.MouseEvent) => {
    e.preventDefault();
    setActiveTopic(id);
    allSections.find(section => section.id === id)?.scrollIntoView({behavior: 'smooth'});
  }

  const handleDetailsChildClick = (e:React.MouseEvent, id:string) => {
    e.stopPropagation();
    allSections.find(section => section.id === id)?.scrollIntoView({behavior: 'smooth'})
  }


  return (
    <div className="bg-white text-black w-full">
      <details 
        // open={id === 'second-el'}
        open
        onClick={(e) => handleDetailsClick(e)}
      >
          <summary 
            className={`
              flex text-base p-2 cursor-pointer justify-between 
              ${id === activeTopic && 'bg-black text-white'}
              `}
            style={activeTopic === "id" ? {color: "white", backgroundColor: "black"} : {}}
          >
            <Link to="#collectCategories">
            <p>{title}</p>
            {subLinks && (
              <ArrowDownShort 
                className={`
                w-6 h-6 mr-2 -rotate-90 duration-100 
                ${id === 'second-el' && 'origin-center rotate-0'} 
                `} 
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
                  className={`
                    p-2 inline-block w-full text-wrap cursor-pointer
                    ${link.id === activeTopic && 'bg-black text-white'}
                    `}
                >{link.title}</li>
              </div>
            ))}
          </ul>
        )}
      </details>
    </div>
  )
};

export default SidebarDropdown;


// TODO
// restyle or correct styling