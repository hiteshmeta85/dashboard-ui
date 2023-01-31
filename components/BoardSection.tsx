import React from 'react';
import Image from "next/image";

const BoardSection = () => {
  return (
    <div className='grid grid-cols-4 px-[36px] pb-[28px] gap-[24px]'>
      <div>
        <div className='flex justify-between items-center pb-[28px]'>
          <div className='flex justify-between items-center gap-3'>
            <p className='font-medium text-[14px]'>Backlog Tasks</p>
            <p className='bg-[#3B82F6] bg-opacity-10 px-[8px] py-[4px] rounded-full text-[10px] font-bold'>4</p>
          </div>
          <div>
            <Image src={'/images/more_horiz.svg'} alt={'Icon'} width={20} height={20}/>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-3 bg-white p-[20px] rounded-lg drop-shadow-sm'>
            <div className='flex justify-between items-center'>
              <p className='text-[12px] font-medium text-[#1F2633]'>Model Answer</p>
              <div className='flex items-center gap-2'>
                <Image src={'/images/task-1.svg'} alt={'Icon'} width={20} height={20}/>
                <p className='text-[#33BFFF] text-[10px] font-bold'>4</p>
              </div>
            </div>
            <div className='flex gap-1 items-center'>
              <p
                className='text-[8px] font-bold px-[8px] py-[5px] rounded-full border-[1px] border-[#EBEEF2]'>#UI007</p>
              <p
                className='text-[8px] font-bold px-[8px] py-[5px] rounded-full text-[#2563EB] bg-[#2563EB] bg-opacity-10'>Design</p>
              <p
                className='text-[8px] font-bold px-[8px] py-[5px] rounded-full text-[#CA8A04] bg-[#CA8A04] bg-opacity-10'>Backlog</p>
            </div>
            <div className='flex justify-between items-center'>
              <div className="flex -space-x-3">
                <Image src="/images/avatar-1.jpg" alt="Icon" width={32} height={32}
                       className='border-2 border-white border-white rounded-full'/>
                <Image src="/images/avatar-2.jpg" alt="Icon" width={32} height={32}
                       className='border-2 border-white border-white rounded-full'/>
                <p
                  className="flex items-center justify-center w-8 h-8 text-xs font-medium text-[#606C80] bg-[#F2F4F7] rounded-full">+5</p>
                <Image src="/images/add_button.svg" alt="Icon" width={32} height={32}/>
              </div>
              <div className='flex items-center gap-1.5'>
                <Image src="/images/file_present.svg" alt="Icon" width={20} height={20}/>
                <p className='text-[#33BFFF] text-[10px] font-bold'>4</p>
                <Image src="/images/message.svg" alt="Icon" width={20} height={20}/>
                <p className='text-[#33BFFF] text-[10px] font-bold'>4</p>
              </div>
            </div>
          </div>
          <div className='bg-white flex justify-center py-1 rounded-lg drop-shadow-sm'>
            <Image src="/images/new_task_button.svg" alt="Icon" width={20} height={20}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardSection;
