import Image from 'next/image';
import TaskCard from './TaskCard';
import React from 'react';
import { Tasks } from '../constants/taskItems';

interface Props {
  status: string;
  taskTextColor: string;
  taskBackgroundColor: string;
  tasks: Tasks;
}

const ProgressLayout = (props: Props) => {
  const { status, taskTextColor, taskBackgroundColor, tasks } = props;

  return (
    <div>
      <div className="flex items-center justify-between pb-[28px]">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[14px] font-medium">{status}</p>
          <p
            className={`${taskBackgroundColor} ${taskTextColor} rounded-full bg-opacity-10 px-[8px] py-[4px] text-[10px] font-bold`}
          >
            {tasks.length}
          </p>
        </div>
        <div>
          <Image
            src={'/images/more_horiz.svg'}
            alt={'Icon'}
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => {
          return (
            <TaskCard
              key={index}
              {...task}
              taskTextColor={taskTextColor}
              taskBackgroundColor={taskBackgroundColor}
            />
          );
        })}
        <div className="flex justify-center rounded-lg bg-white py-1 drop-shadow-sm">
          <Image
            src="/images/new_task_button.svg"
            alt="Icon"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressLayout;
