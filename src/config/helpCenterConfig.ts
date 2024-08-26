import { ReactComponent as UserIcon } from '../assets/icons/UserIcon.svg';
import { ReactComponent as ArticleIcon } from '../assets/icons/ArticleIcon.svg';


export const accountAndBillingCategory = {
  categoryIcon: UserIcon,
  categoryIconColor: '#b80f2a',
  categoryTitle: 'Account and Billing',
  subCategories: [
    {
      subCategoryTitle: 'account-settings',
      subCategoryPath: '/login',
      subCategoryIcon: ArticleIcon,
    },
  ]
};
