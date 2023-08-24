import { Link, NavLink, Route, Routes, useLocation, useRoutes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BookList from './pages/BookList';
import Book from './pages/Book';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';
import BookLayout from './pages/BookLayout';
import BookRoutes from './pages/BookRoutes';

function App() {
  const location = useLocation();
  {console.log(location)}
  // another way of creating routes, but the jsx way is better and preferred
  let element = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/books/*',
      element: <><BookRoutes/><h2>from useRoutes() element</h2></>
    },
  ])
  return (
    <>
    <Routes location='/books'> // location makes it show up on ALL pages, not just /books, such as Home, etc.
      <Route path='/books'  element={<h1>Extra content for (different sidebars) on different pages</h1>} />
    </Routes>
    <nav>
      <ul>
        <li><Link to='/' replace state='Try entering an invalid URL' >Nav Home</Link></li> 
        // replace the current value in history with this url, essentially deleting the current value, affects the back button
        <li><NavLink end // has the isActive property
          style={({isActive}) => isActive ? {color: 'red'} : {}}
         to='/books'>{({isActive}) => isActive ? 'Nav Active Books' : 'Nav Books'}</NavLink></li>
      </ul>
    </nav>
    <p>location.state: {location.state}</p>
    <p>There are two ways to route: </p>
    <p>1. Using useRoutes and inject the variable like 'element' below</p>
    {element} (from useRoutes())
    <p>2. Use the Routes component like below:</p>
    <Routes> // NOTE: we can also use the useRoutes() hook
      <Route path='/' element={<Home/>}/>
      <Route path='/books/*' element={<BookRoutes/>} /> // put the actual Route inside another simplified compared to what we have below
      {/* <Route path='/books' element={<BookLayout/>}> // when user access {URL}/books, it will be routed here
        // Nesting Route objects will make it act like a nav bar, showup for all /books access
        // don't forget Outlet object at the end of the links to display the page content
        <Route path='/books' element={<BookList/>}/>
        <Route path='/books/:id' element={<Book/>}/>       // {URL}/4
        <Route path='/books/new' element={<NewBook/>}/>
      </Route>
      {/* <Route path='/books' element={<BookList/>}/>
      <Route path='/books/:id' element={<Book/>}/>
      <Route path='/books/new' element={<NewBook/>}/> */}
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
