import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

import { accountAndBillingCategory, anotherCategory } from '../../config/helpCenterConfig'


// temporary import 
import { footerLinks } from "../../config/routeConfig";


const HomePage = () => {

  return(
    <div>
      <SearchBar links={footerLinks} />
      Home page
      <CategoryCard links={accountAndBillingCategory} />
      <CategoryCard links={anotherCategory} />
    </div>
  )
};

export default HomePage;
