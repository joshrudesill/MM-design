import Graph from "@/components/graph";
import Sidebar from "@/components/sidebar";
import TopToday from "@/components/topToday";

import { useRef } from "react";
export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="container mx-auto">
        <div className="grid ml-12 pt-12 pb-6 grid-rows-6 grid-cols-12 gap-3 sm:h-screen">
          <div className="border rounded-md border-neutral-600 shadow-green-500/30 hover:shadow-green-400/80 shadow-md row-span-3 md:col-span-4 col-span-full sm:col-span-6 ">
            <TopToday />
          </div>
          <div className="border row-span-3 col-span-8 justify-center hidden md:flex">
            <p className="text-white text-2xl my-auto mx-auto">Graph</p>
          </div>
          <div className="border row-span-3 md:col-span-4 col-span-full sm:col-span-6  flex justify-center">
            <p className="text-white text-2xl my-auto mx-auto">
              Total Market View
            </p>
          </div>
          <div className="border row-span-3 md:col-span-4 col-span-full sm:col-span-6  flex justify-center">
            <p className="text-white text-2xl my-auto mx-auto">User Accuracy</p>
          </div>
          <div className="border row-span-3 md:col-span-4 col-span-full sm:col-span-6  flex justify-center">
            <p className="text-white text-2xl my-auto mx-auto">Other</p>
          </div>
        </div>
      </div>
    </>
  );
}
//<Graph w={boxRef.current?.clientWidth} />
