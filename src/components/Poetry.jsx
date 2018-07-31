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
import './Poetry.css';



export default class Poetry extends Component {

    render(){
        return (
            <div className = 'parent_'>
                <img src = "../assets/poetry_page.jpg" className = "page-cover" />
                
                     <NavBarsGenres/>
                     <ListBooks/>



    <img src = "../assets/poetry_text.png" className = "text_genre_poetry" />


   


                </div>
        )
    }
}