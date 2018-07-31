import React, { Component } from 'react';
import './MainPage.css';
import './RightNavBar.css';
import './NavBarsGenres.css';



 class RightNavBar extends Component {

    render() {

        return ( 
            <div>
{/* NevBar at the Right */}
<img src ="../assets/menu_icon.svg" className = "menuicon"/>
<img src ="../assets/line_menu_rightUp.png" className = "navRightUp"/>
<img src ="../assets/diskicon.png" className = "diskicon" />
<img src ="../assets/line_menu_rightDown.png" className = "navRightDown"/>
<img src ="../assets/arrow_icon.png" className = "arrow_icon_up" />
<img src ="../assets/arrow_icon.png" className = "arrow_icon_down" />
</div>
        )
    }
}


export default RightNavBar;