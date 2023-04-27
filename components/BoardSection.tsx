import React from 'react';
import ProgressLayout from './ProgressLayout';
import {
  backlogTasks,
  doneTasks,
  inProgressTasks,
  todoTasks,
} from '../constants/taskItems';

const BoardSection = () => {
  return (
    <div className="grid grid-cols-1 gap-[24px] px-[16px] pb-[28px] md:grid-cols-2 md:px-[36px] xl:grid-cols-4">
      <ProgressLayout
        status={'Backlog Tasks'}
        taskTextColor={'text-[#CA8A04]'}
        taskBackgroundColor={'bg-[#CA8A04]'}
        tasks={backlogTasks}
      />
      <ProgressLayout
        status={'To Do Tasks'}
        taskTextColor={'text-[#DB2777]'}
        taskBackgroundColor={'bg-[#DB2777]'}
        tasks={todoTasks}
      />
      <ProgressLayout
        status={'In Progress'}
        taskTextColor={'text-[#9333EA]'}
        taskBackgroundColor={'bg-[#9333EA]'}
        tasks={inProgressTasks}
      />
      <ProgressLayout
        status={'Done'}
        taskTextColor={'text-[#16A34A]'}
        taskBackgroundColor={'bg-[#16A34A]'}
        tasks={doneTasks}
      />
    </div>
  );
};

export default BoardSection;
