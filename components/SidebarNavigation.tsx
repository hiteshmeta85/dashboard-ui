import React from 'react';
import {sidebarItems} from "../contants/sidebarItems";
import Image from "next/image";
import SidebarItem from "./SidebarItem";

const SidebarNavigation = () => {
  return (
    <div className='flex flex-col pb-[30px] px-[32px]'>
      {sidebarItems.map((item, index) => {
        return (
          <div key={index} className='flex flex-col py-[30px] border-b-[1px] border-[#E9EBF0]'>
            <div className='flex justify-between items-center mb-[28px]'>
              <p className='text-[#98A2B2] text-[12px] font-semibold'>{item.section}</p>
              <Image src={'/images/expand_less.svg'} alt={'Icon'} width={20} height={20}/>
            </div>
            <div className='flex flex-col gap-[28px]'>
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
