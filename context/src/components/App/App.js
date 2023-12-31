import './App.css';
import Navigation from '../Navigation/Navigation';
import SaladMaker from '../SaladMaker/SaladMaker';
import SaladItem from '../SaladItem/SaladItem';
import SaladSummary from '../SaladSummary/SaladSummary';
import UserContext from '../User/User';

const user = {
  name: 'Michael',
  favorites: [
    'avocado',
    'carrot'
  ]
}

function App() {
  return (
    <UserContext.Provider value={user}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>

  );
}

export default App;
