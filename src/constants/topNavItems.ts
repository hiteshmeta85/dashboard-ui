export interface TopNavItem {
  name: string;
  path: string;
}

export interface TopNavItems extends Array<TopNavItem> {}

export const topNavItems: TopNavItems = [
  {
    name: 'Dashboard',
    path: '/',
  },
  {
    name: 'My Tasks',
    path: '/my-tasks',
  },
  {
    name: 'Reporting',
    path: '/reporting',
  },
  {
    name: 'Portfolios',
    path: '/portfolios',
  },
  {
    name: 'Goals',
    path: '/goals',
  },
];
