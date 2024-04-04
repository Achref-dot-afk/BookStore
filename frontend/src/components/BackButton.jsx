import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";


function BackButton() {
  return (
    <div className="bg-blue-300 hover:bg-blue-700 text-white  m-4 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-12 text-lg ">
        <Link to={"/"}>
           <IoMdArrowBack/>
        </Link>
    </div>
  )
}

export default BackButton