import React from 'react';
import ProgressLayout from "./ProgressLayout";
import {backlogTasks, doneTasks, inProgressTasks, todoTasks} from "../constants/taskItems";

const BoardSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-[16px] md:px-[36px] pb-[28px] gap-[24px]'>
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
