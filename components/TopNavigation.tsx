import React from 'react';
import {useRouter} from "next/router";
import {topNavItems} from "../constants/topNavItems";
import Image from "next/image";

const TopNavigation = () => {
  const router = useRouter()

  return (
    <div className='flex justify-between items-center px-[36px] py-[21px] border-b-[1px] border-[#E9EBF0]'>
      <div className='flex gap-[32px]'>
        <div className='bg-white flex justify-between border-[1px] border-[#EBEEF2] rounded-md p-[12px] min-w-[200px] drop-shadow-sm'>
          <div className='flex items-center gap-3'>
            <Image src={'/images/search.svg'} alt={'icon'} width={20} height={20}/>
            <p className='text-[#98A2B2] font-semibold text-[12px]'>Search Tasks</p>
          </div>
          <Image src={'/images/input.svg'} alt={'icon'} width={20} height={20}/>
        </div>
        <Image src={'/images/keyboard_voice.svg'} alt={'Icon'} width={20} height={20}/>
      </div>
      <div className='flex gap-[32px]'>
        {topNavItems.map((item, index) => {
          return (
            <p key={index} className={`font-semibold text-[11px] ${router.asPath === item.path ? 'text-black' : 'text-[#7A8699]'}`}>{item.name}</p>
          )
        })}
      </div>
      <div className='flex items-center gap-3'>
        <Image src={'/images/folder_open.svg'} alt={'Icon'} width={20} height={20}/>
        <Image src={'/images/notifications_none.svg'} alt={'Icon'} width={20} height={20}/>
        <Image src={'/images/avatar.jpeg'} alt={'Avatar'} width={30} height={30} className='rounded-full p-[2px] ring-2 ring-[#3B82F6]'/>
      </div>
    </div>
  );
};

export default TopNavigation;
