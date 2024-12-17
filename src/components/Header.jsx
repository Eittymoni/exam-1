import React from 'react'
import Container from './Container'
import logoImg from "../assets/Logo.png"
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <>
    <Container className=" py-6">
       <div className="flex justify-center items-center">
       <div className="w-1/4">
       <img src={logoImg} alt="" />
       </div>
        <div className="w-1/2">
        <ul className='flex justify-center'>
          <li className='font-sans text-base px-6 hover:text-[#FF7628]'>Home <IoIosArrowDown className=' inline-block'/></li>
          <li className='font-sans text-base px-6 hover:text-[#FF7628]'>About <IoIosArrowDown className=' inline-block'/></li>
          <li className='font-sans text-base px-6 hover:text-[#FF7628]'>Service <IoIosArrowDown className=' inline-block'/></li>
          <li className='font-sans text-base px-6 hover:text-[#FF7628]'>Portfolio <IoIosArrowDown className=' inline-block'/></li>
          <li className='font-sans text-base px-6 hover:text-[#FF7628]'>Price <IoIosArrowDown className=' inline-block'/></li>
          <li className='font-sans text-base px-6 hover:text-[#FF7628]'>Blog<IoIosArrowDown className=' inline-block'/></li>
         
          
        </ul>
        </div>
        <div className="w-1/5 text-center">
        <button className="px-6 py-3 font-sans text-base bg-[#FF7628] rounded-full border-0">Contact Us </button>
  
        </div>
       </div>
    </Container>
    </>
  )
}

export default Header