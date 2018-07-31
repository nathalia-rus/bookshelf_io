import React, { Component } from 'react';
import RightNavBar from './RightNavBar.jsx';
import LeftNavBar from './LeftNavBar';
import Welcome from './Welcome.jsx'
import './MainPage.css';
import './RightNavBar.css';
import './LeftNavBar.css';
import './Welcome.css';


export default class NavBars extends Component {

    render() {

        return ( 
      <div>
{/* NevBar at the Right */}
<RightNavBar/>

{/* NevBar at the Left */}
<LeftNavBar/>


</div>
    );
  }
}
