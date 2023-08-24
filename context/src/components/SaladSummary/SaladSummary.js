import React, {useContext} from 'react';
import { createUseStyles } from 'react-jss';

import { SaladContext } from '../SaladMaker/SaladMaker';

const useStyles = createUseStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: 150,
    '& li': {
      width: 200
    }
  },
  wrapper: {
    borderTop: 'black solid 1px',
    display: 'flex',
    padding: 25,
  }
});


export default function SaladSummary() {
  const classes = useStyles();
  const { salad, setSalad } = useContext(SaladContext);

  function remove(e) {
    const id = e.target.id;
    // console.log(id);
    setSalad({
      type: 'remove',
      id: id
    });
    console.log(salad);
  }
  
  return(
    <div className={classes.wrapper}>
      <h2>Your Salad</h2>
      <ul className={classes.list}>
        {salad.map(({ name, id }) => (<li key={id} onClick={remove} id={id}>{name} - {id}</li>))}

        {/* <li>Apple</li>
        <li>Avocado</li>
        <li>Carrots</li> */}
      </ul>
    </div>
  )
}