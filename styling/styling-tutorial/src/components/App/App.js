import Alert from '../Alert/Alert';
import CartSuccess from '../CartSuccess/CartSuccess';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    padding: 20,
  }
});

function App() {
  // const wrapper = {
  //   padding: 20
  // };

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Alert title="Items Not Added" type="error">
        <div>Your items are out of stock.</div>
      </Alert>
      <CartSuccess />
    </div>
  );
}

export default App;
