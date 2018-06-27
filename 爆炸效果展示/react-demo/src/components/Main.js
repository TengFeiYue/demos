require('styles/App.css');
import React from 'react';
import Book from './Book'
import My from './My'
import Nav from './Nav'
import {BrowserRouter as Router , Route, Switch,Redirect} from 'react-router-dom';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
         <Router>
            <div>
              <Switch>
                <Route path="/book" component={Book}></Route>
                <Route path="/my" component={My}></Route>
                <Redirect from="/" to="/book" />
              </Switch>
                <Nav />
            </div>
         </Router>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
