import SearchBar from "../../components/SearchBar/SearchBar";
import Dropdown from "../../components/Dropdown/Dropdown";
import DropdownCard from "../../components/DropdownCard/DropdownCard";

import { accountAndBilling } from '../../config/helpCenterConfig';


// temporary import 
import { footerLinks } from "../../config/routeConfig";

const FaqPage = () => {

  return(
    <div className="bg-white">
      <div className="w-6/12 mx-auto">
        <SearchBar links={footerLinks} />
      </div>
      <div className="bg-white py-2">
        <DropdownCard title={accountAndBilling.title} categories={accountAndBilling.categories} />
        {/* <Dropdown links={accountAndBillingCategory} /> */}
        {/* <Dropdown links={anotherCategory} /> */}
      </div>
    </div>
  );
};

export default FaqPage;
