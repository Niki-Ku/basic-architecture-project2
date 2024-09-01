import { title } from "process";

export const accountAndBillingCategory = {
  categoryTitle: 'Paying for Netflix',
  subCategories: [
    {
      subCategoryName: 'Account-sfs',
      subCategoryPath: '/login',
    },
    {
      subCategoryName: 'account-dfings2',
      subCategoryPath: '/login',
    },
    {
      subCategoryName: 'account-aaaaaaaaaaaafsasdfettings34 ',
      subCategoryPath: '/login',
    },
  ]
};

export const anotherCategory = {
  categoryTitle: 'Account settings',
  subCategories: [
    {
      subCategoryName: 'account-settingssfs',
      subCategoryPath: '/login',
    },
    {
      subCategoryName: 'account-settdsings2',
      subCategoryPath: '/login',
    },
    {
      subCategoryName: 'account-fffsettings34 ',
      subCategoryPath: '/login',
    },
  ]
};

export const accountAndBilling = {
  title: 'Account and Billing',
  icon: 'UserIcon',
  categories: [
    anotherCategory,
    accountAndBillingCategory,
  ]
}