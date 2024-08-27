import { Link } from 'react-router-dom';
import React from 'react';
import { ReactComponent as ArticleIcon } from '../../assets/icons/ArticleIcon.svg';
import { ReactComponent as ArrowDownShort } from '../../assets/icons/ArrowDownShort.svg';
import { icons } from '../../config/dynamicIcons';

// TODO: remove subcategoryIcon and subcategoryIconColor in interface and in config file
// style

interface ISubCategories {
  subCategoryTitle: string;
  subCategoryPath: string;
  subCategoryIcon: keyof typeof icons;
}

interface ICategory {
  categoryIcon: keyof typeof icons;
  categoryIconColor: string;
  categoryTitle: string;
  subCategories: ISubCategories[];
}

interface ICategoryCard {
  links: ICategory;
}

const CategoryCard:React.FC<ICategoryCard> = ({ links }) => {
  const CategoryIcon = icons[links.categoryIcon];

  return (
    <div>
      <details>
        <summary className="flex">
          <div>
            <CategoryIcon
              className="w-10 h-10"
              style={{stroke: `${links.categoryIconColor}`}} 
            />
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
              <ArticleIcon className="w-5 h-5 fill-white" />
              <Link to={subCategory.subCategoryPath}>
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
