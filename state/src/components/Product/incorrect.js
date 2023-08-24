import React, {useState, useReducer} from 'react';
import './Product.css';

const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 2.5,
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }
];

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}
function getTotal(total) {
  return total.toLocaleString(undefined, currencyOptions)
}

function myReducer(state, action) {
  switch(action.type) {
    case 'add':
      return [...state, action.product];
    case 'remove':
      const productIndex = state.findIndex(item => item.name === action.product.name);
      if (productIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(productIndex, 1);
      return update;
    default:
      return state;
  }
}


export default function Product() {
  // const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, dispatch] = useReducer(myReducer, []);

  const calculateTotal = () => {
    return (cart.reduce((totalCost, item) => totalCost + item.price, 0));
    // setTotal(updatedTotal);
  }
  
  const add = (e) => {
    const index = products.findIndex(product => product.name === e.target.name);
    const product = products[index];
    dispatch({type: 'add', product});
    setTotal(calculateTotal());
    // calculateTotal();

    // setCart(cart + 1);
    // setTotal(total + 1.25);
  }
  
  const remove = (e) => {
    const index = products.findIndex(product => product.name === e.target.name);
    const product = products[index];
    dispatch({type: 'remove', product});
    setTotal(calculateTotal());

    // if (cart > 0) {
    //   setCart(cart - 1);
    //   setTotal(total - 1.25);
    // }
  }

  return(
    <div className="wrapper">
      <div>
        Shopping Cart: {cart.length} total items.
      </div>
      <div>Total: {getTotal(total)}</div>

      {products.map(product => (
        <div key={product.name}>
          <div className="product">
            <span role="img" aria-label={product.name}>{product.emoji}</span>
          </div>
          <button name={product.name} onClick={add}>Add</button> 
          <button name={product.name} onClick={remove}>Remove</button>
        </div>
      ))}
    </div>
  )
}