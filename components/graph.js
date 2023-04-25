import {
  PresentationChartLineIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const Graph = ({ w }) => (
  <div className='flex flex-col h-full'>
    <div className='flex justify-between border-b border-neutral-700 p-3'>
      <div className='flex gap-1'>
        <p className='text-white text-xl m-2 border-r pr-3 border-neutral-700'>
          Sentiment Tracking
        </p>
        <PresentationChartLineIcon className='h-6 my-auto text-red-700' />
      </div>
      <div
        style={{ textShadow: "#0c6900 1px 1px 5px" }}
        className='text-white flex justify-center text-lg border px-2 rounded-md border-neutral-700 shadow-green-500/30 shadow-sm'
      >
        <QuestionMarkCircleIcon className='h-6 my-auto text-green-600 ' />
      </div>
    </div>
  </div>
);
export default Graph;
