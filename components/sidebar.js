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
    <div
      className='flex flex-col group w-12 hover:w-56 border-r border-neutral-500/40 h-screen z-50 fixed left-0 transition-all'
      style={{ background: "rgb(38, 38, 38)" }}
    >
      <div className='text-green-400 py-4 px-2 text-2xl border-green-700/20 border-b font-mono tracking-wide block group-hover:bg-zinc-900'>
        <div className='flex gap-2'>
          <div className='text-green-400'>
            <CurrencyDollarIcon className='h-8 w-8' />
          </div>
          <p className='text-neutral-100/0 group-hover:text-neutral-100 transition delay-100 truncate'>
            MonkeeMath
          </p>
        </div>
      </div>
      <div className=' text-green-500 p-3 transition transform hover:-translate-y-0.5 cursor-pointer '>
        <div
          style={{ textShadow: "#0c6900 1px 1px 5px" }}
          className='flex gap-2'
        >
          <div className='text-green-400'>
            <HomeIcon className='h-6' />
          </div>
          <p className='text-neutral-100/0 group-hover:text-neutral-100 transition delay-100 truncate'>
            {names[0]}
          </p>
        </div>
      </div>
      <div className='text-neutral-400  p-3  transition transform hover:-translate-y-0.5 cursor-pointer '>
        <div className='flex gap-2'>
          <div className='text-white'>
            <ChatBubbleBottomCenterTextIcon className='h-6' />
          </div>
          <p className='text-neutral-100/0 group-hover:text-neutral-100 transition delay-100 truncate '>
            {names[1]}
          </p>
        </div>
      </div>
      <div className='text-neutral-400  p-3 transition transform hover:-translate-y-0.5 cursor-pointer  '>
        <div className='flex gap-2'>
          <div className='text-white'>
            <ArrowTrendingUpIcon className='h-6' />
          </div>
          <p className='text-neutral-100/0 group-hover:text-neutral-100 transition delay-100 truncate'>
            {names[2]}
          </p>
        </div>
      </div>
      <div className='text-neutral-400  p-3  transition transform hover:-translate-y-0.5 cursor-pointer '>
        <div className='flex gap-2'>
          <div className='text-white'>
            <LifebuoyIcon className='h-6' />
          </div>
          <p className='text-neutral-100/0 group-hover:text-neutral-100 transition delay-100 truncate'>
            {names[3]}
          </p>
        </div>
      </div>
      <div className='text-neutral-400  p-3  transition transform hover:-translate-y-0.5 cursor-pointer '>
        <div className='flex gap-2'>
          <div className='text-white'>
            <CalculatorIcon className='h-6' />
          </div>
          <p className='text-neutral-100/0 group-hover:text-neutral-100 transition delay-100 truncate'>
            {names[4]}
          </p>
        </div>
      </div>
      <div className='text-neutral-400  p-3  transition transform hover:-translate-y-0.5 cursor-pointer '>
        <div className='flex gap-2'>
          <div className='text-white'>
            <ScaleIcon className='h-6' />
          </div>
          <p className='text-neutral-100/0 group-hover:text-neutral-100 transition delay-100 truncate'>
            {names[5]}
          </p>
        </div>
      </div>
      <div className='text-neutral-400  p-3  transition transform hover:-translate-y-0.5 cursor-pointer '>
        <div className='flex flex-row gap-2'>
          <div className='text-white'>
            <UsersIcon className='h-6' />
          </div>
          <p className='text-neutral-100/0 group-hover:text-neutral-100 transition delay-100 truncate'>
            {names[6]}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
