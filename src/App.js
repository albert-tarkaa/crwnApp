import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header';
import Homepage from './pages/homepage';
import ShopPage from './pages/shop';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
