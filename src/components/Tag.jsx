import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';



const Tag = () => {

  

  const {gif, loader, fetchData} = useGif();

  const [tag, setTag] = useState('')

    function changeHandler(event){
      setTag(event.target.value);
    }
    console.log(tag);


    function clickHandler(){
        fetchData(tag);
    }

  return (
    <div className='bg-blue-400 w-1/2 flex flex-col items-center mt-[50px] rounded-lg border border-black mb-10'>
        <h1 className='text-2xl font-bold mt-2 uppercase underline'>Searched {tag} Gif</h1>
        {
            loader? <Spinner />: <img src = {gif} alt='Random Gifs'/>
        }
        

        <input 
          className='w-10/12 py-2 rounded-lg mt-[20px] mb-[10px] text-center'
          placeholder='Search GIF'
          onChange={changeHandler}
          value = {tag}
        />

        <button 
        className='text-xl w-10/12 bg-yellow-300 py-1 rounded-lg mt-[15px] mb-[10px]'
        onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag