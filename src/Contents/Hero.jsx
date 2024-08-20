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





// import React from 'react';
// import Banner from "../assets/Banners-3 1.jpg";
// import Container from '../Container/Container';
// function Hero() {
//   return (
//     <Container>
//       <div className='relative w-full h-[572px] lg:h-[600px] flex items-center justify-center'>
//         <img src={Banner} className='w-full h-full object-cover absolute top-0 left-0' alt="Banner"/>

//         <div className='relative px-4 text-center lg:text-left'>
//           <h1 className='text-[#3B66B0] font-bold text-4xl md:text-5xl lg:text-6xl'>
//             Revolutionizing<br />
//             <span className='font-bold text-black'>Orthodontic</span>
//           </h1>
//           <h1 className='text-[#3B66B0] font-bold text-4xl md:text-5xl lg:text-6xl'>
//             and <span className='font-bold text-black'>Implant Design</span>
//           </h1>

//           <p className='font-bold text-lg md:text-xl p-2 max-w-xl mx-auto lg:mx-0'>
//             + Join our community of professionals enhancing dental care<br /> 
//             through innovative technology
//           </p>

//           <div className='flex flex-col md:flex-row gap-4 pb-4 pt-2 justify-center lg:justify-start'>
//             <button className='bg-[#3B66B0] text-white rounded-sm py-3 px-6 outline outline-[#3B66B0]'>
//               Explore Software
//             </button>
//             <button className='bg-white text-black rounded-sm py-3 px-6 outline outline-[#3B66B0]'>
//               Join Community
//             </button>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default Hero;

