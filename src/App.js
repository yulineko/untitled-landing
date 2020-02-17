import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Landing from './Landing'
import About from './About'
import Contact from './Contact'
// import Menu from './Menu'
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        {/* <Menu/> */}
        <Switch>
          <Route exact path = "/" component = {Landing}/>
          <Route exact path = "/about" component = {About}/>
          <Route exact path = "/contact" component = {Contact}/>
        </Switch>
        <div className="credit">
          Photo: Nathan Anderson on <a href="https://unsplash.com/@nathananderson">Unsplash</a>.
        </div>
        <div className="copyright">
          ©2020 IYS All Rights Reserved
        </div>
      </div>
    );
  }
}

export default App;
