import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom" 


function BookFormEdit() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [publishYear,setYear] = useState('');
  const handleEditBook = () =>{
    const data = {
      title,
      author,
      publishYear
    };
    axios.put(`http://localhost:3000/books/${id}`,data)
    .then(
      navigate('/'));
    }

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-96 bg-white p-8 shadow-md rounded border border-teal-200">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="title border rounded outline-none mb-4 p-2"
          onChange={e => setTitle(e.target.value)}
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          className="author border rounded outline-none mb-4 p-2"
          onChange={e => setAuthor(e.target.value)}
        />

        <label htmlFor="publishYear">Publish Year</label>
        <input
          type="text"
          name="publishYear"
          className="publishYear border rounded outline-none mb-4 p-2"
          onChange={e => setYear(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={handleEditBook}>Save</button>
      </div>
    </div>
  );
}

export default BookFormEdit;
