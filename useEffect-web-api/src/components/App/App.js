import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import './App.css';
import { getList, deleteItem, postItem } from '../../services/list';

// const LazyLoadedComponent = lazy(() => import('./MyComponent'));

function App() {
  const [list, setList] = useState([]);
  const [itemInput, setItemInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false)
  const [alert, setAlert] = useState(false);
  const inputRef = useRef(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true; // NOTE: clean up function will run before the effect reruns
                            // we need to reset the mounted value to true
    // if (list.length && !alert) {
    //    return }
    // else {
    if (!alert && !isDeleting) {
      getList()
      .then(data => {
        if (mounted.current) {
          setList(data);
        }
      });
    }
    inputRef.current.focus();
    return () => mounted.current = false;
  }, [alert])

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        if (mounted.current) {
          setAlert(false);
        }
      }, 1000)
    }
  }, [alert])

  const removeItem = id => {
    setIsDeleting(true);
    setList((list) => {
      return list.map(item => {
        if (item.id === id) {
          return {...item, deleted: true}
        }
        return item;
      });
    });
    deleteItem(id).then(() => {
      // setList(() => list.filter(item => item.id !== id));
      setAlert(true);
      setIsDeleting(false);
    })
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    postItem(itemInput)
      .then(() => {
        if (mounted.current) {
          setItemInput('');
          setIsSubmitting(false);
          setAlert(true);
        }
      })
  }
  
  return(
    <div className="wrapper">
      <h1>My Grocery List</h1>
      <ul>
        {list.map(item => 
          <li key={item.id} value={item.id}>
            {item.name}
            <button 
              onClick={() => removeItem(item.id)} 
              // disabled={isSubmitting}// works
              disabled={item.deleted}
            >Remove
            </button>
          </li>
        )}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          <p>New Item</p>
          <input 
            type="text" 
            value={itemInput} 
            onChange={e => setItemInput(e.target.value)} 
            disabled={isSubmitting}
            ref={inputRef}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {alert && <h2> Submit Successful</h2>}
    </div>
  )
}

export default App;