import type {NextPage} from 'next'
import Layout from "./layout";
import Image from "next/image";
import SidebarNavigation from "../components/SidebarNavigation";
import UserSwitch from "../components/UserSwitch";
import TopNavigation from "../components/TopNavigation";
import TaskBoardNavigation from "../components/TaskBoardNavigation";
import RightSidebar from "../components/RightSidebar";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='flex bg-[#F7F8FA] min-h-screen'>
        <div className='overflow-y-scroll border-r-[1px] border-[#E9EBF0]'>
          <div className='flex items-center justify-between border-b-[1px] border-[#E9EBF0] py-[30px] px-[32px]'>
            <p className='font-semibold text-xl'>Dashboard</p>
            <Image src="/images/menu_open.svg" alt="arrow" width={20} height={20}/>
          </div>
          <UserSwitch/>
          <SidebarNavigation/>
        </div>
        <div className='flex-1'>
          <TopNavigation/>
          <TaskBoardNavigation/>
        </div>
        <div className='min-h-full'>
          <RightSidebar/>
        </div>
      </div>
    </Layout>
  );
}

export default Home
