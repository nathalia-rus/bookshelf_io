import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RightNavBar from './RightNavBar';
import Welcome from './Welcome.jsx';
import WelcomeNavbar from './WelcomeNavbar.jsx';
import './MainPage.css';
import './RightNavBar.css';
import './LeftNavBar.css';
import './Welcome.css';
import History from './History.jsx';
import Poetry from './Poetry.jsx';




export default class MainPage extends Component {

    render() {

      return (

<div className = "parent">


  <div>
     <div>
    {/*  <img src="../assets/universe_copie.png" className = "image1"/>*/}
              <div> <img src="../assets/bookshelfiowelcome.png" className = "image2"/> </div>


      </div>
    <RightNavBar/>
    {/* welcome Homo unius libri   <div className ="welcome_text"> WELCOME</div> */}

       <div className ="name_text"> NATHALIA RUS </div>
   
    <Welcome/>
</div>
<div>

{/* <img src="../assets/universe_flipped.png" className = "image1B"/> */}
 {/*  <p className = "genres_page">UT CONCLAVE SINE LIBRIS...</p> */}

</div>



{/*<p className = "genres_page_3">  ...ITA CORPUS SINE ANIMA </p> 
         <img src="../assets/universe_copie.png" className = "image1"/>*/}
<div className = 'background'>


 <img src = "../assets/big_arrow_to_right.svg" className = "arrow_fantasy" />

 <img src="../assets/p1_network_1.svg"className= "network_11"/>
 <img src="../assets/p2_network_2.svg"className= "network_1"/> 

 <img src="../assets/p1_network_3.svg"className= "network_3"/>
 <img src="../assets/p2_network_2.svg"className= "network_4"/>

<img src = "../assets/aspire.png" className = "aspire" />
<img src = "../assets/dream.png" className = "dream" />
<img src = "../assets/feel.png" className = "feel" />
<img src = "../assets/dare.png" className = "dare" />
<img src = "../assets/explore.png" className = "explore" />
<img src = "../assets/evoke.png" className = "evoke" />
<img src = '../assets/wonder.png' className = 'wonder' />
<img src = '../assets/think.png' className = 'think' />
<img src = '../assets/imagine.png' className = 'imagine' />
<img src = '../assets/become..png' className = 'become' />
<img src = '../assets/question.png' className = 'question' />


{/* <img src = "../assets/think.png" className = "think" />
<img src = "../assets/become.png" className = "become" />
<img src = "../assets/evoke.png" className = "evoke" />

<img src = "../assets/revive.png" className = "revive" />
<img src = "../assets/question.png" className = "question" />*/}


</div>

<div className = "history" >
<Link to = "/history"> <img src = "../assets/history.png" className = "history_image"/> 
<div className = "title_history"> History</div>
<div className = "des_history"> Delve into Renaissance Florence, 1950s Brooklyn or the Tudors’ murderous plots </div> </Link>
</div>

<div className ="fantastic">
<Link to="/fantastic"> <img src = "../assets/fantastic_all.png" className = "fantastic_image" />
<div className = "title_fantastic">Fantastic </div>
<div className = "des_fantastic" >Explore alternate realities, get lost in imaginary sceneries </div></Link>
</div>

  {/*}   <img src="../assets/universe_copie.png" className = "image1"/> */}

            
{/* welcome Homo unius libri   
 <img src="../assets/p1_network_1.svg"className= "network_1B"/>
 <img src="../assets/p2_network_2.svg"className= "network_1B"/> 
 <img src="../assets/p1_network_1.svg"className= "network_2B"/>
 <img src="../assets/p1_network_3.svg"className= "network_3B"/>
     <img src="../assets/universe.png" className = "image1C" />

<div className ="welcome_text"> WELCOME</div> */}
 {/*
 POUR LA DROITE :

 <img src="../assets/p1_network_3.svg"className= "network_3C"/>
 <img src="../assets/p1_network_3.svg"className= "network_3D"/>  */}


 {/* welcome Homo unius libri   
  <img src="../assets/p2_network_2.svg"className= "network_4B"/>
 <img src="../assets/p1_network_3.svg"className= "network_3E"/>
 <img src="../assets/p1_network_3.svg"className= "network_3EE"/>


 <img src="../assets/p1_network_3.svg"className= "network_3BB"/>
 <img src="../assets/p1_network_3.svg"className= "network_3CC"/>
 <img src="../assets/p1_network_3.svg"className= "network_3DD"/>
<div className ="welcome_text"> WELCOME</div> */}

{/*

 <img src="../assets/p1_network_3.svg"className= "network_3C_2"/>
 <img src="../assets/p1_network_3.svg"className= "network_3D_2"/>
 <img src="../assets/p1_network_3.svg"className= "network_3C_2"/>
 <img src="../assets/p1_network_3.svg"className= "network_3D_2"/>

*/}




 <div className ="poetry">
<Link to = "/poetry" > <img src = "../assets/poetry.png" className = "poetry_image" /> </Link>
<div className = "title_poetry">Poetry </div>
<div className = "des_poetry" >Indulge in a 
concentrated imaginative awareness of experience 
through words arranged for their meanings, sound, and rhythm. </div>
</div>

 <div className ="fantasy">
<img src = "../assets/fantasy.png" className = "poetry_image" />
<div className = "title_fantasy">Fantasy </div>
<div className = "des_fantasy" >Get lost in mazes, 
discover new civilizations and 
forgotten realms </div>

</div>

 <div className ="travel">
<img src = "../assets/travel.png" className = "travel_image" />
<div className = "title_travel">Travel </div>
<div className = "des_travel" >Get lost in mazes, 
discover new civilizations and 
forgotten realms </div>
</div>        

 <div className ="mystery">
<img src = "../assets/mystery.png" className = "mystery_image" />
<div className = "title_mystery">Mystery </div>
<div className = "des_mystery" >Get lost in mazes, 
discover new civilizations and 
forgotten realms </div>
</div>     



 <div className ="sciencefiction">
<img src = "../assets/sciencefiction.png" className = "sciencefiction_image" />
<div className = "title_sciencefiction">Science Fiction </div>
<div className = "des_sciencefiction" >Get lost in mazes, 
discover new civilizations and 
forgotten realms </div>
</div>     


 <div className ="romance">
<img src = "../assets/romance.png" className = "romance_image" />
<div className = "title_romance">Romance </div>
<div className = "des_romance" >Get lost in mazes, 
discover new civilizations and 
forgotten realms </div>
</div>     



 <div className ="adventure">
<img src = "../assets/adventure.png" className = "adventure_image" />
<div className = "title_adventure">Adventure </div>
<div className = "des_adventure" >Get lost in mazes, 
discover new civilizations and 
forgotten realms </div>
</div>     

 <div className ="wisdom">
<img src = "../assets/wisdom.png" className = "wisdom_image" />
<div className = "title_wisdom">Wisdom </div>
<div className = "des_wisdom" >Get lost in mazes, 
discover new civilizations and 
forgotten realms </div>
</div>     

 <div className ="classics">
<img src = "../assets/classics.png" className = "classics_image" />
<div className = "title_classics">Classics </div>
<div className = "des_classics" >Get lost in mazes, 
discover new civilizations and 
forgotten realms </div>
</div>     

 <div className ="short_stories">
<img src = "../assets/short_stories.png" className = "short_stories_image" />
<div className = "title_short_stories">Short Stories </div>
<div className = "des_short_stories" >Get lost in mazes, 
discover new civilizations and 
forgotten realms </div>
</div>     



{/* ajouter un quart d'univers pour become? + with liens fb twitter and insta. */}

  <div>




</div>

</div>


    );
  }
}


