import { Link } from 'react-router-dom';
import React from 'react';
import { ReactComponent as ArrowDownShort } from '../../assets/icons/ArrowDownShort.svg';

// interface ISubCategories {
//   subCategoryName: string;
//   subCategoryPath: string;
// }

// interface ICategory {
//   categoryTitle: string;
//   subCategories: ISubCategories[];
// }

// interface ICategoryCard {
//   links: ICategory;
//   Toggle: (id:string, e: React.MouseEvent)=>void;
//   open: string;
//   id: string;
// }
interface ISubLink {
  title: string;
  link: string;
}

interface ISidebarDropdown {
  title: string;
  subLinks?: ISubLink[];
  id: string;
  currentSection?: string;
}

// make a dropdown component  DONE
// it should receives an array or object of headers, state open/closed, and selected/not selected state   DONE
// make logic outside of this component 
// add arrow depending on if component has childs     DONE
// make it act as link    DONE
// make interfaces      DONE
// change id and all related parameters so received parrameters would change accordingly 
// add scroll to the section on click


const SidebarDropdown:React.FC<ISidebarDropdown> = ({ title, subLinks, id, currentSection }) => {
  return (
    <div className="bg-white text-black w-full">
      <details 
        // id={`id-${}`} 
        open={id === 'second-el'}
        onClick={(e) => {e.preventDefault()}}
      >
        <summary 
          className={`
          flex text-base p-2 cursor-pointer justify-between 
          ${title === currentSection && 'bg-black text-white'}
          `}
        >
          <p>{title}</p>
          {subLinks && (
            <ArrowDownShort 
              className={`
              w-6 h-6 mr-2 -rotate-90 duration-100 
              ${id === 'second-el' && 'origin-center rotate-0'} 
              `} 
            />
          )}
        </summary>
        {subLinks && (
          <ul className="">
            {subLinks.map(link => (
              <div key={link.title} className="mx-5 py-5">
                <Link 
                  to={link.link} 
                  className={`
                  p-2 inline-block w-full
                  ${link.title === currentSection && 'bg-black text-white'}
                  `}
                >
                  <li className="text-wrap">{link.title}</li>
                </Link>
              </div>
            ))}
          </ul>
        )}
      </details>
    </div>
  )
};

export default SidebarDropdown;
