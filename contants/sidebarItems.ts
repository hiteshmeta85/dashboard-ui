export interface SidebarItem {
  name: string;
  icon: string;
  notification: number;
}

export interface SidebarSection {
  section: string;
  items: SidebarItem[];
}

export interface SidebarItems extends Array<SidebarSection>{}

export const sidebarItems: SidebarItems = [
  {
    section: 'DASHBOARDS',
    items: [
      {
        name: 'Inbox',
        icon: '/images/inbox.svg',
        notification: 4,
      },
      {
        name: 'Drive Files',
        icon: '/images/drive_folder_upload.svg',
        notification: 435,
      },
      {
        name: 'Boards',
        icon: '/images/dashboard_customize.svg',
        notification: 5,
      },
      {
        name: 'Updates',
        icon: '/images/access_time.svg',
        notification: 0,
      },
      {
        name: 'Analytics',
        icon: '/images/data_usage.svg',
        notification: 2,
      },
      {
        name: 'CRM Dashboard',
        icon: '/images/space_dashboard.svg',
        notification: 2,
      },
      {
        name: 'Ecommerce',
        icon: '/images/sell.svg',
        notification: 0,
      },
      {
        name: 'Cryptocurrency',
        icon: '/images/payment.svg',
        notification: 0,
      },
      {
        name: 'Projects',
        icon: '/images/lock_clock.svg',
        notification: 0,
      },
      {
        name: 'NFT Marketplace',
        icon: '/images/image_search.svg',
        notification: 0,
      },
      {
        name: 'Settings',
        icon: '/images/tune.svg',
        notification: 2,
      }
    ]
  },
  {
    section: 'PROJECTS',
    items: [
      {
        name: 'Additional Calendar',
        icon: '/images/tag.svg',
        notification: 6,
      },
      {
        name: 'Branch Logo Design',
        icon: '/images/tag.svg',
        notification: 11,
      },
      {
        name: 'User Research',
        icon: '/images/tag.svg',
        notification: 0,
      },
      {
        name: 'Marketing Sales',
        icon: '/images/tag.svg',
        notification: 23,
      },
      {
        name: 'New Project Template',
        icon: '/images/tag.svg',
        notification: 2,
      },
      {
        name: 'Add New Project',
        icon: '/images/add_circle.svg',
        notification: 0,
      },
    ]
  }
]
