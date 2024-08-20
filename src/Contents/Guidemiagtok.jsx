import React from 'react'
import PicLap from "../assets/piclap.png"
import Emoji from "../assets/Emoji.png"
import Container from '../Container/Container'
function Guidemiagtok() {
  return (
    <Container>
   <div className='pt-40'>
     <div className='grid lg:grid-cols-2 px-6 place-items-center'>
         
         <div className='flex flex-col m-8 gap-2'>

          <h1 className='text-3xl font-bold flex flex-row gap-2'>GuideMia <span className='text-[#3B66B0] text-3xl font-bold'>gTok</span><span><img src={Emoji}/></span></h1>
            <p className=''>GuideMia gTok is a peer-to-peer communication software. It can send texts and files, <br></br>and make audio/video calls as well. You and your contact can see each other’s screen
            <br></br> through desktop sharing, and discuss design cases with audio and video calls. You can <br></br>also sharing your life moments with file sharing. With peer-to-peer technology and 
            <br></br>end-to-end encryption, gTok does not use any server, and your data is never visible to <br>
            </br>anyone other than your recipients, not even the government.
            It can be installed as a<br></br> standalone system, or as part of GuideMia implant or orthodontic software systems.</p>
            
            <div className='flex flex-row gap-4 pb-4 pt-2'>
             <button className='bg-[#3B66B0] text-white rounded-sm py-4 px-4 outline outline-[#3B66B0]'>Read More</button>
             <button className='bg-[#3B66B0] text-white rounded-sm py-4 px-4 outline outline-[#3B66B0]'>Watch Video</button>
             </div>
            
         </div>


         <div className=''>
                 <img src={PicLap}/>
         </div>


     </div>
   
   
   
   
   </div>
   </Container>
  )
}

export default Guidemiagtok
