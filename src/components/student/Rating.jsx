import React, { useEffect, useState } from 'react'

const Rating = ({initialRating , onRate}) => {
    const [rating,setRating]=useState(initialRating || 0);
    const handleRating=(value)=>{
setRating(value);
if(onRate) onRate(value)
    }

    useEffect(()=>{
        if(initialRating){
setRating(initialRating)
        }
    },[initialRating]);
  return (
    <div className='flex gap-1'>
  {Array.from({length:5},(_,index)=>{
const starValue=index+1;
return (
    <span key={index} className={`text-xl sm:text-2xl cursor-pointer tranistion-colors ${starValue<=rating? 'text-yellow-500' :'text-gray-400' }`}  onClick={()=>handleRating(starValue)}>
&#9733;
    </span>
)
  })}
    </div>
  )
}

export default Rating
