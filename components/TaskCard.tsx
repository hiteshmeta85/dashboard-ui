import React from 'react';
import Image from "next/image";
import {Task} from "../constants/taskItems";
import {motion} from "framer-motion";
import {childrenVariants} from "../utils/animations";

interface Props extends Task {
  taskTextColor: string;
  taskBackgroundColor: string;
}

const TaskCard = (props: Props) => {
  const {name, id, defaultTag, tags, assignees, files, comments, attachments, taskBackgroundColor, taskTextColor} = props;

  return (
    <motion.div
      variants={childrenVariants}
      className='flex flex-col gap-3 bg-white p-[20px] rounded-lg drop-shadow-sm'
    >
      <div className='flex justify-between items-start gap-2'>
        <p className='text-[12px] font-medium text-[#1F2633]'>{name}</p>
        {attachments > 0 &&
          <div className='flex items-center gap-2 w-12 justify-end'>
          <Image src={'/images/task-1.svg'} alt={'Icon'} width={20} height={20} className='cursor-pointer'/>
          <p className='text-[#33BFFF] text-[10px] font-bold'>{attachments}</p>
        </div>}
      </div>
      <div className='flex gap-1 items-center'>
        <p className='text-[8px] font-bold px-[8px] py-[5px] rounded-full border-[1px] border-[#EBEEF2]'>{id}</p>
        {tags.map((tag, index) => {
          return (
            <p key={index} className='text-[8px] font-bold px-[8px] py-[5px] rounded-full text-[#2563EB] bg-[#2563EB] bg-opacity-10'>{tag}</p>
          )
        })}
        <p className={`text-[8px] font-bold px-[8px] py-[5px] rounded-full bg-opacity-10 ${taskTextColor} ${taskBackgroundColor}`}>{defaultTag}</p>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex justify-between items-center gap-2'>
          {assignees.length > 0 && <div className="flex -space-x-3">
            {assignees.slice(0,2).map((assignee, index) => {
              return (
                <Image key={index} src={assignee} alt="Icon" width={32} height={32} className='border-2 border-white border-white rounded-full'/>
              )
            })}
            {assignees.length > 2 && <p className="flex items-center justify-center w-8 h-8 text-xs font-medium text-[#606C80] bg-[#F2F4F7] rounded-full cursor-pointer">+{assignees.length - 2}</p>}
          </div>}
          <Image src="/images/add_button.svg" alt="Icon" width={32} height={32} className='cursor-pointer'/>
        </div>
        <div className='flex items-center gap-1.5'>
          {files > 0 && <>
            <Image src="/images/file_present.svg" alt="Icon" width={20} height={20} className='cursor-pointer'/>
            <p className='text-[#33BFFF] text-[10px] font-bold'>{files}</p>
          </>}
          {comments > 0 && <>
            <Image src="/images/message.svg" alt="Icon" width={20} height={20} className='cursor-pointer'/>
            <p className='text-[#33BFFF] text-[10px] font-bold'>{comments}</p>
          </>}
        </div>
      </div>
    </motion.div>
  );
};

export default TaskCard;
