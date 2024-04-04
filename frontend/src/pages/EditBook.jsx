import React,{ useState,useEffect } from 'react'
import BookFormEdit from '../components/BookFormEdit'
import BackButton from '../components/BackButton'
const EditBook = () => {

  return (
    <>
    <BackButton></BackButton>
    <BookFormEdit></BookFormEdit>
    </>
  )
}

export default EditBook