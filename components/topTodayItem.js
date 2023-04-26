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
    <div className='flex flex-row justify-between px-3 py-1 hover:bg-green-600/50'>
      <p
        className={`${
          pos % 4 === 0
            ? "text-lg text-neutral-200 p-1 border border-neutral-700 rounded-md"
            : pos % 2 === 0
            ? "text-lg text-neutral-200 p-1 border border-red-700 rounded-md"
            : "text-lg text-neutral-200 p-1 border border-green-700 rounded-md"
        }`}
      >
        {symbol}
      </p>

      <div className='flex flex-row my-auto'>
        <p
          className={`${
            dir[1] ? "text-green-300/70 p-1" : "text-red-300/70 p-1"
          }`}
        >
          {pos}
        </p>
        {dir[1] ? (
          <ArrowUpIcon className='h-4 my-auto text-white' />
        ) : (
          <ArrowDownIcon className='h-4 my-auto text-white' />
        )}
      </div>
      <p
        className={`${
          dir[0] ? "text-green-300/70 p-1" : "text-red-300/70 p-1"
        }`}
      >{`${dir[0] ? "+" : "-"}${growth}%`}</p>

      <p
        className={`${
          dir[0] ? "text-green-300/70 p-1" : "text-red-300/70 p-1"
        }`}
      >{`${dir[0] ? "+" : "-"}${growth}%`}</p>
    </div>
  );
};
export default TopTodayItem;
