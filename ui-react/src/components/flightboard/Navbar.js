import React, { Component } from 'react';

import Clock from './Clock';
import RoomFilter from './RoomFilter';

let fbConfig = require('../../config/flightboard.config.js');

class Navbar extends Component {

  handleFilter = (filterValue) => {
    this.props.filter(filterValue);
  }

  render () {
    return (
      <div id="title-bar-wrap">
        <div className="title-bar">
          <div className="title-bar-left">
            <ul className="horizontal menu fb__nav-menu">
              <li>
                <img src="img/logo.png" alt="Logo" />
              </li>
              <li>
                {fbConfig.navbar.title}
                <br />
                <ul id="roomlist-filter" className="dropdown menu fb__dropdown" data-dropdown-menu>
                  <RoomFilter filter={this.handleFilter}/>
                </ul>
              </li>
            </ul>
          </div>
          <div className="title-bar-right">
            <ul className="horizontal menu fb__nav-menu-right">
              <li id="the-clock">
                <Clock />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
