import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <div className='border-b border-neutral-600 w-full h-16 fixed flex justify-around p-3 bg-zinc-900'>
      <div className='flex grow '>
        <div className='w-[40vmax] mx-auto flex flex-row'>
          <input
            className='bg-neutral-600 w-full p-1 pl-2 rounded-l-md text-neutral-900 focus:outline-none '
            placeholder='Search symbols here'
          ></input>
          <div className=' bg-neutral-700 p-2 rounded-r-md'>
            <MagnifyingGlassIcon className='h-6 my-auto text-green-600' />
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-2'>
        <div className='text-white my-auto hover:underline cursor-pointer'>
          Account
        </div>
        <div className='text-white my-auto hover:underline cursor-pointer'>
          Help
        </div>
      </div>
    </div>
  );
};

export default Search;
