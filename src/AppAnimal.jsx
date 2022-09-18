import React from "react";
import NavBar from "./NavBar";
import logo from '../src/assets/logob.png';
import {useState} from "react";
import Habitat from "./assets/habitat.png";
import Diet from "./assets/diet.svg";
import Location from "./assets/location.svg";
import "./AppAnimals.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export const AppAnimals = () => {
    const [animal, setAnimal] = useState([]);

    const getAnimal = async () => {

        const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
        const data = await response.json();
        setAnimal(data);
    };

      return (

        <div className="PrincipalAnimals">
          <header className="NavBar">

            <Link to = '/'><img src={logo} className="App-logo" alt="logo" /></Link>

            <div>
                <NavBar/>
            </div>

          </header>

          <main>

            <div className="InfoGroup">
              <div className="BorderImg">
                <img src={animal.image_link} id="AnimalImg" />
              </div>
              
              <div className="Infos">
                <h1>
                  {animal.name}
                </h1>
                <h2 id="LatinName">
                  {animal.latin_name}
                </h2>


                <span className="DataInfoB">
                  <img src={Habitat} className="Icon"/>
                  <strong className="TextB">HABITAT:</strong>
                  <p>{animal.habitat}</p>
                </span>
                

                <span className="DataInfoB">
                  <img src={Diet} className="Icon"/>
                  <strong className="TextB">DIET:</strong>
                  <p>{animal.diet}</p>
                </span>
                

                <span className="DataInfoB">
                  <img src={Location} className="Icon"/>
                  <strong className="TextB">LOCATION:</strong>
                  <p>{animal.geo_range}</p>
                </span>
                
                <button onClick={getAnimal} className="ButtonRandom">
                  RANDOMIZE
                </button>
              </div>

            </div>

          </main>

          <Footer/>

        </div>

);
};