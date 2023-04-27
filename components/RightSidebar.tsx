import React from 'react';
import Image from 'next/image';
import { rightSidebarItems } from '../constants/rightSidebarItems';

const RightSidebar = () => {
  return (
    <div className="flex min-h-full flex-col">
      <div className="border-b-[1px] border-l-[1px] border-[#E9EBF0] p-[33px]">
        <Image
          src={'/images/close.svg'}
          alt={'icon'}
          width={21}
          height={21}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-3 border-l-[1px] border-[#E9EBF0]">
        {rightSidebarItems.map((item, index) => {
          return (
            <div className="relative" key={index}>
              <Image
                src={item.icon}
                alt={'Avatar'}
                width={35}
                height={35}
                className={`cursor-pointer rounded-full ${
                  item.isActive && 'p-[2px] ring-2 ring-[#3B82F6]'
                }`}
              />
              {item.notification > 0 && (
                <span
                  className={`absolute -top-2 left-6 rounded-full bg-red-500 px-[6px] py-[2px] text-[10px] font-bold text-white`}
                >
                  {item.notification}
                </span>
              )}
              <span
                className={`absolute bottom-0 left-6 h-3.5 w-3.5 ${
                  item.isActive ? 'bg-green-500' : 'bg-red-500'
                } rounded-full border-2 border-white`}
              ></span>
            </div>
          );
        })}
      </div>
      <div className="border-y-[1px] border-l-[1px] border-[#E9EBF0] p-[33px]">
        <Image
          src={'/images/arrow_forward.svg'}
          alt={'icon'}
          width={21}
          height={21}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default RightSidebar;
