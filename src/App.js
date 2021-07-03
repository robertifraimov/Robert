

import WatchBrands from './WatchBrands/WatchBrands';
import Header from './Header/Header';
import Home from './Home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

          <Switch>
            <Route path="/WatchBrands">
              <WatchBrands/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
          
        
      </div>
    </Router>
  );
}

export default App;
