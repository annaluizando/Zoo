import React from "react";
import NavBar from "./NavBar";
import logo from '../src/assets/logob.png';
import {useState} from "react";
import "./AppGallery.css";
import { useEffect } from "react";
import AnimalCard from "./AnimalCard";
import "./Card.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export const AppGallery = () => {
    const [animal, setAnimal] = useState([]);

    useEffect(() => {

        getAnimal();

    },[])

    const getAnimal = async () => {

    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/6", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
    const data = await response.json();
    setAnimal(data);

};
    return ( 

        <div className='PrincipalGallery'>

            <header className="NavBar">

            <Link to = '/'><img src={logo} className="App-logo" alt="logo" /></Link>

                <div>
                    <NavBar/>
                </div>
            </header>

            <main className="General">

                {animal.map((items, index) => (
                        <div key={index}>
                            <AnimalCard animal={items} /> 
                        </div>
                ))}

            </main>
            
            <Footer/>
        </div>

     );
}