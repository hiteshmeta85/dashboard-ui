import React from 'react';
import {sidebarItems} from "../constants/sidebarItems";
import Image from "next/image";
import SidebarItem from "./SidebarItem";

const SidebarNavigation = ({isMobileNavOpen}: {isMobileNavOpen: boolean}) => {
  return (
    <div className={`absolute lg:static w-full flex flex-col z-10 
    ${!isMobileNavOpen ? 'opacity-0 delay-0 duration-500 invisible w-0' : 'flex-1 opacity-100'} 
    lg:w-full lg:visible lg:opacity-100 transition-all pb-[30px] px-[32px] bg-[#F7F8FA]`}
    >
      {sidebarItems.map((item, index) => {
        return (
          <div key={index} className='flex flex-col py-[30px] border-b-[1px] border-[#E9EBF0]'>
            <div className='flex justify-between items-center mb-[28px]'>
              <p className='text-[#98A2B2] text-[12px] font-semibold uppercase'>{item.section}</p>
              <Image src={'/images/expand_less.svg'} alt={'Icon'} width={20} height={20} className='cursor-pointer'/>
            </div>
            <div className='flex flex-col gap-5'>
              {item.items.map((sidebarItem, index) => {
                return (
                  <SidebarItem key={index} {...sidebarItem}/>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default SidebarNavigation;
