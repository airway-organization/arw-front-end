import React from 'react'

const Card = ({ques,perc}) => {
  return (
    <>
 
    <div className='bg-white p-3 rounded-lg border-2 w-fit border-[#3F51B561] '>
        <p className='text-xl '><span >Q: </span>{ques}</p>
        <p className='ml-6 mt-3 border-2 bg-gray-100 rounded-md px-3 py-1 border-[#3F51B561] w-16 text-center text-md'>{perc}</p>

    </div>

   
    
    </>
  )
}

export default Card