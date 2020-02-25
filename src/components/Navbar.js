import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
 
// class Navbar extends PureComponent {
//   // static contextType = ThemeContext;
//   render() {
//     return ( 
//       <AuthContext.Consumer>{(authContext) => (
//         <ThemeContext.Consumer>{(themeContext) => {
//           const { isLightTheme, light, dark } = themeContext;
//           const theme = isLightTheme ? light : dark;
//           const { isAuthenticated, toggleAuth } = authContext;
//           return (
//             <nav style={{ background: theme.ui, color: theme.syntax }}>
//               <h1>Context App</h1>
//               <div onClick={toggleAuth}>
//                 { isAuthenticated ? 'Logged in' : 'Logged out' }
//               </div>
//               <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//               </ul>
//             </nav>
//           )
//         }}</ThemeContext.Consumer>
//       )}
//       </AuthContext.Consumer>
//     );
//   }
// }

// export default class Navbar extends PureComponent {
//   static contextType = BookContext
//   render() {
//     const { boooks } = this.context
//     return (
//       <div>
//         {books.map(book => console.log(book))}  
//       </div>
//     )
//   }
// }

const Navbar = () => {
  const { books } = useContext(BookContext)
  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </div>
  );
}
 
export default Navbar;