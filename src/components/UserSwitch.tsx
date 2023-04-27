import React from 'react';
import Image from 'next/image';

const UserSwitch = () => {
  return (
    <div className="hidden px-[32px] lg:block">
      <div className="flex items-center justify-between border-b-[1px] border-[#E9EBF0] py-[30px] ">
        <div className="flex items-center gap-4">
          <Image
            src={'/images/avatar.jpeg'}
            alt={'Avatar'}
            width={40}
            height={40}
            className="rounded-full p-[2px] ring-2 ring-[#3B82F6]"
          />
          <div className="flex flex-col gap-[2px]">
            <p className="text-[12px] font-semibold text-[#1F2633]">
              Nancy Martino
            </p>
            <p className="text-[11px] font-semibold text-[#B8BFCC]">Designer</p>
          </div>
        </div>
        <Image
          src={'/images/unfold_more.svg'}
          alt={'Icon'}
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default UserSwitch;
