import React from 'react';
import Alert from '../Alert/Alert';
import { createUseStyles } from 'react-jss';
// import './CartSuccess.css';

const useStyles = createUseStyles({
  wrapper: {
    borderTop: '1px solid #eee',
    display: 'flex',
    flexWrap: 'wrap',
    '& h2' : {
      width: '100%'
    },
    '& $item': {
      marginRight: 20
    }
  },
  item: {
    // marginRight: 20,
  },
});

export default function CartSuccess() {
  // const styles = {
  //   wrapper: {
  //     borderTop: '1px solid #eee',
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //   },
  //   item: {
  //     marginRight: 20,
  //   },
  //   header: {
  //     width: '100%'
  //   }
  // }

  const classes = useStyles();
  
  return(
    <Alert title="Added to Cart" type="success">
      <div className={classes.wrapper}>
          <h2>
            You have added 3 items:
          </h2>
          <div className={classes.item}>
            <div>Bananas</div>
            <div>Quantity: 2</div>
          </div>
          <div className={classes.item}>
            <div>Lettuce</div>
            <div>Quantity: 1</div>
          </div>
      </div>
    </Alert>
  )
}