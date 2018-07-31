import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Fantastic.css';
import './MainPage.css';
import './NavBarsGenres.css';



export default class Fantastic extends Component {

    render(){
        return (

            <div className = "parent_Genres">

<Link to = "/"> <img src ="../assets/menu_icon.svg" className = "menuicon_genres"/></Link>
<img src ="../assets/line_menu_rightUp.png" className = "navRightUp_genres"/>
<img src ="../assets/diskicon.png" className = "diskicon_genres" />
<img src ="../assets/line_menu_rightDown.png" className = "navRightDown_genres"/>
<img src ="../assets/arrow_icon.png" className = "arrow_icon_up_genres" />
<img src ="../assets/arrow_icon.png" className = "arrow_icon_down_genres" />
<div className ="name_text_page_of_genre"> NATHALIA RUS </div>


 <img src = '../assets/line_page.png' className = "line_nav_page" /> 
 <img src = '../assets/ink.png' className = "ink" /> 


                </div>
        )
    }
}