import React from 'react'
import { Link } from 'react-router-dom';
import { CiSquarePlus } from "react-icons/ci";
function AddBook() {
  return (
    <div>
        <Link to={"/books/create"}>
            <CiSquarePlus className='font-bold text-4xl'></CiSquarePlus>
        </Link>
    </div>
  )
}

export default AddBook