import React from 'react';
import { taskBoardItems } from '../constants/taskBoardItems';
import Image from 'next/image';

const TaskBoardNavigation = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-2 px-[16px] py-[28px] md:px-[36px] xl:flex-row">
      <div className="flex items-center gap-[24px]">
        <p className="text-3xl font-semibold text-[#1F2633]">Task Boards</p>
        <Image
          src="/images/edit.svg"
          alt="arrow"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-[10px] md:gap-[24px] xl:gap-[32px]">
        {taskBoardItems.map((item, index) => {
          return (
            <p
              key={index}
              className={`cursor-pointer text-[11px] font-semibold ${
                item.section === '#'
                  ? 'text-[#3B82F6] underline decoration-[#3B82F6] decoration-1 underline-offset-8'
                  : 'text-[#7A8699]'
              }`}
            >
              {item.name}
            </p>
          );
        })}
      </div>
      <div className="mt-2 flex items-center gap-2">
        <div className="flex -space-x-4">
          <Image
            src="/images/avatar-1.jpg"
            alt="Icon"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
          <Image
            src="/images/avatar-2.jpg"
            alt="Icon"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
          <Image
            src="/images/avatar-3.jpg"
            alt="Icon"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
          <Image
            src="/images/avatar-4.jpg"
            alt="Icon"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
          <p className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F2F4F7] text-xs font-medium text-[#606C80]">
            +5
          </p>
        </div>
        <Image
          src="/images/add_button.svg"
          alt="Icon"
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TaskBoardNavigation;
