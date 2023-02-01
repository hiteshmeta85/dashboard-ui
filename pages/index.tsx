import type {NextPage} from 'next'
import Layout from "./layout";
import Image from "next/image";
import SidebarNavigation from "../components/SidebarNavigation";
import UserSwitch from "../components/UserSwitch";
import TopNavigation from "../components/TopNavigation";
import TaskBoardNavigation from "../components/TaskBoardNavigation";
import RightSidebar from "../components/RightSidebar";
import BoardSection from "../components/BoardSection";
import CustomizeMenu from "../components/CustomizeMenu";
import {motion} from 'framer-motion';

const Home: NextPage = () => {

  return (
    <Layout>
      <div className='flex flex-col lg:flex-row bg-[#F7F8FA] min-h-screen'>
        <motion.div
          initial={{x: -300}}
          animate={{x: 0}}
          transition={{type: 'spring', stiffness: 50}}
          className='overflow-y-scroll border-r-[1px] border-[#E9EBF0]'
        >
          <div className='flex items-center justify-between border-b-[1px] border-[#E9EBF0] py-[30px] px-[32px]'>
            <p className='font-semibold text-xl'>Dashboard</p>
            <Image src="/images/menu_open.svg" alt="arrow" width={20} height={20} className='cursor-pointer'/>
          </div>
          <UserSwitch/>
          <SidebarNavigation/>
        </motion.div>
        <motion.div
          initial={{x: '-100vw'}}
          animate={{x: 0}}
          transition={{delay: 2.5, type: 'spring', stiffness: 30}}
          className='flex-1'
        >
          <TopNavigation/>
          <TaskBoardNavigation/>
          <CustomizeMenu/>
          <BoardSection/>
        </motion.div>
        <motion.div
          initial={{x: 300}}
          animate={{x: 0}}
          transition={{delay: 1, type: 'spring', stiffness: 50}}
          className='min-h-full hidden lg:block'
        >
          <RightSidebar/>
        </motion.div>
      </div>
    </Layout>
  );
}

export default Home
