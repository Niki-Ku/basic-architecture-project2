import { Link } from 'react-router-dom';
import React from 'react';
import { ReactComponent as ArticleIcon } from '../../assets/icons/ArticleIcon.svg';
import { ReactComponent as ArrowDownShort } from '../../assets/icons/ArrowDownShort.svg';

// TODO: remove subcategoryIcon and subcategoryIconColor in interface and in config file    DONE
// style        DONE
// rename component to something like details dropdown      DONE
// remove user icons because it is not part of component   DONE
// maybe should remove dynamic icons at all       DONE
// make short arrow flip upside down
// deal with overflowing text (if text is to much it should shrink, but it doesn't)
// add transparent-text color to color pallet 
// make it so the only one dropdown could be opend, and depenting on state you can change the arrow to look up or down

interface ISubCategories {
  subCategoryName: string;
  subCategoryPath: string;
}

interface ICategory {
  categoryTitle: string;
  subCategories: ISubCategories[];
}

interface ICategoryCard {
  links: ICategory;
}

const CategoryCard:React.FC<ICategoryCard> = ({ links }) => {
  return (
    <div className="bg-white text-black w-full">
      <details>
        <summary className="flex text-base py-3 cursor-pointer justify-between">
          <strong className="font-bold">{links.categoryTitle}</strong>
          <ArrowDownShort className="w-6 h-6" />
        </summary>
        <ul className="pt-4 pb-1">
          {links.subCategories.map(subCategory => (
            <div 
              key={subCategory.subCategoryName} 
              className="flex flex-wrap mb-4 w-max"
            >
              <ArticleIcon className="w-[16px] h-[16px] fill-black mr-2 mt-1" />
              <Link 
                to={subCategory.subCategoryPath}
                className="underline hover:text-[#000000b3]"
              >
                <li className="text-wrap">{subCategory.subCategoryName}</li>
              </Link>
            </div>
          ))}
        </ul>
      </details>
    </div>
  )
};

export default CategoryCard;
