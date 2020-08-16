import React from 'react';


import GryffindorImage from "./assets/gryffindor.png";
import AlbusDumbledore from "./assets/Albus-Dumbledore.jpg";
import HarryPotter from "./assets/Harry-Potter.jpg";
import MinervaMcGonagall from "./assets/Minerva-McGonagall.jpg";

import HufflepuffImage from "./assets/hufflepuff.png";
import HengistOfWoodcroft from "./assets/Hengist-Of-Woodcroft.jpg";
import NewtonScamander from "./assets/Newt-Scamander.png";
import ArtemisiaLufkin from "./assets/Artemisia-Lufkin.png";

import RavenclawImage from "./assets/ravenclaw.png";
import LunaLovegood from "./assets/Luna-Lovegood.jpg";
import GilderoyLockheart from "./assets/Gilderoy-Lockheart.png";
import IgnatiaWildsmith from "./assets/Ignatia-Wildsmith.png";


import SlytherinImage from "./assets/slytherin.png";
import Merlin from "./assets/Merlin.jpg";
import TomRiddle from "./assets/Tom-Riddle.jpg";
import DracoMalfoy from "./assets/Draco-Malfoy.png";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import Home from "./components/Home/Home";
import Result from "./components/Result/Result";
import SortingPage from "./components/SortingPage/SortingPage";

const allHousesInfo = [
  {
    no : 1,
    name : "Gryffindor",
    desc : "Gryffindor values bravery, daring, nerve, and chivalry. Its emblematic animal is the lion and its colours are scarlet and gold. Minerva McGonagall was the most recent Head of Gryffindor. Sir Nicholas de Mimsy-Porpington, also known as Nearly Headless Nick, was the House Ghost. The founder of the House was Godric Gryffindor. Gryffindor corresponds to the element of Fire. The common room was located in one of the highest towers at Hogwarts, the entrance was situated on the seventh floor in the east wing of the castle and is guarded by a portrait of The Fat Lady. She permits entrance if given the correct password, which is changed numerous times throughout the school year.",
    img : GryffindorImage,
    houseMembers : [
      {
        name : "Albus Dumbledore",
        img : AlbusDumbledore
      },
      {
        name : "Harry Potter",
        img :HarryPotter
      },
      {
        name : "Minerva McGonagall",
        img : MinervaMcGonagall
      }
    ]
  },
  {
    no : 2,
    name : "Hufflepuff",
    desc : "Hufflepuff values hard work, dedication, patience, loyalty, and fair play. Its emblematic animal is the badger, and Yellow and Black are its colours. Pomona Sprout was the Head of Hufflepuff during 1991-1998, Sprout left the post of Head of Hufflepuff and Herbology Professor sometime before 2017 and her successor for the position of Head of Hufflepuff is currently unknown. The Fat Friar is its ghost. The founder of the House was Helga Hufflepuff.",
    img : HufflepuffImage,
    houseMembers : [
      {
        name : " Hengist of Woodcroft",
        img : HengistOfWoodcroft
      },
      {
        name : "Newton Scamander",
        img :  NewtonScamander
      },
      {
        name : "Artemisia Lufkin",
        img : ArtemisiaLufkin
      }
    ]
  },
  {
    no : 3,
    name : "Ravenclaw",
    desc : "Ravenclaw values intelligence, knowledge, and wit. Its emblematic animal is the eagle, and its colours are blue and bronze. The Ravenclaw Head of House in the 1990s was Filius Flitwick. The ghost of Ravenclaw is the Grey Lady, who was the daughter of Rowena Ravenclaw, the House's founder. Ravenclaw corresponds to the element of air. The Ravenclaw common room and dormitories are located in a tower on the west side of the castle. Ravenclaw students must answer a riddle as opposed to giving a password to enter their dormitories. This riddle, however, can be answered by non-Ravenclaws.",
    img : RavenclawImage,
    houseMembers : [
      {
        name : "Luna Lovegood",
        img :  LunaLovegood
      },
      {
        name : "Gilderoy Lockheart",
        img : GilderoyLockheart
      },
      {
        name : "Ignatia Wildsmith",
        img : IgnatiaWildsmith
      }
    ]
  },
  {
    no : 4,
    name : "Slytherin",
    desc : "Slytherin House values ambition, cunning and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal is the serpent, and its colours are emerald green and silver. Professor Horace Slughorn was the Head of Slytherin during the 1997–1998 school year, replacing Severus Snape, who as well, replaced Slughorn as Potions Professor when he retired for the first time several years prior. Slytherin had produced the most Death Eaters and Dark Wizards, including Tom Riddle, Bellatrix Black. But that does not mean that other Houses haven’t produced any; Peter Pettigrew was a Gryffindor, and Quirinus Quirrell was a Ravenclaw.",
    img : SlytherinImage,
    houseMembers : [
      {
        name : " Merlin",
        img :  Merlin
      },
      {
        name : "Tom Riddle",
        img : TomRiddle
      },
      {
        name : "Draco Malfoy",
        img : DracoMalfoy
      }
    ]
  }
]

