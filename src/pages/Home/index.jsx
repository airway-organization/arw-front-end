import React from 'react'
import {qa} from "../../contants/en//Home_QA/index"
import Card from '../../components/card'
const Home = () => {
    return (
        <>
          <h1 className='bg-[#8A8A8A] w-52 text-center rounded-md text-2xl p-3 m-auto mt-10 font-bold text-white' >Previous Q/A</h1>
        <div className='flex flex-wrap w-[80%] mb-10 justify-center items-center m-auto gap-10 mt-10'>
    
          {/* <h1 className='text-3xl text-center'>Hello world</h1> */}
          {qa && qa.map((value, index) => (
            <Card key={index} ques={value.ques} perc={value.perc} />
          ))}
         
          </div>
        </>
      )
}

export default Home