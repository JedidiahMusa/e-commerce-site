import React from 'react'
import casual from "../assets/casual.png"
import formal from "../assets/formal.png"
import party from "../assets/party.png"
import gym from "../assets/gym.png"

function Browse() {
  return (
    <div className='W-full p-[1rem] md:p-[3rem] mx-[1rem] md:mx-[3rem] lg:mx-[5rem] rounded-4xl bg-gray-200 '>

      <div className='w-full flex my-[2rem] text-center px-[1rem] justify-center '>
        <h2 className='font-[Anton] font-bold text-4xl '> 
        BROWSE BY DRESS STYLE
      </h2>
      </div>


      {/* grid div */}
      <div className='flex flex-col md:grid gap-4 grid-cols-3 grid-rows-2 w-full '>

        {/* individual grids */}
        <div className='grid overflow-hidden grid-cols-3 h-[15rem] lg:h-[17rem] bg-white rounded-2xl col-span-1 '>
          <div className='p-[1rem] lg:p-[1.5rem] font-bold text-2xl'>Casual</div>
          <div className='w-full h-full col-span-2 flex items-center justify-center'>
            <img src={casual} alt="" className='w-full h-full object-cover ' />
          </div>
        </div>

        <div className='grid overflow-hidden grid-cols-3 h-[15rem] lg:h-[17rem] bg-white rounded-2xl col-span-2 '>
          <div className='p-[1rem] lg:p-[1.5rem] font-bold text-2xl'>Formal</div>
          <div className='w-full h-full col-span-2 flex items-center justify-center'>
            <img src={formal} alt="" className='w-full h-full object-cover ' />
          </div>
        </div>

        <div className='grid overflow-hidden grid-cols-3 h-[15rem] lg:h-[17rem] bg-white rounded-2xl col-span-2 '>
          <div className='p-[1rem] lg:p-[1.5rem] font-bold text-2xl'>Party</div>
          <div className='w-full h-full col-span-2 flex items-center justify-center'>
            <img src={party} alt="" className='w-full h-full object-cover ' />
          </div>
        </div>

        <div className='grid overflow-hidden grid-cols-3 h-[15rem] lg:h-[17rem] bg-white rounded-2xl col-span-1 '>
          <div className='p-[1rem] lg:p-[1.5rem] font-bold text-2xl'>Gym</div>
          <div className='w-full h-full col-span-2 flex items-center justify-center'>
            <img src={gym} alt="" className='w-full h-full object-cover ' />
          </div>
        </div>

        
      </div>
      
    </div>
  )
}

export default Browse
