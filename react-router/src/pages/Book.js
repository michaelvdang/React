import { useOutlet, useOutletContext, useParams } from "react-router-dom";


const Book = () => {
  const {id} = useParams();
  const {hello} = useOutletContext();
  return (
    <>
      <h1>Book {id} Page</h1>
      <h2>Value passed using Outlet: {hello}</h2>
    </>
  )
}

export default Book;