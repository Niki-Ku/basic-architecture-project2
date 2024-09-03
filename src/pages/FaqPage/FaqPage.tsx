import { useState } from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";
import DropdownCard from "../../components/DropdownCard/DropdownCard";

import { accountAndBilling, startWork } from '../../config/helpCenterConfig';


// temporary import 
import { footerLinks } from "../../config/routeConfig";

const FaqPage = () => {
  const [open, setOpen] = useState('');
  const onToggle = (id:string) => {
    setOpen(id)
  }
  return(
    <div className="bg-white">
      <div className="w-6/12 mx-auto">
        <SearchBar links={footerLinks} />
      </div>
      <div className="bg-white py-2 w-6/12 mx-auto">
        <DropdownCard title={accountAndBilling.title} categories={accountAndBilling.categories} open={open} Toggle={onToggle} />
      </div>
      <div className="bg-white py-2 w-6/12 mx-auto">
        <DropdownCard title={startWork.title} categories={startWork.categories} open={open} Toggle={onToggle} />
      </div>
    </div>
  );
};

export default FaqPage;
