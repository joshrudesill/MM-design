import Accuracy from "@/components/accuracy";
import Article from "@/components/articlementions";
import Graph from "@/components/graph";
import Other from "@/components/otherfeatures";
import Sidebar from "@/components/sidebar";
import TopToday from "@/components/topToday";
import {
  MagnifyingGlassIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";

import { useRef } from "react";
export default function Home() {
  return (
    <>
      <Sidebar />
      <div className='container mx-auto'>
        <div className='flex mt-3 ml-12'>
          <input
            className='w-full bg-neutral-600 p-2 rounded-l-md text-neutral-900'
            placeholder='Search symbols here'
          ></input>
          <div className=' bg-neutral-700 p-2 rounded-r-md'>
            <MagnifyingGlassIcon className='h-6 my-auto text-green-600' />
          </div>
        </div>
        <div className='grid ml-12 pt-8 pb-6 grid-rows-6 grid-cols-12 gap-3 sm:h-screen'>
          <div className='rounded-lg hover:shadow-green-400/80 shadow-md row-span-3 md:col-span-8 col-span-full sm:col-span-6 bg-neutral-800'>
            <TopToday />
          </div>
          <div className='rounded-lg hover:shadow-green-400/80 shadow-md row-span-3 md:col-span-4 col-span-full sm:col-span-6 bg-neutral-800'>
            <Graph />
          </div>
          <div className='rounded-lg hover:shadow-green-400/80 shadow-md row-span-3 md:col-span-4 col-span-full sm:col-span-6 bg-neutral-800'>
            <Article />
          </div>
          <div className='rounded-lg hover:shadow-green-400/80 shadow-md row-span-3 md:col-span-4 col-span-full sm:col-span-6 bg-neutral-800'>
            <Accuracy />
          </div>
          <div className='rounded-lg  shadow-md row-span-3 md:col-span-4 col-span-full sm:col-span-6 '>
            <Other />
          </div>
        </div>
      </div>
    </>
  );
}
//<Graph w={boxRef.current?.clientWidth} />
