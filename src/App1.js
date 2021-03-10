import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";
// components
import App from "./App.js";
import Form from "./Form.js"
import Simple_page from "./Simple_page"






class App1 extends Component { 
  render() {
    return (
      <div className="App">
       
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/formvalidation" component={Form} />
          <Route exact path="/simplepage" component={Simple_page} />
           
        </Switch>

       
        
      </div>
    );
  }
}
export default App1;