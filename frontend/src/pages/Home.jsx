import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FcViewDetails } from "react-icons/fc";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';
import AddBook from '../components/AddBook';



const Home = () => {
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
      try {
        axios.get('http://localhost:3000/books')
        .then(res => setBooks((res.data.Books)));
        
      } catch (error) {
        console.error('Error fetching books:', error.message);
      
    };

  }, [books]); 

  return (
    <div>
      <div className='flex justify-between px-4 '>
        <span className='font-bold text-2xl'>Books List : </span>
        <AddBook></AddBook>
      </div>
      <table className="table-auto w-full translate-y-5">
        <thead>
          <tr>
            <th className='border border-gray-400 px-4 py-2'>Number</th>
            <th className='border border-gray-400 px-4 py-2'>Book Title</th>
            <th className='border border-gray-400 px-4 py-2'>Author</th>
            <th className='border border-gray-400 px-4 py-2'>Publish Year</th>
            <th className='border border-gray-400 px-4 py-2'>Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book,index) => (
            <tr key={index} className= {index % 2 ==0 ? 'bg-gray-200' : '' }>
              <td className='border border-gray-400 px-4 py-2 text-center'>{index}</td>
              <td className='border border-gray-400 px-4 py-2 text-center'>{book.title}</td>
              <td className='border border-gray-400 px-4 py-2 text-center'>{book.author}</td>
              <td className='border border-gray-400 px-4 py-2 text-center'>{book.publishYear}</td>
              <td className='border border-gray-400 px-4 py-2 text-center'>
                <div className='flex justify-center gap-x-4'>
                  <Link to={`/books/details/${book._id}`}>
                  <FcViewDetails/>
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                  <CiEdit />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                  <MdDeleteOutline />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default Home;