const houseArray = [
  {
    no : 1,
    question : "What quality do you have?",
    name : "quality",
    options : [
      {
        text : "Bravery",
        id : "bravery",
        value : "Gryffindor"
      }, 
      {
        text : "Hard work",
        id : "hard-work",
        value : "Hufflepuff"
      },
      {
        text : "Intelligence",
        id : "intelligence",
        value : "Ravenclaw"
      },
      {
        text : "Ambition",
        id : "ambition",
        value : "Slytherin"
      }]
  },
  {
    no : 2,
    question : "What emblematic animal do you like?",
    name : "animal",
    options : [
      {
        text : "Lion",
        id : "lion",
        value : "Gryffindor"
      },
      {
        text : "Badger",
        id : "badger",
        value : "Hufflepuff"
      },
      {
        text : "Eagle",
        id : "eagle",
        value : "Ravenclaw"
      },
      {
        text : "Serpent",
        id : "serpent",
        value : "Slytherin"
      }]
  },
  {
    no : 3,
    question : "What color do you like?",
    name : "color",
    options : [
      {
        text : "Scarlet & gold",
        id : "scarlet-gold",
        value : "Gryffindor"
      }, 
      {
        text : "Yellow & Black",
        id : "yellow-black",
        value : "Hufflepuff"
      },
      {
        text : "Blue & Bronze",
        id : "blue-bronze",
        value : "Ravenclaw"
      },
      {
        text : "Green & Silver",
        id : "green-silver",
        value : "Slytherin"
      }]
  },
  {
    no : 4,
    question : "Whom do you admire most?",
    name : "admire",
    options : [
      {
        text : "Harry Potter",
        id : "harry-potter",
        value : "Gryffindor"
      }, 
      {
        text : "Newton Scamander",
        id : "newton-scamander",
        value : "Hufflepuff"
      },
      {
        text : "Luna Lovegood",
        id : "luna-lovegood",
        value : "Ravenclaw"
      },
      {
        text : "Merlin",
        id : "merlin",
        value : "Slytherin"
      }]
  },
  {
    no : 5,
    question : "What element do you like?",
    name : "element",
    options : [
      {
        text : "Fire",
        id : "fire",
        value : "Gryffindor"
      }, 
      {
        text : "Earth",
        id : "earth",
        value : "Hufflepuff"
      },
      {
        text : "Air",
        id : "air",
        value : "Ravenclaw"
      },
      {
        text : "Water",
        id : "water",
        value : "Slytherin"
      }]
  },
  {
    no : 6,
    question : "Imagine there is a bottle of sparkling material in the Great Hall,with a sign that says, EXPLOSIVE. DO NOT OPEN. What would you do?",
    name : "choice",
    options : [
      {
        text : "You just take and open it!",
        id : "open",
        value : "Gryffindor"
      }, 
      {
        text : "You would look at it and try to warn others not to go near it.",
        id : "warn",
        value : "Hufflepuff"
      },
      {
        text : "You look at it and never ever go near!",
        id : "away",
        value : "Ravenclaw"
      },
      {
        text : "You would look at it, and try to find a way to open it without hurting yourself. When you realise you can't, you would leave it alone.",
        id : "precaution",
        value : "Slytherin"
      }]
  },
];


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      houseNumber : 0,
    }
  }

  updateHouse = pos => {
    this.setState({
      houseNumber : pos,
    })
  }

  render() {
    return (
      <Router>
        <div className = "App">
          <Switch>
            <Route exact path="/sorting-hat">
              <Home />
            </Route>
            <Route exact path="/sorting-hat/sorting-page">
              <SortingPage 
                updateHouse = {this.updateHouse}
                houseArray = {houseArray} />
            </Route>
            <Route exact path="/sorting-hat/result">
              <Result houseInfo = {allHousesInfo[this.state.houseNumber]}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
