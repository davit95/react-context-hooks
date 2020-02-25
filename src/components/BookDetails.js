import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
 
// without reducer
const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext)
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="title">{ book.title }</div>
      <div className="author">{ book.author }</div>
    </li>
  );
}

// use reducer hook example
// const BookDetails = ({ book }) => {
//   const { dispatch } = useContext(BookContext)
//   return (
//     <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
//       <div className="title">{ book.title }</div>
//       <div className="author">{ book.author }</div>
//     </li>
//   );
// }
 
export default BookDetails;