import { accountAndBillingCategory } from '../../config/helpCenterConfig'
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowDownShort } from '../../assets/icons/ArrowDownShort.svg';
import React from 'react';

interface ISubCategories {
  subCategoryTitle: string;
  subCategoryPath: string;
  subCategoryIcon: React.ReactNode;
}

interface ICategory {
  categoryIcon: React.ReactNode;
  categoryIconColor: string;
  categoryTitle: string;
  subCategories: ISubCategories[];
}

interface ICategoryCard {
  links: ICategory;
}

const CategoryCard:React.FC<ICategoryCard> = ({ links }) => {
  return (
    <div>
      <details>
        <summary className="flex">
          <div>
            <accountAndBillingCategory.categoryIcon 
              style={{stroke: `${accountAndBillingCategory.categoryIconColor}`}} 
              className="w-10 h-10"
            />
            {/* <categoryIcon /> */}
          </div>
          <div>{links.categoryTitle}</div>
          <ArrowDownShort className="w-10 h-10" />
        </summary>
        <ul>
          {links.subCategories.map(subCategory => (
            <div 
              key={subCategory.subCategoryTitle} 
              className="flex"
            >
              {/* <subCategory.subCategoryIcon className="w-5 h-5" /> */}
              <Link 
                to={subCategory.subCategoryPath}
              >
                <li>{subCategory.subCategoryTitle}</li>
              </Link>
            </div>
          ))}
        </ul>
      </details>
    </div>
  )
};

export default CategoryCard;