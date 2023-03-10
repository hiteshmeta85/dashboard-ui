import React from 'react';
import {taskBoardItems} from "../constants/taskBoardItems";
import Image from "next/image";

const TaskBoardNavigation = () => {
  return (
    <div className='flex flex-col xl:flex-row justify-between gap-2 items-center px-[16px] md:px-[36px] py-[28px]'>
      <div className='flex items-center gap-[24px]'>
        <p className='text-[#1F2633] font-semibold text-3xl'>Task Boards</p>
        <Image src="/images/edit.svg" alt="arrow" width={20} height={20} className='cursor-pointer'/>
      </div>
      <div className='flex justify-center gap-[10px] md:gap-[24px] xl:gap-[32px] flex-wrap'>
        {taskBoardItems.map((item, index) => {
          return (
            <p key={index} className={`font-semibold text-[11px] cursor-pointer ${item.section === '#' ? 'text-[#3B82F6] underline decoration-1 decoration-[#3B82F6] underline-offset-8' : 'text-[#7A8699]'}`}>{item.name}</p>
          )
        })}
      </div>
      <div className='flex items-center gap-2 mt-2'>
        <div className="flex -space-x-4">
          <Image src="/images/avatar-1.jpg" alt="Icon" width={40} height={40} className='border-2 border-white rounded-full'/>
          <Image src="/images/avatar-2.jpg" alt="Icon" width={40} height={40} className='border-2 border-white rounded-full'/>
          <Image src="/images/avatar-3.jpg" alt="Icon" width={40} height={40} className='border-2 border-white rounded-full'/>
          <Image src="/images/avatar-4.jpg" alt="Icon" width={40} height={40} className='border-2 border-white rounded-full'/>
          <p className="flex items-center justify-center w-10 h-10 text-xs font-medium text-[#606C80] bg-[#F2F4F7] rounded-full cursor-pointer">+5</p>
        </div>
        <Image src="/images/add_button.svg" alt="Icon" width={40} height={40} className='cursor-pointer'/>
      </div>
    </div>
  );
};

export default TaskBoardNavigation;
