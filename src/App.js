import './App.css';
import Nav from './nav'
import Game from './components/game'
import Car from './components/car'
import Registration from './components/registration';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App"> 
      <Nav />     
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registration" component={Registration} />
          <Route path="/game" component={Game} />
          <Route path="/cars/:searchingParam?" component={Car} />
        </Switch>     
      </div>
    </Router>
  );
}

export default App;



const Home = () => (
  <div>
    Home Page
  </div>
);