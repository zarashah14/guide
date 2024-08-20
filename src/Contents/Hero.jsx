import React from 'react'
import Banner from "../assets/Banners-3 1.jpg"
import Container from '../Container/Container'
function Hero() {
  return (
    <Container>
    <>
    <div className='relative w-full h-[572px] lg:h-[600px] gap-0 pb-12'>
       <img src={Banner} className='w-full pb-6 absolute'/>

       <div className='px-4 absolute right-10 top-10 '>
        <h1 className='text-[#3B66B0] font-bold text-6xl'>Revolutionizing<br></br>
            <span className='font-bold text-black text-6xl'> Orthodontic</span></h1>

            <h1 className='text-[#3B66B0] font-bold text-6xl'>and  
            <span className='font-bold text-black text-6xl'> Implant Design</span></h1>
        <p className='font-bold text-xl p-2'>+ Join our community of professionals enhancing dental care<br></br> 
             through innovative technology</p>

             <div className='flex flex-row gap-4 pb-4 pt-2'>
             <button className='bg-[#3B66B0] text-white rounded-sm py-4 px-4 outline outline-[#3B66B0]'>Explore Software</button>
             <button className='bg-white text-black rounded-sm py-4 px-4 outline outline-[#3B66B0]'>Join Community</button>
             </div>
       </div>

    </div>

     {/* {Sm pr show} */}
     {/* <div className='px-4 absolute right-10 top-10 lg:hidden'>
        <h1 className='text-[#3B66B0] font-bold text-6xl'>Revolutionizing<br></br>
            <span className='font-bold text-black text-6xl'> Orthodontic</span></h1>

            <h1 className='text-[#3B66B0] font-bold text-6xl'>and  
            <span className='font-bold text-black text-6xl'> Implant Design</span></h1>
        <p className='font-bold text-xl p-2'>+ Join our community of professionals enhancing dental care<br></br> 
             through innovative technology</p>

             <div className='flex flex-row gap-4 pb-4 pt-2'>
             <button className='bg-[#3B66B0] text-white rounded-sm py-4 px-4 outline outline-[#3B66B0]'>Explore Software</button>
             <button className='bg-white text-black rounded-sm py-4 px-4 outline outline-[#3B66B0]'>Join Community</button>
             </div>
       </div> */}
    </>
    </Container>
  )
}

export default Hero

