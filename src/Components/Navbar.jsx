import React from 'react'
import Phone from '../assets/Phone'
import Facebook from "../assets/Facebook.png"
import Twitter from "../assets/Twitter_black.png"
import Insta from "../assets/Instagram.png"
import Linkedin from "../assets/LinkedIN_black.png"
import Gm from  "../assets/GM.png"
function Navbar() {
  return (
       
    <>
      <div className='bg-[#3B66B0] p-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full'>
          <div className='flex flex-row gap-1 items-center'>
          <Phone/> <h1 className='text-white'>+1‪(657) 529-8298‬</h1> 
          </div>

          <div className='flex flex-row gap-1 items-center'>
           <h1 className='text-white'>info@guidemia.com</h1> 
          </div>


          <div className='flex flex-row gap-4 items-end justify-end '>
           <img src={Facebook}/>
           <img src={Twitter}/>
           <img src={Insta}/>
           <img src={Linkedin }/>
          </div>
      </div>
       {/* Second Navbar   */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 px-4 py-6'>

         <div>
            <img src={Gm}/>
         </div>

         <div className='p-4'>
            <ul className='flex flex-row items-center justify-between space-x-8'>
                <li className='text-[#3B66B0] font-bold'>HOME</li>
                <li className='font-bold '>ABOUT</li>
                <li className='font-bold '>SERVICES</li>
                <li className='font-bold '>SOFTWARE</li>
                <li className='font-bold '>MEMBERSHIP</li>
                <li className='font-bold '>FREELANCER</li>
            </ul>
         </div>

         <div className='flex flex-row items-end justify-end p-4 gap-2'>
            <button className='bg-[#3B66B0] py-2 px-4 rounded-tl-[2px] text-white'>LOGIN</button>

            <button className='bg-[#3B66B0] py-2 px-4 rounded-tl-[2px] text-white'>SIGN UP</button>
         </div>

      </div>
    
    </>
  )
}

export default Navbar
