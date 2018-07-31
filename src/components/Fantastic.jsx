import React, {Component} from 'react';
import {link} from 'react-router-dom';
import './Fantastic.css';
import RightNavBar from './RightNavBar';
import './RightNavBar.css';
import './MainPage.css';
import './NavBarsGenres.css';
import NavBarsGenres from './NavBarsGenres.jsx';
import ListBooks from './ListBooks';
import './ListBooks.css';
import ContentBook from './ContentBook.jsx';
import './ContentBook.css';



export default class Fantastic extends Component {

    render(){
        return (
            <div className = 'parent_'>
                <img src = "../assets/fantastic_page.png" className = "page-cover" />
                
                     <NavBarsGenres/>
                 
                     <ListBooks/>
                 

                




    <img src = "../assets/fantastic_text.png" className = "genre_text_image" /> 



   


                </div>
        )
    }
}