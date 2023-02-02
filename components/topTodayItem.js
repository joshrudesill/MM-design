import {
  RocketLaunchIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
const TopTodayItem = () => {
  const [symbol, setSymbol] = useState("");
  const [pos, setPos] = useState("");
  const [growth, setGrowth] = useState("");
  const [dir, setDir] = useState([false, true]);
  useEffect(() => {
    const alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let preSymbol = "";
    preSymbol += alphabet[Math.floor(Math.random() * 26)];
    preSymbol += alphabet[Math.floor(Math.random() * 26)];
    preSymbol += alphabet[Math.floor(Math.random() * 26)];

    let prePos = Math.floor(Math.random() * 100);
    let preGrowth = Math.floor(Math.random() * 100);
    let preDir = [
      Math.random() > 0.5 ? true : false,
      Math.random() > 0.5 ? true : false,
    ];
    setSymbol(preSymbol);
    setPos(prePos);
    setGrowth(preGrowth);
    setDir(preDir);
  }, []);
  return (
    <div className="flex flex-row justify-between px-3 py-1 hover:bg-slate-600">
      <p className="text-neutral-200/70 font-bold p-1">{symbol}</p>
      <p
        className={`${
          dir[0] ? "text-green-300/70 p-1" : "text-red-300/70 p-1"
        }`}
      >{`${dir[0] ? "+" : "-"}${growth}%`}</p>
      <div className="flex flex-row">
        <p
          className={`${
            dir[1] ? "text-green-300/70 p-1" : "text-red-300/70 p-1"
          }`}
        >
          {pos}
        </p>
        {dir[1] ? (
          <ArrowUpIcon className="h-4 my-auto text-white" />
        ) : (
          <ArrowDownIcon className="h-4 my-auto text-white" />
        )}
      </div>
      <div className=" border p-1 rounded-md border-neutral-400/50  hover:bg-green-300/60 hover:text-black text-neutral-400/50 transition ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300">
        View
      </div>
    </div>
  );
};
export default TopTodayItem;
