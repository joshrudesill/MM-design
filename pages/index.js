import Graph from "@/components/graph";
import Sidebar from "@/components/sidebar";
import {
  MagnifyingGlassIcon,
  EllipsisVerticalIcon,
  InformationCircleIcon,
  RocketLaunchIcon,
  ArrowUpRightIcon,
  ArrowDownRightIcon,
} from "@heroicons/react/24/outline";
import { useRef } from "react";
export default function Home() {
  const boxRef = useRef(null);
  return (
    <>
      <Sidebar />
      <div className='grid ml-12 pt-12 pb-6 px-16 grid-rows-6 grid-cols-12 gap-4 h-screen'>
        <div className='border row-span-3 col-span-5 flex justify-center'>
          <p className='text-white text-2xl my-auto mx-auto'>Top Today</p>
        </div>
        <div className='border row-span-3 col-span-7 flex justify-center'>
          <p className='text-white text-2xl my-auto mx-auto'>Graph</p>
        </div>
        <div className='border row-span-3 col-span-4 flex justify-center'>
          <p className='text-white text-2xl my-auto mx-auto'>
            Total Market View
          </p>
        </div>
        <div className='border row-span-3 col-span-4 flex justify-center'>
          <p className='text-white text-2xl my-auto mx-auto'>User Accuracy</p>
        </div>
        <div className='border row-span-3 col-span-4 flex justify-center'>
          <p className='text-white text-2xl my-auto mx-auto'>Other</p>
        </div>
      </div>
    </>
  );
}
//<Graph w={boxRef.current?.clientWidth} />
