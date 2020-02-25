import React, { createContext, useState, useReducer, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext()

// without use reducer 
const BookContextProvider = (props) => {
  const localData = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : []
  const [books, setBooks] = useState(localData);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  }

  const removeBook = (id) => {
    setBooks(books.filter( book => book.id !== id ))
  }

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books]);

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      { props.children }
    </BookContext.Provider>
  )
}

// with use reducer example
// const BookContextProvider = (props) => {

//   const [books, dispatch] = useReducer(bookReducer, []);
//   return (
//     <BookContext.Provider value={{ books, dispatch }}>
//       {props.children}
//     </BookContext.Provider>
//   );
// }

export default BookContextProvider
