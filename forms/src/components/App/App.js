import React, { useState, useReducer } from 'react';
import './App.css';

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      apple: '',
      count: 0,
      name: '',
      'gift-wrap': false,
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
}

// let key = 0;

function App() {
  // const [myObj, setMyObj] = useState({})
  const [formData, setFormData] = useReducer(formReducer, {count: 100, 'gift-wrap': true});
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      });
    }, 3000);
    // setMyObj({...myObj, [key]: formData});
    // key++;
    // console.log((formData));
    // setFormData({name: '', value: ''});
  }

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  }

  return (
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {submitting &&
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>: {value.toString()}</li>
            ))}
          </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset disabled={submitting}>
        <label>
          <p>Name</p>
          <input name="name" onChange={handleChange} value={formData.name || ''}/>
        </label>
        {/* <label>
          <p>Last name</p>
          <input name="lname" onChange={handleChange}/>
        </label> */}
        {/* <label>
          <p>Favorite food</p>
          <input name="favorite_food" onChange={handleChange}/>
        </label> */}
      </fieldset>
      <fieldset disabled={submitting}>
        <label>
          <p>Apples</p>
          <select name="apple" onChange={handleChange} value={formData.apple || ''}>
              <option value="">--Please choose an option--</option>
              <option value="fuji">Fuji</option>
              <option value="jonathan">Jonathan</option>
              <option value="honey-crisp">Honey Crisp</option>
          </select>
        </label>
        <label>
          <p>Count</p>
          <input type="number" name="count" onChange={handleChange} step="1" value={formData.count || ''}/>
        </label>
        <label>
          <p>Gift Wrap</p>
          <input disabled={formData.apple !== 'fuji'} type="checkbox" name="gift-wrap" onChange={handleChange} checked={formData['gift-wrap'] || false}/>
        </label>
      </fieldset>
      <button type="submit">Submit</button>
      </form>
      {/* <ul>
        {Object.entries(myObj).map(([key, val]) => (
          <li key={key}><strong>{val.name}</strong>: {val.favorite_food}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default App;