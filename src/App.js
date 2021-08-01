import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">

          <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>

        </div>

      </Router>
    )
  }
}

export default App;