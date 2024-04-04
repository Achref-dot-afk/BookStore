import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
const ShowBook = () => {
  const [book, setBook] = useState({});
  const {id} = useParams();
  useEffect(() => {
    async function fetchBook() {
        const response = await axios.get(`http://localhost:3000/books/${id}`);
        setBook(response.data.Book_Details);
      
    }

    fetchBook();
  }, [book]); 

  return (
    <>
    <BackButton></BackButton>
    <div className='font-extrabold my-12 mx-4'>Book Details</div>
    <div className='border rounded w-96 m-4'>
      <div className='title'><span className='font-bold my-4 p-2'>Book ID : </span>{book._id}</div>
      <div className='title'><span className='font-bold my-4 p-2'>Book Title : </span>{book.title}</div>
      <div className='title'><span className='font-bold my-4 p-2'>Book Author : </span>{book.author}</div>
      <div className='title'><span className='font-bold my-4 p-2'>Publish Year : </span>{book.publishYear}</div>
      <div className='title'><span className='font-bold my-4 p-2'>Date of Creation : </span>{book.createdAt}</div>
      <div className='title'><span className='font-bold my-4 p-2'>Book's latest Update : </span>{book.updatedAt}</div>
    </div>
    </>
  );
};

export default ShowBook;
