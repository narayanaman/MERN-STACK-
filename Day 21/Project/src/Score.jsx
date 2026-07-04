import React, { useState } from 'react'

function Score(props) {
    // let src=0;
    const [score,setScore]=useState(0);
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br form-indigo-500 to-pink-500' >
        <div className='bg-white p-10 rounded-2xl shadow-lg shadow-green-500 text-center w-[400px]'>
            <h2 className="text-2xl font-bold text-gray-700 md-2">{props.team}</h2>
            {/* gayab karne ke liye hidden */}
    <p className=" text-gray-500 md-6">
        {/* State Example Using <span className="font-bold">useState()</span>  */}
        {props.location}
    </p>
    <h1 className=' text-7xl font-extrabold text-blue-600 mb-8'>
    {score}        
    </h1>

    <button className='bg-blue-400 px-8 py-3 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-[0_0_10px_rgba(0,0,0,1)] m-2' onClick={()=>{
        setScore(score+1);
    }}>Increament</button>

    <button className='bg-pink-400 px-8 py-3 text-white text-lg font-semibold rounded-xl hover:bg-pink-700 active:scale-95 transition-all duration-200 shadow-[0_0_10px_rgba(0,0,0,1)] m-2' onClick={()=>{
        setScore(score>0 ? score-1 :0);
        // condition ? true_wala_part : false_wala_part;
        // yaha per ye  ? => ternary operator hai  jaha ham score>0 hai to ham yani true hai to score-1 condition chalega but ager folase huaa to value 0 tak hi rahegi.

    }}>Decreament</button>

    <button className='bg-red-400 px-8 py-3 text-white text-lg font-semibold rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-200 shadow-[0_0_10px_rgba(0,0,0,1)] m-2' onClick={()=>{
        setScore(0);
    }}>Reset</button>

        </div>
    </div>
  )
}

export default Score