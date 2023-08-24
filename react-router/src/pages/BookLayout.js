import { Link, Outlet, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const BookLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({n:3}); // setting initial book number to 3
  const number = searchParams.get('n');
  // const [number, setNumber] = useState();

  return (
    <>
      <Link to='/books/1'>Book1</Link>
      <br/>
      <Link to='/books/2'>Book2</Link>
      <br/>
      <Link to={`/books/${number}`}>Book{number} (dynamic value based on the input field)</Link>
      <br/>
      <Link to='/books/new'>New Book</Link>
      <Outlet context={{hello:'world'}}/>
      <input 
        type='number' 
        value={number} 
        onChange={e => setSearchParams({n:e.target.value})} />
      <p>{number}</p>
    </>
  )
}

export default BookLayout