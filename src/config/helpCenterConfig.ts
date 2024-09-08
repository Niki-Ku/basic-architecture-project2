import { icons, quickLinksIcons } from './dynamicIcons';

type IconType = keyof typeof icons;
type QuickLinksIconsType = keyof typeof quickLinksIcons;

export const accountSettingsDropdown = {
  categoryTitle: 'Account Settings',
  subCategories: [
    {
      subCategoryName: 'How to change your plan',
      subCategoryPath: '/change-plan',
    },
    {
      subCategoryName: 'How to cancel Netflix',
      subCategoryPath: '/cancel-netflix',
    },
    {
      subCategoryName: 'How to change or reset your password',
      subCategoryPath: '/reset-password',
    },
  ],
};

export const payingForNetflixDropdown = {
  categoryTitle: 'Paying for Netflix',
  subCategories: [
    {
      subCategoryName: 'Billing and Payments',
      subCategoryPath: '/billing-payments',
    },
    {
      subCategoryName: 'Netflix Gift Cards',
      subCategoryPath: '/gift-cards',
    },
    {
      subCategoryName: 'How to remove payment methods from your account',
      subCategoryPath: '/remove-payment-methods',
    },
  ],
};

export const accountIssuesDropdown = {
  categoryTitle: 'Account Issues',
  subCategories: [
    {
      subCategoryName: "Can't sign in to Netflix",
      subCategoryPath: '/cant-sign-in',
    },
    {
      subCategoryName: 'Netflix says to sign up when trying to sign in',
      subCategoryPath: '/sign-up-error',
    },
    {
      subCategoryName: 'Netflix says account is already in use',
      subCategoryPath: '/account-in-use',
    },
  ],
};

export const problemsWatchingDropdown = {
  categoryTitle: 'Problems Watching',
  subCategories: [
    {
      subCategoryName: 'Fix a problem on your Android phone or tablet',
      subCategoryPath: '/fix-android-problem',
    },
    {
      subCategoryName: 'Fix a problem on your TV or streaming media player',
      subCategoryPath: '/fix-tv-problem',
    },
    {
      subCategoryName: "Netflix says, 'This app is not compatible with your device.'",
      subCategoryPath: '/app-not-compatible',
    },
    {
      subCategoryName: "Browser isn't supported",
      subCategoryPath: '/browser-not-supported',
    },
    {
      subCategoryName: 'Black screen with sound',
      subCategoryPath: '/black-screen-with-sound',
    },
  ],
};

export const errorCodesDropdown = {
  categoryTitle: 'Error Codes',
  subCategories: [
    {
      subCategoryName: "Netflix isn't working",
      subCategoryPath: '/netflix-not-working',
    },
    {
      subCategoryName: 'Netflix Error NW-2-5',
      subCategoryPath: '/error-nw-2-5',
    },
    {
      subCategoryName: 'Netflix Error ui-800-3',
      subCategoryPath: '/error-ui-800-3',
    },
  ],
};

export const profilesDropdown = {
  categoryTitle: 'Profiles',
  subCategories: [
    {
      subCategoryName: 'How to create, change, or delete profiles',
      subCategoryPath: '/manage-profiles',
    },
    {
      subCategoryName: 'How to change the language on Netflix',
      subCategoryPath: '/change-language',
    },
    {
      subCategoryName: 'Profile transfers',
      subCategoryPath: '/profile-transfers',
    },
  ],
};

export const parentalControlsDropdown = {
  categoryTitle: 'Parental Controls',
  subCategories: [
    {
      subCategoryName: 'Parental controls on Netflix',
      subCategoryPath: '/parental-controls',
    },
    {
      subCategoryName: 'How to add or remove a profile PIN',
      subCategoryPath: '/add-remove-pin',
    },
    {
      subCategoryName: 'How to set profile maturity ratings or block titles',
      subCategoryPath: '/set-maturity-ratings',
    },
    {
      subCategoryName: 'How to create a profile for kids',
      subCategoryPath: '/create-kids-profile',
    },
  ],
};

export const tvShowsAndMoviesDropdown = {
  categoryTitle: 'TV Shows and Movies',
  subCategories: [
    {
      subCategoryName: 'How to download titles to watch offline',
      subCategoryPath: '/download-titles',
    },
    {
      subCategoryName: 'How to search and browse Netflix',
      subCategoryPath: '/search-browse',
    },
    {
      subCategoryName: 'How to hide titles from viewing history',
      subCategoryPath: '/hide-titles',
    },
    {
      subCategoryName: "How to remove titles from the 'Continue Watching' row",
      subCategoryPath: '/remove-from-continue-watching',
    },
  ],
};

export const joiningNetflixDropdown = {
  categoryTitle: 'Joining Netflix',
  subCategories: [
    {
      subCategoryName: 'What is Netflix?',
      subCategoryPath: '/what-is-netflix',
    },
    {
      subCategoryName: 'How to pay for Netflix',
      subCategoryPath: '/how-to-pay',
    },
    {
      subCategoryName: 'Getting started with Netflix',
      subCategoryPath: '/getting-started',
    },
    {
      subCategoryName: 'Plans and Pricing',
      subCategoryPath: '/plans-pricing',
    },
  ],
};

export const deviceSetupDropdown = {
  categoryTitle: 'Device Setup',
  subCategories: [
    {
      subCategoryName: 'Netflix Supported Browsers and System Requirements',
      subCategoryPath: '/supported-browsers',
    },
    {
      subCategoryName: 'How to Download the Netflix App',
      subCategoryPath: '/download-app',
    },
    {
      subCategoryName: 'How to Use Netflix on Your Android Phone or Tablet',
      subCategoryPath: '/use-android-app',
    },
  ],
};

export const accountAndBilling = {
  title: 'Account and Billing',
  icon: "UserIcon" as IconType,
  iconColor: '#b80f2a',
  categories: [
    accountSettingsDropdown,
    payingForNetflixDropdown,
  ]
};

export const startWork = {
  title: 'Getting Started',
  icon: "RocketIcon" as IconType,
  iconColor: '#9b00b1',
  categories: [
    joiningNetflixDropdown,
    deviceSetupDropdown,
  ]
};

export const Fix = {
  title: 'Fix a Problem',
  icon: "WrenchIcon" as IconType,
  iconColor: '#bc0850',
  categories: [
    accountIssuesDropdown,
    problemsWatchingDropdown,
    errorCodesDropdown,
  ]
};

export const Watching = {
  title: 'Watching and Playing',
  icon: "DesktopAndPhoneIcon" as IconType,
  iconColor: '#9b00b1',
  categories: [
    profilesDropdown,
    tvShowsAndMoviesDropdown,
    parentalControlsDropdown,
  ]
};

export const quickLinks = [
  {
    title: 'Reset password',
    icon: 'LockIcon' as QuickLinksIconsType,
    link: '/'
  },
  {
    title: 'Update email',
    icon: 'LetterIcon' as QuickLinksIconsType,
    link: '/'
  },
  {
    title: 'Get help signing in',
    icon: 'QuestionSircleIcon' as QuickLinksIconsType,
    link: '/'
  },
  {
    title: 'Update payment method',
    icon: 'CreditCardIcon' as QuickLinksIconsType,
    link: '/'
  },
  {
    title: 'Request TV shows or movies',
    icon: 'LoudSpeakerIcon' as QuickLinksIconsType,
    link: '/'
  }
]