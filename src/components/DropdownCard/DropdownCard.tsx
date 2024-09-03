import Dropdown from '../Dropdown/Dropdown'
import { icons } from '../../config/dynamicIcons';

// pass props
// make interfaces 
// make it so the icons could be passed only that is already in icons object
// make logic for rendering dropdowns       DONE
// style 

// ask Yura about repeating iterfaces

interface dynamicIcons {
  dynamicIcon: string;
}

interface ISubCategories {
  subCategoryName: string;
  subCategoryPath: string;
}

interface ICategory {
  categoryTitle: string;
  subCategories: ISubCategories[];
}

interface IDropdownCard {
  title: string,
  icon?: keyof dynamicIcons;   // temporary optional, change later
  categories: ICategory[];
  Toggle: (id:string)=>void;
  open: string;
}

const DropdownCard:React.FC<IDropdownCard> = ({ title, icon, categories, Toggle, open }) => {
  console.log(open)
  return( 
    <div className="rounded-lg border border-[gray] text-black overflow-hidden">
      <div>
        <div>{icon}</div> {/* change this line, its not correct rendering of icon */}
        <div>
          <strong>{title}</strong>
        </div>
      </div>
      {categories.map(category => (
        <Dropdown key={category.categoryTitle} links={category} open={open} Toggle={Toggle} />
      ))}
    </div>
  )
};

export default DropdownCard;