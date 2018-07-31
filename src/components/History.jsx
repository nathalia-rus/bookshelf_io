import NavBarsGenres from './NavBarsGenres';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBarsGenres.css';
import "./Fantastic.css";
import "./History.css";
import ListBooks from './ListBooks';
import './ListBooks.css';




export default class History extends Component {

    render() {
        return (

            <div>
                <img src = "../assets/historical_page.jpg" class = "page-cover historybackground" />
                <img src = "../assets/history_text.png" className = "text_genre_history" /> 
                <NavBarsGenres/>
                     <ListBooks/>
                </div>
        )
    }
}