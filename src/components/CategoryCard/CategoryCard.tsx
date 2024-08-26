import { accountAndBillingCategory } from '../../config/helpCenterConfig'
import { Link } from 'react-router-dom';

const CategoryCard = ({  }) => {
  return (
    <div>
      {/* <details>
        <summary>asdfafs</summary>
        <ul>
          <li>sdaf</li>
          <li>sdaf</li>
          <li>sdaf</li>
          <li>sdaf</li>
        </ul>
      </details> */}
      <details>
        <summary>
          <div>
            <accountAndBillingCategory.categoryIcon 
            style={{stroke: `${accountAndBillingCategory.categoryIconColor}`, fill: `${accountAndBillingCategory.categoryIconColor}`,
            color: `${accountAndBillingCategory.categoryIconColor}`,
            WebkitTextStrokeColor: `${accountAndBillingCategory.categoryIconColor}` }} 
            className={`stroke-zinc-500 w-10 h-10`} />
          </div>
          <div>{accountAndBillingCategory.categoryTitle}</div>
        </summary>
        <ul>
          {accountAndBillingCategory.subCategories.map(subCategory => (
            <Link key={subCategory.subCategoryTitle} to={subCategory.subCategoryPath}>
              <subCategory.subCategoryIcon className="w-5 h-5" />
              <li>{subCategory.subCategoryTitle}</li>
            </Link>
          ))}
        </ul>
      </details>
    </div>
  )
};

export default CategoryCard;