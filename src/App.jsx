import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return (
    <div className="flex flex-col w-full h-screen background items-center overflow-auto">
      <h1 className='text-4xl font-bold bg-white rounded-lg text-center w-11/12 mt-[40px] py-2'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10'>
        <Random />
        <Tag />
      </div>
    </div>
  );
}
