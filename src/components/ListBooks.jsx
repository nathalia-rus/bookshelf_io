import React, {Component} from 'react';
import {link} from 'react-router-dom';
import './Fantastic.css';
import RightNavBar from './RightNavBar';
import './RightNavBar.css';
import './MainPage.css';
import './NavBarsGenres.css';
import NavBarsGenres from './NavBarsGenres.jsx';
import './ListBooks.css';
import './ContentBook.css';
import ContentBook from "./ContentBook.jsx";


export default class ListBooks extends Component {

    render() {

    return (

<div>
<ContentBook/>

<img src = '../assets/newBarGenreGold.png' className = "line_page" />


<div className = " arrow_container">

<img src = "../assets/big_arrow_up.svg" className = "big_arrow_1" />
<img src = "../assets/big_arrow_up.svg" className = "big_arrow_2" />
<img src = "../assets/big_arrow_up.svg" className = "big_arrow_3" />
</div>

<div className = "text_list_container">
{/* passer les props !!! */}
<div className = " book_1 title_list ">Le Horla</div>
<div className = "book_1 author_list color_list_fantastic">Guy de Maupassant</div> 
<div className = "book_1 date_list color_list_fantastic"> 1910 </div>
{/* pass props for author_list_$`genre` */}


<div className = "book_2 title_list">The Monk</div> 
<div className = "book_2 author_list color_list_fantastic">Matthew G. Lewis</div> 
<div className = "book_2 date_list color_list_fantastic"> 1796 </div>

<div className = "book_3 title_list">The History of the Kalif Vatek</div>
<div className = "book_3 author_list color_list_fantastic">William Beckford</div>
<div className = "book_3 date_list color_list_fantastic"> 1796 </div> 
</div> 


<div className = "booklist_container">
<img src = '../assets/book_rectangle.png' className = "book_rectangle " />
<img src = '../assets/book_rectangle.png' className = "book_rectangle "  />
<img src = '../assets/book_rectangle.png' className = "book_rectangle"  />
<img src = '../assets/book_rectangle.png' className = "book_rectangle"  />
</div>


 </div>

    )

}
}