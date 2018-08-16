import React from 'react';
import {Link, NavLink} from 'react-router-dom'

const routesList =  [
  {routeText: 'Jobs' , destination: '/jobs' },
  {routeText: 'Companies' , destination: '/companies' },
  {routeText: 'Log In' , destination: '/login' },
  {routeText: 'Sign Up' , destination: '/register' }
]

export default class Nav extends React.Component {
  _navLinkJsx (rObj, i) {
    return <NavLink
      activeClassName="nav__link--selected"
      className="nav__link nav__link-register"
      to={rObj.destination}
      key={i+rObj.destination}
      >
      {rObj.routeText}
    </NavLink>
  }

  render(){
    return   <div className="navbar">
        <div>
          &lt;
          <span style={{fontSize: '1rem', fontFamily: 'sans-serif', display: 'inline-block', verticalAlign: 'middle', margin: '.25rem'}}>HOME</span> 
          &gt;
        </div>
        <div>
          {routesList.map(this._navLinkJsx)}
        </div>
      </div>
  }
}
