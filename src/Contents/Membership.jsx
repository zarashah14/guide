import React from 'react'
import Leave from "../assets/leave.png"
import Tooth from "../assets/tooth.png"
import Emoji from "../assets/Emoji.png"
import Container from '../Container/Container'
function Membership() {
  
  return (
    <Container>
   <>
     <div className='pt-40'>
        <h1 className='items-center justify-center text-2xl font-bold flex flex-row gap-2'>GuideMia <span className='text-[#3B66B0] font-bold text-2xl'>Membership Tiers</span><span><img src={Emoji}/></span></h1>
        <p className='text-center'>In this case, a 13 year old has a hidden tooth in anterior area. The doctors from Fujian Provincial Dental Hospital used GuideMia<br></br> to perform treatment planning, designed the tooth extraction path and access opening, and printed the<br></br> surgical guide for the operation.</p>
     </div>
   
   
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  relative'>
          <div className='flex flex-col items-center py-8'>
            <img src={Leave} className='absolute pb-6'/>
            <img src={Tooth} className='absolute top-24'/>

              <div className='relative top-24'>
              <h1 className='font-bold text-xl gap-1 m-8'>Free<span className='text-[#3B66B0] font-bold text-xl'>Tier</span></h1>
            <ul className=' list-disc gap-4 m-8'>
                <li className='font-bold text-sm m-2'>Cardiovascular Services</li>
                <li className='font-bold text-sm m-2'>Weight Management</li>
                <li className='font-bold text-sm m-2'>Dental Services</li>
                <li className='font-bold text-sm m-2'>Women's Health</li>
            </ul>
            <button className='text-[#3B66B0] font-bold bg-white rounded-sm py-1 px-8  mb-16 ml-10'>SIGN UP</button>
             </div>
            
          </div>

          <div className='flex flex-col items-center py-8'>
            <img src={Leave} className='absolute pb-6'/>
            <img src={Tooth} className='absolute top-24'/>

            <div className='relative top-24 '>
              <h1 className='font-bold text-xl gap-1 m-8'>Implant <span className='text-[#3B66B0] font-bold text-xl'>Tier</span></h1>
            <ul className=' list-disc gap-4 m-8'>
                <li className='font-bold text-sm m-2'>Cardiovascular Services</li>
                <li className='font-bold text-sm m-2'>Weight Management</li>
                <li className='font-bold text-sm m-2'>Dental Services</li>
                <li className='font-bold text-sm m-2'>Women's Health</li>
            </ul>
            <button className='text-[#3B66B0] font-bold bg-white rounded-sm py-1 px-8 mb-16 ml-10'>SIGN UP</button>
             </div>
            
          </div>
          

          <div className='flex flex-col items-center py-8'>
            <img src={Leave} className='absolute pb-6'/>
            <img src={Tooth} className='absolute top-24'/>

            <div className='relative top-24'>
              <h1 className='font-bold text-xl gap-1 m-8'>Orthodontic <span className='text-[#3B66B0] font-bold text-xl'>Tier</span></h1>
            <ul className=' list-disc gap-4 m-8'>
                <li className='font-bold text-sm m-2'>Cardiovascular Services</li>
                <li className='font-bold text-sm m-2'>Weight Management</li>
                <li className='font-bold text-sm m-2'>Dental Services</li>
                <li className='font-bold text-sm m-2'>Women's Health</li>
            </ul>
            <button className='text-[#3B66B0] font-bold bg-white rounded-sm py-1 px-8  mb-16 ml-10'>SIGN UP</button>
             </div>
            
          </div>

          <div className='flex flex-col items-center py-8'>
            <img src={Leave} className='absolute pb-6'/>
            <img src={Tooth} className='absolute top-24'/>

            <div className='relative top-24'>
              <h1 className='font-bold text-xl gap-1 m-8'>Combination <span className='text-[#3B66B0] font-bold text-xl'>Tier</span></h1>
            <ul className=' list-disc gap-4 m-8'>
                <li className='font-bold text-sm m-2'>Cardiovascular Services</li>
                <li className='font-bold text-sm m-2'>Weight Management</li>
                <li className='font-bold text-sm m-2'>Dental Services</li>
                <li className='font-bold text-sm m-2'>Women's Health</li>
            </ul> 
            <button className='text-[#3B66B0] font-bold bg-white rounded-sm py-1 px-8  mb-16 ml-10'>SIGN UP</button>

             </div>
            
          </div>

    </div>
   
   
   </>
   </Container>
  )
}

export default Membership
