import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

import { accountAndBillingCategory, anotherCategory } from '../../config/helpCenterConfig'


// temporary import 
import { footerLinks } from "../../config/routeConfig";


const HomePage = () => {

  return(
    <div>
      <div className="w-6/12 mx-auto">
        <SearchBar links={footerLinks} />
      </div>
      Home page
      <CategoryCard links={accountAndBillingCategory} />
      <CategoryCard links={anotherCategory} />
    </div>
  )
};

export default HomePage;
