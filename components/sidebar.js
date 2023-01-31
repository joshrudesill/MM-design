import {
  HomeIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowTrendingUpIcon,
  LifebuoyIcon,
  CalculatorIcon,
  ScaleIcon,
  UsersIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const names = [
    "Dashboard",
    "Raw Comments",
    "Sentiment Polling",
    "Forum",
    "Subreddit Accuracy",
    "Mentions Analysis",
    "Account Center",
  ];
  return (
    <div className='flex flex-col group w-12 hover:w-56 border-r border-neutral-500/40 h-screen z-50 fixed left-0 '>
      <div className='text-green-400  p-2 text-2xl border-green-700/20 border-b font-mono tracking-wide'>
        <p className='flex flex-row gap-1'>
          <CurrencyDollarIcon className='h-8' />
          <p className='hidden group-hover:block'>MonkeeMath</p>
        </p>
      </div>
      <div className=' text-green-500 p-3 transition transform hover:-translate-y-0.5 cursor-pointer '>
        <p
          style={{ textShadow: "#0c6900 1px 1px 5px" }}
          className='flex flex-row gap-2'
        >
          <HomeIcon className='h-6' />
          <p className='hidden group-hover:block'>{names[0]}</p>
        </p>
      </div>
      <div className='text-neutral-400  p-3  transition transform hover:-translate-y-0.5 cursor-pointer '>
        <p className='flex flex-row gap-2'>
          <ChatBubbleBottomCenterTextIcon className='h-6' />
          <p className='hidden group-hover:block'>{names[1]}</p>
        </p>
      </div>
      <div className='text-neutral-400  p-3 transition transform hover:-translate-y-0.5 cursor-pointer  '>
        <p className='flex flex-row gap-2'>
          <ArrowTrendingUpIcon className='h-6' />
          <p className='hidden group-hover:block'>{names[2]}</p>
        </p>
      </div>
      <div className='text-neutral-400  p-3  transition transform hover:-translate-y-0.5 cursor-pointer '>
        <p className='flex flex-row gap-2'>
          <LifebuoyIcon className='h-6' />
          <p className='hidden group-hover:block'>{names[3]}</p>
        </p>
      </div>
      <div className='text-neutral-400  p-3  transition transform hover:-translate-y-0.5 cursor-pointer '>
        <p className='flex flex-row gap-2'>
          <CalculatorIcon className='h-6' />
          <p className='hidden group-hover:block'>{names[4]}</p>
        </p>
      </div>
      <div className='text-neutral-400  p-3  transition transform hover:-translate-y-0.5 cursor-pointer '>
        <p className='flex flex-row gap-2'>
          <ScaleIcon className='h-6' />
          <p className='hidden group-hover:block'>{names[5]}</p>
        </p>
      </div>
      <div className='text-neutral-400  p-3  transition transform hover:-translate-y-0.5 cursor-pointer '>
        <p className='flex flex-row gap-2'>
          <UsersIcon className='h-6' />
          <p className='hidden group-hover:block'>{names[6]}</p>
        </p>
      </div>
    </div>
  );
};
export default Sidebar;
