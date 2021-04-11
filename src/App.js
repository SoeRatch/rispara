import './App.css';
import {Switch,Route} from "react-router-dom"
import indexRoutes from "./routes"
import React from 'react';

const App = ({location}) => (
  <React.Fragment>
<div>
    this is a header
  </div>
  <Switch>
      {
        indexRoutes.map((prop,key)=>{
            return <Route exact path = {prop.path} component = {prop.component} key ={key} />;
        })
      }
  </Switch>

  <div>
    this is a footer
  </div>

  </React.Fragment>

  
)

export default App;