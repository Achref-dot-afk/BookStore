import React from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import BackButton from '../components/BackButton'; 
import axios from 'axios';
const DeleteBook = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const DeleteBook = () =>{
    axios.delete(`http://localhost:3000/books/${id}`)
    .then(() =>{
      
      navigate("/");
    });
    
  }
  const GetBack = () =>{
    navigate("/");
  }
  
  return (
    <>
    <BackButton></BackButton>
    <div className='flex items-center justify-center'>
    <div className='place-content-center p-5  border rounded w-96 p-8 shadow-md border-teal-200'>
      <p className='text-center m-7 font-bold'>Are You Sure ?</p>
      <div className='flex justify-center gap-x-6 m-5'>
        <button onClick={DeleteBook} className='bg-cyan-700 px-3 py-1 rounded-full text-white'>Delete</button>
        <button onClick={GetBack} className='bg-red-700 px-3 py-1 rounded-full text-white'>Cancel</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default DeleteBook