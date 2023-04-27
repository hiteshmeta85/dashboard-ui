import React from 'react';
import Image from 'next/image';
import { SidebarItem as SidebarItemInterface } from '../constants/sidebarItems';

interface Props extends SidebarItemInterface {}

const SidebarItem = (props: Props) => {
  const { icon, name, notification } = props;

  return (
    <div className="flex cursor-pointer items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Image src={icon} alt={'Icon'} width={20} height={20} />
        <p className="text-[12px] font-medium">{name}</p>
      </div>
      <p
        className={`text-[10px] font-extrabold text-[#2563EB] ${
          notification > 0 && 'rounded-full bg-[#3B82F6]/10 px-[8px] py-[4px]'
        }`}
      >
        {notification > 0 && notification}
      </p>
    </div>
  );
};

export default SidebarItem;
