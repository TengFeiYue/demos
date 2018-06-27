import React from 'react';
import {BrowserRouter as Router , Route,Switch,Redirect} from 'react-router-dom';
import Book from './book/index'
import My from './my/index'
import FooterBar from './footer/index'
import './footer/footer.css'
let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
    constructor(props){
       super(props)
    }

  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <Router>
            <div>
                 <Switch>
                     <Route path='/book/:page' component={Book} />
                    <Route path='/my/:page' component={My} />
                   <Redirect from="/" to="/book/1"/>
                 </Switch>
               <FooterBar />
            </div>
        </Router>

      </div>
    );
  }
}

export default AppComponent;
