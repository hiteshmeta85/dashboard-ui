import type { NextPage } from 'next';
import Layout from './layout';
import Image from 'next/image';
import SidebarNavigation from '../components/SidebarNavigation';
import UserSwitch from '../components/UserSwitch';
import TopNavigation from '../components/TopNavigation';
import TaskBoardNavigation from '../components/TaskBoardNavigation';
import RightSidebar from '../components/RightSidebar';
import BoardSection from '../components/BoardSection';
import CustomizeMenu from '../components/CustomizeMenu';
import React, { useState } from 'react';

const Home: NextPage = () => {
  let [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <Layout>
      <div className="flex min-h-screen flex-col bg-[#F7F8FA] lg:flex-row">
        <div className="overflow-y-scroll border-r-[1px] border-[#E9EBF0]">
          <div className="flex items-center justify-between border-b-[1px] border-[#E9EBF0] py-[30px] px-[32px]">
            <p className="text-xl font-semibold">Dashboard</p>
            <Image
              src="/images/menu_open.svg"
              alt="arrow"
              width={20}
              height={20}
              className="cursor-pointer"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            />
          </div>
          <UserSwitch />
          <SidebarNavigation isMobileNavOpen={isMobileNavOpen} />
        </div>
        <div className={`flex-1 ${isMobileNavOpen && 'hidden'} lg:block`}>
          <TopNavigation />
          <TaskBoardNavigation />
          <CustomizeMenu />
          <BoardSection />
        </div>
        <div className="hidden min-h-full lg:block">
          <RightSidebar />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
