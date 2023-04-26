import {
  BellIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const Other = ({ w }) => (
  <div className='flex flex-col h-full gap-3'>
    <div className='flex text-center bg-neutral-800/50 border border-neutral-700 basis-1/2 flex-col rounded-md place-items-center justify-center hover:shadow-green-400/80 shadow-sm'>
      <p className='flex text-white text-lg font-light mb-1'>
        See what else were working on
      </p>
      <div>
        <button className='rounded-md py-1 px-2 border-b-4 border-green-500 bg-green-800 text-white text-xl font-light hover:bg-green-900'>
          Show me
        </button>
      </div>
    </div>
    <div className='flex flex-col bg-neutral-800/50 border border-neutral-700 rounded-md basis-1/2 hover:shadow-green-400/80 shadow-sm'>
      <div className='flex justify-between border-b border-neutral-700 p-1'>
        <div className='flex gap-1'>
          <p className='text-white text-md m-2 border-r pr-3 border-neutral-700'>
            Announcements
          </p>
          <BellIcon className='h-6 my-auto text-red-700' />
        </div>
      </div>
      <div className='p-2 text-neutral-200 font-light text-sm overflow-y-scroll'>
        Not added: sidebar expandable choice button (c#), tooltips (c#),
        responsive design (approve design first)
        <br /> IDEAS: For list components a list view / overview toggle should
        exist. list view shows whats there now, overview gives an overview,
        links to articles somehow
        <br />
        USERS: symbols to recognize events. e.g. bolt for perfect week,
        downarrow for downranking recently, fire for streak
        <br />
        PRESS: number colors represent moving up down or staying same from
        previous day
      </div>
    </div>
  </div>
);
export default Other;
