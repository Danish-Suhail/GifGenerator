import Spinner from './Spinner';
import useGif from '../hooks/useGif';




const Random = () => {

    const {gif, loader, fetchData} = useGif();

    

    function clickHandler(){
        fetchData();
    }

  return (
    <div className='bg-green-400 w-1/2 flex flex-col items-center mt-[50px] rounded-lg border border-black'>
        <h1 className='text-2xl font-bold mt-2 uppercase underline'>A Random Gif</h1>
        {
            loader? <Spinner />: <img src = {gif} alt='Random Gifs'/>
        }
        
        <button 
        className='text-xl w-10/12 bg-yellow-300 py-1 rounded-lg mt-[15px] mb-[15px]'
        onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random