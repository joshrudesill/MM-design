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
      <div className='flex flex-col w-56 border-r border-neutral-500/40 h-screen z-50 fixed left-0 '>
        <Sidebar />
      </div>
      <div className='flex flex-row gap-5 w-screen absolute top-0 z-0'>
        <div className='text-neutral-400 flex flex-col mt-4 gap-5 w-[65%] mx-auto  '>
          <div class='flex w-full' ref={boxRef}>
            <input
              type='text'
              class='rounded-none rounded-l-lg bg-neutral-600 text-gray-900 focus:outline-none block flex-1 transition transform hover:-translate-y-0.5 cursor-pointer min-w-0 w-full text-sm p-3'
              placeholder='Search a symbol for more advanced data..'
            ></input>
            <span class='inline-flex items-center px-2 text-sm text-gray-900 bg-neutral-500  rounded-r-md'>
              <MagnifyingGlassIcon className='h-6 text-neutral-300' />
            </span>
          </div>
          <div className='grid grid-rows-6 grid-cols-12 gap-2 h-[65%]'>
            <div className='col-span-3 row-span-6'>
              <div className='flex flex-col gap-2 h-full'>
                <div className='flex flex-row justify-between p-1 border border-neutral-500/50 rounded-md h-16'>
                  <p
                    className='text-2xl my-auto ml-2 italic font-semibold text-green-600'
                    style={{ textShadow: "#000000 2px 3px 10px" }}
                  >
                    Trending Now
                  </p>
                  <RocketLaunchIcon className='h-6  my-auto text-red-600 animate-spin' />
                </div>
                <div className='flex flex-row justify-between p-1 border border-neutral-500/50 rounded-md flex-1 transition transform hover:-translate-y-0.5 cursor-pointer hover:border-green-500/50'>
                  <p className='text-xl my-auto'>AAPL</p>
                  <p className='text-md ml-auto mr-1 my-auto'>+34%</p>
                  <ArrowUpRightIcon className='h-6 my-auto text-green-600' />
                </div>
                <div className='flex flex-row justify-between p-1 border border-neutral-500/50 rounded-md flex-1 transition transform hover:-translate-y-0.5 cursor-pointer hover:border-red-500/50'>
                  <p className='text-xl'>TSLA</p>
                  <p className='text-md ml-auto mr-1'>+34%</p>
                  <ArrowDownRightIcon className='h-6  my-auto text-red-600' />
                </div>
                <div className='flex flex-row justify-between p-1 border border-neutral-500/50 rounded-md flex-1 transition transform hover:-translate-y-0.5 cursor-pointer hover:border-green-500/50'>
                  <p className='text-xl my-auto'>AAPL</p>
                  <p className='text-md ml-auto mr-1 my-auto'>+34%</p>
                  <ArrowUpRightIcon className='h-6 my-auto text-green-600' />
                </div>
                <div className='flex flex-row justify-between p-1 border border-neutral-500/50 rounded-md flex-1 transition transform hover:-translate-y-0.5 cursor-pointer hover:border-red-500/50'>
                  <p className='text-xl'>TSLA</p>
                  <p className='text-md ml-auto mr-1'>+34%</p>
                  <ArrowDownRightIcon className='h-6  my-auto text-red-600' />
                </div>
                <div className='flex flex-row justify-between p-1 border border-neutral-500/50 rounded-md flex-1 transition transform hover:-translate-y-0.5 cursor-pointer hover:border-green-500/50'>
                  <p className='text-xl my-auto'>AAPL</p>
                  <p className='text-md ml-auto mr-1 my-auto'>+34%</p>
                  <ArrowUpRightIcon className='h-6 my-auto text-green-600' />
                </div>
                <div className='flex flex-row justify-between p-1 border border-neutral-500/50 rounded-md flex-1 transition transform hover:-translate-y-0.5 cursor-pointer hover:border-red-500/50'>
                  <p className='text-xl'>TSLA</p>
                  <p className='text-md ml-auto mr-1'>+34%</p>
                  <ArrowDownRightIcon className='h-6  my-auto text-red-600' />
                </div>
                <div className='flex flex-row justify-between p-1 border border-neutral-500/50 rounded-md flex-1 transition transform hover:-translate-y-0.5 cursor-pointer hover:border-green-500/50'>
                  <p className='text-xl my-auto'>AAPL</p>
                  <p className='text-md ml-auto mr-1 my-auto'>+34%</p>
                  <ArrowUpRightIcon className='h-6 my-auto text-green-600' />
                </div>
                <div className='flex flex-row justify-between p-1 border border-neutral-500/50 rounded-md flex-1 transition transform hover:-translate-y-0.5 cursor-pointer hover:border-red-500/50'>
                  <p className='text-xl'>TSLA</p>
                  <p className='text-md ml-auto mr-1'>+34%</p>
                  <ArrowDownRightIcon className='h-6  my-auto text-red-600' />
                </div>
              </div>
            </div>
            <div className='border border-neutral-400/40 rounded-md row-span-6 col-span-9 flex flex-col'>
              <div className='flex flex-row p-2 justify-between border-b border-neutral-500/50 px-2'>
                <p className='font-semibold text-xl pl-1 pt-1 align-middle'>
                  Current Market Sentiment
                </p>
                <div className='flex flex-row'>
                  <button className='border rounded-l-md border-neutral-500/50 px-2 py-1 hover:bg-green-500 hover:text-black'>
                    Day
                  </button>
                  <button className='border border-l-0 border-neutral-500/50 px-2 py-1 hover:bg-green-500 hover:text-black'>
                    Week
                  </button>
                  <button className='border border-l-0 rounded-r-md border-neutral-500/50 px-2 py-1 hover:bg-green-500 hover:text-black'>
                    Week
                  </button>
                  <EllipsisVerticalIcon className='h-8 text-neutral-300 my-auto' />
                </div>
              </div>
              <div className='flex grow p-3 bg-neutral-500 text-black'>
                Graph
              </div>
              <div className='p-2 border-t border-neutral-500/50 flex-row flex mt-1 shrink'>
                <InformationCircleIcon class='h-6 text-green-900 mr-1' />

                <span>How to read this graph</span>
              </div>
            </div>
          </div>
          <div className='grid grid-rows-6 grid-cols-12 gap-2 mb-56'>
            <div className='row-span-6 col-span-7 border border-neutral-500/50 rounded-md'>
              <div className='flex flex-col justify-between'>
                <div className='flex flex-row justify-between border-b border-neutral-500/50'>
                  <p className='my-auto text-lg p-2 tracking-widest'>
                    Top comment accuracy
                  </p>
                  <EllipsisVerticalIcon className='h-8 text-neutral-500 my-auto' />
                </div>
                <div className='flex flex-row justify-between border-b border-neutral-500/50'>
                  <div className='flex flex-row p-1'>
                    <p className='mr-2 bg-green-500/60 py-1 px-2 my-auto text-black rounded-md'>
                      1
                    </p>
                    <p className='my-auto'>CornMan123</p>
                  </div>
                  <button className='border-neutral-500/50 border m-2 p-1 rounded-md px-2 hover:bg-green-500/50 hover:text-black'>
                    Profile
                  </button>
                </div>
                <div className='flex flex-row justify-between border-b border-neutral-500/50'>
                  <div className='flex flex-row p-1'>
                    <p className='mr-2 bg-green-500/70 py-1 px-2 my-auto text-black rounded-md'>
                      2
                    </p>
                    <p className='my-auto'>NA LAST H0PE</p>
                  </div>
                  <button className='border-neutral-500/50 border m-2 p-1 rounded-md px-2 hover:bg-green-500/50 hover:text-black'>
                    Profile
                  </button>
                </div>
                <div className='flex flex-row justify-between border-b border-neutral-500/50'>
                  <div className='flex flex-row p-1'>
                    <p className='mr-2 bg-green-500/80 py-1 px-2 my-auto text-black rounded-md'>
                      3
                    </p>
                    <p className='my-auto'>noobslayer16</p>
                  </div>
                  <button className='border-neutral-500/50 border m-2 p-1 rounded-md px-2 hover:bg-green-500/50 hover:text-black'>
                    Profile
                  </button>
                </div>
                <div className='flex flex-row justify-between border-b border-neutral-500/50'>
                  <div className='flex flex-row p-1'>
                    <p className='mr-2 bg-green-500/90 py-1 px-2 my-auto text-black rounded-md'>
                      4
                    </p>
                    <p className='my-auto'>CornMan123</p>
                  </div>
                  <button className='border-neutral-500/50 border m-2 p-1 rounded-md px-2 hover:bg-green-500/50 hover:text-black'>
                    Profile
                  </button>
                </div>
                <div className='flex flex-row justify-between border-b border-neutral-500/50'>
                  <div className='flex flex-row p-1'>
                    <p className='mr-2 bg-green-500 py-1 px-2 my-auto text-black rounded-md'>
                      4
                    </p>
                    <p className='my-auto'>CornMan123</p>
                  </div>
                  <button className='border-neutral-500/50 border m-2 p-1 rounded-md px-2 hover:bg-green-500/50 hover:text-black'>
                    Profile
                  </button>
                </div>
              </div>
            </div>
            <div className='row-span-6 col-span-5 '>
              <div className='flex flex-col h-full gap-2'>
                <div className='border border-neutral-500/50 rounded-md p-2 flex flex-row grow justify-between text-green-500'>
                  <p className='my-auto'>SPY</p>
                  <p className='my-auto'>+0.31%</p>
                  <p className='my-auto'>$310.54</p>
                </div>
                <div className='border border-neutral-500/50 rounded-md p-2 flex flex-row grow justify-between text-red-500'>
                  <p className='my-auto'>TSLA</p>
                  <p className='my-auto'>+0.31%</p>
                  <p className='my-auto'>$310.54</p>
                </div>
                <div className='border border-neutral-500/50 rounded-md p-2 flex flex-row grow justify-between text-red-500'>
                  <p className='my-auto'>DOW</p>
                  <p className='my-auto'>+0.31%</p>
                  <p className='my-auto'>$310.54</p>
                </div>
                <div className='border border-neutral-500/50 rounded-md p-2 flex flex-row grow justify-between text-green-500'>
                  <p className='my-auto'>AAPL</p>
                  <p className='my-auto'>+0.31%</p>
                  <p className='my-auto'>$310.54</p>
                </div>
                <div className='border border-neutral-500/50 rounded-md p-2 flex flex-row grow justify-between text-green-500'>
                  <p className='my-auto'>GME</p>
                  <p className='my-auto'>+3.10%</p>
                  <p className='my-auto'>$23.45</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//<Graph w={boxRef.current?.clientWidth} />
