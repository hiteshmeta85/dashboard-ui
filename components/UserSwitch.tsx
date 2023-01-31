import React from 'react';
import Image from "next/image";

const UserSwitch = () => {
  return (
    <div className='px-[32px] hidden lg:block'>
      <div className='flex items-center justify-between py-[30px] border-b-[1px] border-[#E9EBF0] '>
        <div className='flex gap-4 items-center'>
          <Image src={'/images/avatar.jpeg'} alt={'Avatar'} width={40} height={40} className='rounded-full p-[2px] ring-2 ring-[#3B82F6]'/>
          <div className='flex flex-col gap-[2px]'>
            <p className='text-[#1F2633] font-semibold text-[12px]'>Nancy Martino</p>
            <p className='text-[#B8BFCC] font-semibold text-[11px]'>Designer</p>
          </div>
        </div>
        <Image src={'/images/unfold_more.svg'} alt={'Icon'} width={20} height={20} className='cursor-pointer'/>
      </div>
    </div>
  );
};

export default UserSwitch;
