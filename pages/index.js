import Accuracy from "@/components/accuracy";
import Article from "@/components/articlementions";
import Graph from "@/components/graph";
import Other from "@/components/otherfeatures";
import Search from "@/components/search";
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
      <Search />
      <div className='container mx-auto'>
        <div className='grid ml-12 pt-20 pb-6 grid-rows-6 grid-cols-12 gap-3 h-[100vmin]'>
          <div className='rounded-lg hover:shadow-green-400/80 shadow-md row-span-3 md:col-span-5 col-span-full sm:col-span-6 bg-neutral-800/50 border border-neutral-700'>
            <TopToday />
          </div>
          <div className='rounded-lg hover:shadow-green-400/80 shadow-md row-span-3 md:col-span-7 col-span-full sm:col-span-6 bg-neutral-800/50 border border-neutral-700'>
            <Graph />
          </div>
          <div className='rounded-lg hover:shadow-green-400/80 shadow-md row-span-3 md:col-span-4 col-span-full sm:col-span-6 bg-neutral-800/50 border border-neutral-700'>
            <Article />
          </div>
          <div className='rounded-lg hover:shadow-green-400/80 shadow-md row-span-3 md:col-span-4 col-span-full sm:col-span-6 bg-neutral-800/50 border border-neutral-700'>
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
