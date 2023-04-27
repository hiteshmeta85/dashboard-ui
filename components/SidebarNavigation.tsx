import React from 'react';
import { sidebarItems } from '../constants/sidebarItems';
import Image from 'next/image';
import SidebarItem from './SidebarItem';

const SidebarNavigation = ({
  isMobileNavOpen,
}: {
  isMobileNavOpen: boolean;
}) => {
  return (
    <div
      className={`absolute z-10 flex w-full flex-col lg:static 
    ${
      !isMobileNavOpen
        ? 'invisible w-0 opacity-0 duration-500'
        : 'flex-1 opacity-100'
    } 
    bg-[#F7F8FA] px-[32px] pb-[30px] transition-all lg:visible lg:w-full lg:opacity-100`}
    >
      {sidebarItems.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col border-b-[1px] border-[#E9EBF0] py-[30px]"
          >
            <div className="mb-[28px] flex items-center justify-between">
              <p className="text-[12px] font-semibold uppercase text-[#98A2B2]">
                {item.section}
              </p>
              <Image
                src={'/images/expand_less.svg'}
                alt={'Icon'}
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-5">
              {item.items.map((sidebarItem, index) => {
                return <SidebarItem key={index} {...sidebarItem} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarNavigation;
