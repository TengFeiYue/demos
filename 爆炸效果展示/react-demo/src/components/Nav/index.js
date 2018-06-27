import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';
export default class Nav extends React.Component {
  render() {
    return (
        <div className="footerBar">
            <NavLink exact to='/book' className="nav" activeClassName='active'>通讯录</NavLink>
            <NavLink to='/my' className="nav" activeClassName='active'>我的</NavLink>
        </div>
    );
  }
}
