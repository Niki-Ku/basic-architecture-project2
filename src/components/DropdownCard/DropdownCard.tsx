import Dropdown from '../Dropdown/Dropdown'
import { icons } from '../../config/dynamicIcons';
import { accountAndBilling } from '../../config/helpCenterConfig';

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
}

const DropdownCard:React.FC<IDropdownCard> = ({ title, icon, categories }) => {
  return( 
    <div className="rounded-lg border border-[gray] text-black">
      <div>
        <div>{icon}</div> {/* change this line, its not correct rendering of icon */}
        <div>
          <strong>{title}</strong>
        </div>
      </div>
      {categories.map(category => (
        <Dropdown links={category} />
      ))}
    </div>
  )
};

export default DropdownCard;