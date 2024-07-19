import React from 'react'
import {  BsPersonFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import logo  from '../assets/logo.png'

const Footer = () => {
  return (
      <div className="bg-gray-900 text-[#494949] py-20 font-titleFont">
     <div className="max-w-screen-xl mx-auto grid grid-cols-4 ">
        <div className="flex flex-col gap-9 mx-10">
         <img className=" -mx-12 w-full h-70 " src={logo} alt="logolight" />
        </div>
            <div className="">
            <h2 className="text-2x1 font-semibold text-white mb-4">Locate Us</h2>
            <div className="text-base flex flex-col gap-2">
                <p>Mumbai,Maharashtra.</p>
                <p>PhoneNo: 9665308209</p>
                <p>E-mail: aniketbhoir373@gmail.com </p>
            </div>
            </div>
            <div  className="flex items-center gap-3">
            <div className="-mt-5">
                <h2 className="text-2x1 font-semibold text-white mb-4">Profile</h2>
                <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer "><span><BsPersonFill/></span>my account</p>
                <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer "><span><MdLocationOn/></span>help & support</p>
            </div>
            </div>
            <div className="flex flex-col justify-center">
                <input  className=" bg-transparent border px-4 py-2 text-sm" placeholder="e-mail" type="E-mail" />
                <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black rounded sm:py-2 sm:px-4">Subscribe</button>
            </div>
     </div>
    </div>
  )
}

export default Footer
