import React from 'react';
import { useRouter } from 'next/router';
import { topNavItems } from '../constants/topNavItems';
import Image from 'next/image';

const TopNavigation = () => {
  const router = useRouter();

  return (
    <div className="hidden items-center justify-between border-b-[1px] border-[#E9EBF0] px-[36px] py-[21px] xl:flex">
      <div className="flex gap-[32px]">
        <div className="flex min-w-[200px] justify-between rounded-md border-[1px] border-[#EBEEF2] bg-white p-[12px] drop-shadow-sm">
          <div className="flex items-center gap-3">
            <Image
              src={'/images/search.svg'}
              alt={'icon'}
              width={20}
              height={20}
            />
            <p className="cursor-pointer text-[12px] font-semibold text-[#98A2B2]">
              Search Tasks
            </p>
          </div>
          <Image
            src={'/images/input.svg'}
            alt={'icon'}
            width={20}
            height={20}
          />
        </div>
        <Image
          src={'/images/keyboard_voice.svg'}
          alt={'Icon'}
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      <div className="flex gap-[32px]">
        {topNavItems.map((item, index) => {
          return (
            <p
              key={index}
              className={`text-[11px] font-semibold ${
                router.asPath === item.path ? 'text-black' : 'text-[#7A8699]'
              } cursor-pointer`}
            >
              {item.name}
            </p>
          );
        })}
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={'/images/folder_open.svg'}
          alt={'Icon'}
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <Image
          src={'/images/notifications_none.svg'}
          alt={'Icon'}
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <div className="relative">
          <Image
            src={'/images/avatar.jpeg'}
            alt={'Avatar'}
            width={30}
            height={30}
            className="cursor-pointer rounded-full p-[2px] ring-2 ring-[#3B82F6]"
          />
          <span
            className={`absolute -top-1 left-4 rounded-full bg-red-500 px-[6px] py-[2px] text-[10px] font-bold text-white`}
          >
            4
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
