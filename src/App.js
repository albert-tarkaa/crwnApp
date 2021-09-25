import { Route } from 'react-router';
import './App.css';
import Homepage from './pages/homepage';
import ShopPage from './pages/shop';

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
