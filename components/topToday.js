import {
  RocketLaunchIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import TopTodayItem from "./topTodayItem";
const TopToday = () => {
  return (
    <>
      <div className='flex flex-col h-full '>
        <div className='flex justify-between border-b border-neutral-700 p-2'>
          <div className='flex gap-1'>
            <p className='text-white text-lg m-2 border-r pr-3 border-neutral-700'>
              Top Today
            </p>
            <RocketLaunchIcon className='h-6 my-auto animate-pulse text-red-700' />
          </div>
          <div
            style={{ textShadow: "#0c6900 1px 1px 5px" }}
            className='text-white flex justify-center text-lg border px-2 rounded-md border-neutral-700 shadow-green-500/30 shadow-sm'
          >
            <QuestionMarkCircleIcon className='h-6 my-auto text-green-600 ' />
          </div>
        </div>
        <div className='flex justify-between border-b border-neutral-700 text-neutral-300 px-3 bg-neutral-700 py-1 font-extralight'>
          <p>symbol</p>
          <p>mentions</p>
          <p>% bullish</p>
          <p>change</p>
        </div>
        <div className='flex flex-col overflow-x-hidden text-sm gap-1 mt-2'>
          {[...Array(100).keys()].map((e) => (
            <TopTodayItem key={e} />
          ))}
        </div>
      </div>
    </>
  );
};
export default TopToday;
