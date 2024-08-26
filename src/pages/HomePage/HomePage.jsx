import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryCard from "../../components/CategoryCard/CategoryCard";



// temporary import 
import { footerLinks } from "../../config/routeConfig";


const HomePage = () => {

  return(
    <div>
      <SearchBar links={footerLinks} />
      Home page
      <CategoryCard />
    </div>
  )
};

export default HomePage;
