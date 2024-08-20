import React from 'react'
import Rec from '../assets/Rec'
import Rec1 from '../assets/Rec1'
import Rec2 from '../assets/Rec2'
function Footer() {
  return (
    <div className='w-full pt-40'>
    <div className='grid lg:grid-cols-3 bg-[#3B66B0] gap-4 lg:place-items-center px-4 relative py-10'>
         
         <div className='flex flex-col justify-between p-4'>
            <h1 className='text-white text-xl'>About us</h1>
            <p className='text-white text-sm'>Digital treatment planning can be extremely time consuming and technically challenging. With more than 20 years of experience from advisors in Italy, Germany, the US, China, Israel, and Canada and an excellent design team, however, we offer treatment planning for you.Digital treatment planning can be extremely time consuming and technically challenging. With more than 20 years of experience from advisors in Italy, </p>
         </div>

         <div className='p-4'>
            <h1 className='text-white'>Useful Links</h1>
            <ul className='text-white p-2 list-disc'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>FAQ</li>
            </ul>
         </div>

         <div className=''>
            <h1 className='text-white'>Contact Address</h1>
            <ul className='text-white p-2'>
              <div className='flex flex-row p-2 gap-2'> <Rec/> <li>+1‪(657) 529-8298‬, +17143912739</li></div>
              <div className='flex flex-row p-2 gap-2'> <Rec2/> <li>info@guidemia.com</li> </div>
              <div className='flex flex-row p-2 gap-2'> <Rec1/> <li>5030 Katella Ave, Ste 209, Los Alamitos, CA 90720, USA</li></div> 
            </ul>
         </div>
        
    </div>
    <div className='bg-[#D9D9D9] p-4 relative'>
            <h1 className='text-center'>© Copyright 2024 by Guidemia Technogies Development By Sid Techno</h1>
         </div>
    </div>
  )
}

export default Footer
