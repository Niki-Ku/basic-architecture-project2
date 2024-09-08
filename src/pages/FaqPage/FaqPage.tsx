import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "../../components/SearchBar/SearchBar";
import DropdownCard from "../../components/DropdownCard/DropdownCard";
import { ReactComponent as ArrowDown } from "../../assets/icons/ArrowDownFull.svg";
import { accountAndBilling, startWork, Fix, Watching, quickLinks } from '../../config/helpCenterConfig';
import { quickLinksIcons } from '../../config/dynamicIcons';
// temporary imports
import { footerLinks } from "../../config/routeConfig";
import "./FaqPage.css";

// TODO
// make map of each dropdown card instead of manual rendering   DONE
// pass icon as a prop instead of manual typing it here   DONE
// add quick links    DONE
// add pages and correct titles     DONE
// make fiexed searchbar    
// remove border in last element of Quick links
// make explore topics scroll down to section with Dropdown Cards
// make links for searchBar     

const FaqPage = () => {
  const [open, setOpen] = useState('');
  const onToggle = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(prevOpen => (prevOpen === id ? '' : id));
  };
  return(
    <div className="bg-white text-black">
      <section className="min-h-svh text-center">
        <h1 className="font-extrabold text-[40px]">How can we help?</h1>
        <div className="w-6/12 mx-auto">
          <SearchBar links={footerLinks} />
        </div>
        <div className="mx-auto w-6/12 text-black relative  text-center">
          <Link to="/" className='arrow-parent pb-10 inline-block hover:underline' >
            <span className="font-bold">Explore Topics</span>
            <ArrowDown className="arrow h-6 w-6 absolute top-6 left-0 right-0 mx-auto w-[100px]" />
          </Link>
        </div>
      </section>
      <section className="bg-white py-2 w-6/12 mx-auto flex flex-col gap-4">
        {[accountAndBilling, startWork, Fix, Watching].map((item, index) => (
          <DropdownCard 
            key={index} 
            title={item.title} 
            iconColor={item.iconColor} 
            icon={item.icon} 
            categories={item.categories} 
            open={open} 
            Toggle={onToggle} 
          />
        ))}
        <div>
          <h3 className="text-lg font-bold border-b border-transparentGray4 pb-2">Quick Links</h3>
          <ul>
            {quickLinks.map((item, index) => {
              const Icon = quickLinksIcons[item.icon] 
              return (
                <li key={index} className="flex gap-4 items-center py-3 border-b border-transparentGray4 last:border-0" >
                  <Icon className="w-4 h-4" />
                  <Link to={item.link} className="underline font-bold">{item.title}</Link>
                </li>
              )
            })}
            <Link to="/"></Link>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
