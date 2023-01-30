export interface TaskBoardItem {
  name: string;
  section: string;
}

export interface TaskBoardItems extends Array<TaskBoardItem> {}

export const taskBoardItems: TaskBoardItems = [
  {
    name: 'Timeline',
    section: '#'
  },
  {
    name: 'Calendar',
    section: '#calendar'
  },
  {
    name: 'Dashboard',
    section: '#dashboard'
  },
  {
    name: 'Progress',
    section: '#progress'
  },
  {
    name: 'Forms',
    section: '#forms'
  },
  {
    name: 'More',
    section: '#more'
  }
]
