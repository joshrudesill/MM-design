import {
  NewspaperIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  QuestionMarkCircleIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const Article = ({ w }) => {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex justify-between border-b border-neutral-700 p-2'>
        <div className='flex gap-1'>
          <p className='text-white text-lg m-2 border-r pr-3 border-neutral-700'>
            Press
          </p>
          <NewspaperIcon className='h-6 my-auto text-red-700' />
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
        <p>symbol</p>
        <p>mentions</p>
        <p className='text-green-500'>bullish</p>
        <p className='text-red-500'>bearish</p>
      </div>
      <div className='flex flex-col overflow-x-hidden text-sm gap-1 mt-2'>
        <div className='flex flex-row justify-between p-2 border-b border-neutral-600 text-sm hover:bg-green-600'>
          <span className='text-white bg-green-600 px-2 py-1 rounded-md'>
            1
          </span>

          <p className='text-white text-md'>AAPL</p>
          <p className='text-white text-md font-light'>122</p>
          <p className='text-white text-md font-light'>50</p>
          <p className='text-white text-md font-light'>72</p>
        </div>
        <div className='flex flex-row justify-between p-2 border-b border-neutral-600 text-sm hover:bg-green-600'>
          <span className='text-white bg-teal-600 px-2 py-1 rounded-md'>2</span>

          <p className='text-white text-md'>AAPL</p>
          <p className='text-white text-md font-light'>122</p>
          <p className='text-white text-md font-light'>50</p>
          <p className='text-white text-md font-light'>72</p>
        </div>
        <div className='flex flex-row justify-between p-2 border-b border-neutral-600 text-sm hover:bg-green-600'>
          <span className='text-white bg-red-600 px-2 py-1 rounded-md'>3</span>

          <p className='text-white text-md'>AAPL</p>
          <p className='text-white text-md font-light'>122</p>
          <p className='text-white text-md font-light'>50</p>
          <p className='text-white text-md font-light'>72</p>
        </div>
      </div>
    </div>
  );
};
export default Article;
