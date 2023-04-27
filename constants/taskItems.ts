export interface Task {
  name: string;
  id: string;
  defaultTag: string;
  tags: string[];
  assignees: string[];
  files: number;
  comments: number;
  attachments: number;
}

export interface Tasks extends Array<Task> {}

export const backlogTasks: Tasks = [
  {
    name: 'Model Answer',
    id: '#UI007',
    defaultTag: 'Backlog',
    tags: ['Design'],
    assignees: [
      '/images/avatar-1.jpg',
      '/images/avatar-2.jpg',
      '/images/avatar-3.jpg',
      '/images/avatar-4.jpg',
      '/images/avatar-5.jpg',
    ],
    files: 4,
    comments: 4,
    attachments: 4,
  },
  {
    name: 'Create calendar, chat and email app pages',
    id: '#UI003',
    defaultTag: 'Backlog',
    tags: ['Development'],
    assignees: [
      '/images/avatar-1.jpg',
      '/images/avatar-2.jpg',
      '/images/avatar-3.jpg',
      '/images/avatar-4.jpg',
      '/images/avatar-5.jpg',
    ],
    files: 2,
    comments: 2,
    attachments: 1,
  },
  {
    name: 'Product Design, Figma, Sketch (Software), Prototype',
    id: '#BC05',
    defaultTag: 'Backlog',
    tags: ['Project'],
    assignees: ['/images/avatar-1.jpg'],
    files: 2,
    comments: 4,
    attachments: 4,
  },
  {
    name: 'Change email option process',
    id: '#FTC07',
    defaultTag: 'Backlog',
    tags: [],
    assignees: ['/images/avatar-1.jpg', '/images/avatar-2.jpg'],
    files: 2,
    comments: 2,
    attachments: 4,
  },
  {
    name: 'Post launch reminder/ Post list',
    id: '#FTC09',
    defaultTag: 'Backlog',
    tags: [],
    assignees: [],
    files: 0,
    comments: 0,
    attachments: 0,
  },
];

export const todoTasks: Tasks = [
  {
    name: 'Model Answer',
    id: '#UI002',
    defaultTag: 'To Do',
    tags: ['Design'],
    assignees: [
      '/images/avatar-1.jpg',
      '/images/avatar-2.jpg',
      '/images/avatar-3.jpg',
      '/images/avatar-4.jpg',
      '/images/avatar-5.jpg',
    ],
    files: 4,
    comments: 4,
    attachments: 4,
  },
  {
    name: 'Add authentication pages',
    id: '#FTC55',
    defaultTag: 'To Do',
    tags: [],
    assignees: [],
    files: 0,
    comments: 0,
    attachments: 0,
  },
  {
    name: 'Profile Page Satructure',
    id: '#FTC09',
    defaultTag: 'To Do',
    tags: [],
    assignees: [],
    files: 0,
    comments: 0,
    attachments: 0,
  },
  {
    name: 'Create calendar, chat and email app pages',
    id: '#FTC37',
    defaultTag: 'To Do',
    tags: [],
    assignees: ['/images/avatar-1.jpg', '/images/avatar-2.jpg'],
    files: 1,
    comments: 1,
    attachments: 2,
  },
];

export const inProgressTasks: Tasks = [
  {
    name: 'Model Answer',
    id: '#UX022',
    defaultTag: 'In Progress',
    tags: ['Design'],
    assignees: [
      '/images/avatar-1.jpg',
      '/images/avatar-2.jpg',
      '/images/avatar-3.jpg',
      '/images/avatar-4.jpg',
      '/images/avatar-5.jpg',
    ],
    files: 4,
    comments: 4,
    attachments: 4,
  },
  {
    name: 'Create calendar, chat and email app pages',
    id: '#FXC55',
    defaultTag: 'In Progress',
    tags: [],
    assignees: [
      '/images/avatar-1.jpg',
      '/images/avatar-2.jpg',
      '/images/avatar-3.jpg',
      '/images/avatar-4.jpg',
      '/images/avatar-5.jpg',
    ],
    files: 1,
    comments: 1,
    attachments: 2,
  },
];

export const doneTasks: Tasks = [
  {
    name: 'Model Answer',
    id: '#UI007',
    defaultTag: 'Done',
    tags: [],
    assignees: [
      '/images/avatar-1.jpg',
      '/images/avatar-2.jpg',
      '/images/avatar-3.jpg',
      '/images/avatar-4.jpg',
      '/images/avatar-5.jpg',
    ],
    files: 0,
    comments: 0,
    attachments: 0,
  },
  {
    name: 'Create calendar, chat and email app pages',
    id: '#UI003',
    defaultTag: 'Done',
    tags: [],
    assignees: [
      '/images/avatar-1.jpg',
      '/images/avatar-2.jpg',
      '/images/avatar-3.jpg',
      '/images/avatar-4.jpg',
      '/images/avatar-5.jpg',
    ],
    files: 2,
    comments: 2,
    attachments: 0,
  },
  {
    name: 'Product Design, Figma, Sketch (Software), Prototype',
    id: '#BC05',
    defaultTag: 'Done',
    tags: [],
    assignees: ['/images/avatar-1.jpg'],
    files: 0,
    comments: 0,
    attachments: 0,
  },
  {
    name: 'Model Answer',
    id: '#FTC07',
    defaultTag: 'Done',
    tags: [],
    assignees: ['/images/avatar-1.jpg', '/images/avatar-2.jpg'],
    files: 0,
    comments: 0,
    attachments: 0,
  },
  {
    name: 'Create calendar, chat and email app pages',
    id: '#FTC09',
    defaultTag: 'Done',
    tags: [],
    assignees: [],
    files: 0,
    comments: 0,
    attachments: 0,
  },
];
