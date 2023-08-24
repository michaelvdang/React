import React, {useState, useReducer, useEffect} from 'react';
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
function getTotal(cart) {
  const total = (cart.reduce((totalCost, item) => totalCost + item.price, 0));
  return total.toLocaleString(undefined, currencyOptions)
}
function getTotal2(total) {
  return total.toLocaleString(undefined, currencyOptions)
}

function cartReducer(state, action) {
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
  const [cart, setCart] = useReducer(cartReducer, []);
  // // the commented out section below works but requires 3 dependencie vs 1 useReducer
  // // useEffect is needed if we don't send cart as an argument to getTotal
  // const [total, setTotal] = useState(0);
  // useEffect(() => {
  //   let mounted = true;
  //   if (mounted) {
  //     const updatedTotal = (cart.reduce((totalCost, item) => totalCost + item.price, 0));
  //     setTotal(updatedTotal);
  //   }
  //   return () => {
  //     mounted = false;
  //   }
  // }, [cart])
  
  // const calculateTotal = () => {
  //   const updatedTotal = (cart.reduce((totalCost, item) => totalCost + item.price, 0));
  //   setTotal(updatedTotal);
  // }
  
  const add = (product) => {
    setCart({type: 'add', product});
    // calculateTotal();
  }
  
  const remove = (product) => {
    setCart({type: 'remove', product});
    // calculateTotal();
  }

  return(
    <div className="wrapper">
      <div>
        Shopping Cart: {cart.length} total items.
      </div>
      <i>If we store the total in state, we need useEffect to update it when the cart changes
        because getTotal2(total) doesn't get run in time for the rendering.
      If we have getTotal take the entire cart, it will update when the cart changes anyway, 
      reducing the need for useEffect (and also useState). </i>
      <div>Total: {getTotal(cart)}</div>
      {/* <div>Total: {getTotal2(total)}</div> */}

      {products.map(product => (
        <div key={product.name}>
          <div className="product">
            <span role="img" aria-label={product.name}>{product.emoji}</span>
          </div>
          <button onClick={() => add(product)}>Add</button> 
          <button onClick={() => remove(product)}>Remove</button>
        </div>
      ))}
    </div>
  )
}