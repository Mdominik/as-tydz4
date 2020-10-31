import React from 'react';
import './App.css';
import FetchCars from "./components/FetchCars";
import CarsForm from "./components/CarsForm";
import Menu from "./components/Menu";
import Car from "./components/Car";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from "./components/Footer";

class App extends React.Component {

  render() {
    return(
        <Router>
          <div>
            <Menu />
              <div className="container">
                <Switch>
                    <Route path="/cars" component = {FetchCars}></Route>
                    <Route path="/add-car" component = {CarsForm}></Route>
                </Switch>  
              </div>
            </div>
        </Router>
  )
  }
}

export default App;
