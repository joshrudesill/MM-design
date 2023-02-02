import {
  RocketLaunchIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import TopTodayItem from "./topTodayItem";
const TopToday = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex justify-between border-b border-neutral-700 ">
          <p
            style={{ textShadow: "#0c6900 1px 1px 5px" }}
            className="text-neutral-400 p-2 font-extralight text-md m-2 border rounded-md border-neutral-700 shadow-green-500/30 shadow-sm"
          >
            Top Today
          </p>
          <div
            style={{ textShadow: "#0c6900 1px 1px 5px" }}
            className="text-white p-1 flex justify-center text-lg m-2 border rounded-md border-neutral-700 shadow-green-500/30 shadow-sm"
          >
            <RocketLaunchIcon className="h-6 my-auto animate-pulse text-green-600/50" />
          </div>
        </div>
        <div className="flex flex-col overflow-x-scroll text-sm gap-1 mt-2">
          {[...Array(100).keys()].map((e) => (
            <TopTodayItem key={e} />
          ))}
        </div>
      </div>
    </>
  );
};
export default TopToday;
