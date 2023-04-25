import {
  FireIcon,
  BoltIcon,
  ArrowTrendingDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const Accuracy = ({ w }) => (
  <div className='flex flex-col h-full'>
    <div className='flex justify-between border-b border-neutral-700 p-2'>
      <div className='flex gap-1'>
        <p className='text-white text-lg m-2 border-r pr-3 border-neutral-700'>
          Top Users
        </p>
        <FireIcon className='h-6 my-auto text-red-700' />
      </div>
      <div
        style={{ textShadow: "#0c6900 1px 1px 5px" }}
        className='text-white flex justify-center text-lg border px-2 rounded-md border-neutral-700 shadow-green-500/30 shadow-sm'
      >
        <QuestionMarkCircleIcon className='h-6 my-auto text-green-600 ' />
      </div>
    </div>
    <div className='flex justify-between border-b border-neutral-700 text-neutral-300 px-3 bg-neutral-700 py-1 font-extralight'>
      <p>rank</p>
      <p>user</p>
      <p>accuracy</p>
    </div>
    <div className='flex flex-col overflow-x-hidden text-sm gap-1'>
      <div className='flex flex-row justify-between p-2 border-b border-neutral-600 hover:bg-green-600'>
        <div className='inline-flex gap-1'>
          <span className='text-white text-lg'>1</span>
          <BoltIcon className='h-5 my-auto text-teal-600 ' />
        </div>
        <p className='text-white text-md'>optionsOPKappa</p>
        <p className='text-white text-md font-light'>94.4%</p>
      </div>
      <div className='flex flex-row justify-between p-2 border-b border-neutral-600 hover:bg-green-600'>
        <div className='inline-flex gap-1'>
          <span className='text-white text-lg'>2</span>
          <ArrowTrendingDownIcon className='h-5 my-auto text-red-600 ' />
        </div>
        <p className='text-white text-md'>SPY LAST HOP3</p>
        <p className='text-white text-md font-light'>90.5%</p>
      </div>
      <div className='flex flex-row justify-between p-2 border-b border-neutral-600 hover:bg-green-600'>
        <div className='inline-flex gap-1'>
          <span className='text-white text-lg'>3</span>
          <FireIcon className='h-5 my-auto text-amber-600' />
        </div>
        <p className='text-white text-md'>Better Trader 69</p>
        <p className='text-white text-md font-light'>89.1%</p>
      </div>
    </div>
  </div>
);
export default Accuracy;
