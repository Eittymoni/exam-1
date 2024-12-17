import React from 'react'
import Container from './Container'
import topImg from "../assets/top.png"
import Img from "../assets/Image.png"
import man from "../assets/man.png"

const Banner = () => {
  return (
    <>
   <section className=' '>
   <div className="">
    <img src={man} alt="" />
    </div>
    <Container className="py-8">
        <div className="py-2 flex">
        <div className="w-1/2 ">
        <img src={topImg} alt="" />
        <h2 className=' font-sans font-extrabold text-6xl '>We Are Digital <br /> <span className=' text-[#FF7628]'> Marketing</span>  Agency</h2>
        <p className=' font-sans text-2xl pt-5'>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
        
        <div className="pt-4"> 
            <button className="px-6 py-3 font-sans text-base bg-[#FF7628] rounded-full">Get Free Quoto</button>
            </div>
        </div>

        <div className="w-1/2">
         <div className=" absolute top-[100px] right-[50px]"> <img src={Img} alt="" /></div>
         <div className=" absolute top-[350px] right-[350px]"> <img src={Img} alt="" /></div>
        </div>
        </div>

    </Container>
   </section>
    </>
  )
}

export default Banner