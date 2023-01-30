import React from 'react';
import Image from "next/image";
import {rightSidebarItems} from "../constants/rightSidebarItems";

const RightSidebar = () => {
  return (
    <div className='flex flex-col min-h-full'>
      <div className='p-[33px] border-b-[1px] border-l-[1px] border-[#E9EBF0]'>
        <Image src={'/images/close.svg'} alt={'icon'} width={21} height={21}/>
      </div>
      <div className='flex flex-1 flex-col items-center justify-center gap-3 border-l-[1px] border-[#E9EBF0]'>
        {rightSidebarItems.map((item, index) => {
          return (
            <Image
              key={index}
              src={item.icon}
              alt={'Avatar'}
              width={35}
              height={35}
              className={`rounded-full ${item.isActive && 'p-[2px] ring-2 ring-[#3B82F6]'}`}
            />
          )
        })}
      </div>
      <div className='p-[33px] border-b-[1px] border-t-[1px] border-l-[1px] border-[#E9EBF0]'>
        <Image src={'/images/arrow_forward.svg'} alt={'icon'} width={21} height={21}/>
      </div>
    </div>
  );
};

export default RightSidebar;
