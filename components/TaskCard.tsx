import React from 'react';
import Image from 'next/image';
import { Task } from '../constants/taskItems';

interface Props extends Task {
  taskTextColor: string;
  taskBackgroundColor: string;
}

const TaskCard = (props: Props) => {
  const {
    name,
    id,
    defaultTag,
    tags,
    assignees,
    files,
    comments,
    attachments,
    taskBackgroundColor,
    taskTextColor,
  } = props;

  return (
    <div className="flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[12px] font-medium text-[#1F2633]">{name}</p>
        {attachments > 0 && (
          <div className="flex w-12 items-center justify-end gap-2">
            <Image
              src={'/images/task-1.svg'}
              alt={'Icon'}
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <p className="text-[10px] font-bold text-[#33BFFF]">
              {attachments}
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center gap-1">
        <p className="rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold">
          {id}
        </p>
        {tags.map((tag, index) => {
          return (
            <p
              key={index}
              className="rounded-full bg-[#2563EB] bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold text-[#2563EB]"
            >
              {tag}
            </p>
          );
        })}
        <p
          className={`rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold ${taskTextColor} ${taskBackgroundColor}`}
        >
          {defaultTag}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-2">
          {assignees.length > 0 && (
            <div className="flex -space-x-3">
              {assignees.slice(0, 2).map((assignee, index) => {
                return (
                  <Image
                    key={index}
                    src={assignee}
                    alt="Icon"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-white"
                  />
                );
              })}
              {assignees.length > 2 && (
                <p className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F2F4F7] text-xs font-medium text-[#606C80]">
                  +{assignees.length - 2}
                </p>
              )}
            </div>
          )}
          <Image
            src="/images/add_button.svg"
            alt="Icon"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-1.5">
          {files > 0 && (
            <>
              <Image
                src="/images/file_present.svg"
                alt="Icon"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <p className="text-[10px] font-bold text-[#33BFFF]">{files}</p>
            </>
          )}
          {comments > 0 && (
            <>
              <Image
                src="/images/message.svg"
                alt="Icon"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <p className="text-[10px] font-bold text-[#33BFFF]">{comments}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
