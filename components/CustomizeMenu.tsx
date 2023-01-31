import React from 'react';
import Image from "next/image";

const CustomizeArrangement = ({src}: { src: string }) => {
  return (
    <div className='bg-white drop-shadow-sm p-2 rounded-lg'>
      <Image src={src} alt="Icon" width={20} height={20}/>
    </div>
  )
}

const CustomizeMenu = () => {
  return (
    <div className='flex justify-between items-center px-[36px] pb-[28px]'>
      <div className='flex justify-between items-center gap-4'>
        <div className='drop-shadow-sm bg-white grid grid-cols-2 gap-2 rounded-lg border-[1px] border-[#EBEEF2]'>
          <div className='flex items-center gap-2 bg-[#FAFBFC] p-[8px] border-r-[1px] border-[#EBEEF2]'>
            <Image src={'/images/dashboard.svg'} alt="Icon" width={20} height={20}/>
            <p className='text-[#606C80] text-[12px] font-semibold'>Board View</p>
          </div>
          <div className='flex items-center gap-2 p-[8px]'>
            <Image src={'/images/hamburger.svg'} alt="Icon" width={20} height={20}/>
            <p className='text-[#606C80] text-[12px] font-semibold'>Board View</p>
          </div>
        </div>
        <div className='w-[1px] h-8 bg-[#EBEEF2]'/>
        <div className='flex items-center gap-2'>
          <Image src={'/images/lock.svg'} alt="Icon" width={20} height={20}/>
          <p className='text-[#98A2B2] text-[12px] font-semibold'>Limited Access</p>
          <Image src={'/images/keyboard_arrow_down.svg'} alt="Icon" width={20} height={20}/>
        </div>
        <div className='w-[1px] h-8 bg-[#EBEEF2]'/>
        <div className='flex items-center gap-2'>
          <p className='text-[#98A2B2] text-[12px] font-semibold'>Owners</p>
          <Image src={'/images/twitter.svg'} alt="Icon" width={30} height={30}/>
          <p className='text-[#606C80] text-[12px] font-semibold'>Twitter Team</p>
        </div>
      </div>
      <div className='bg-white flex gap-3 items-center border-[1px] border-[#EBEEF2] rounded-md pl-[8px] py-[8px] pr-8'>
        <Image src={'/images/search.svg'} alt={'icon'} width={20} height={20}/>
        <p className='text-[#98A2B2] font-semibold text-[12px]'>Search Tasks</p>
      </div>
      <div className='flex gap-2'>
        <CustomizeArrangement src={'/images/select_file.svg'}/>
        <CustomizeArrangement src={'/images/center_align.svg'}/>
        <CustomizeArrangement src={'/images/left_align.svg'}/>
        <CustomizeArrangement src={'/images/shape_circles.svg'}/>
        <CustomizeArrangement src={'/images/customize_arrangement.svg'}/>
      </div>
    </div>
  );
};

export default CustomizeMenu;
