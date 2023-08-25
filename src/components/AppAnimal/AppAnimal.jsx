import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import logo from '../../assets/logob.png';
import Habitat from "../../assets/habitat.png";
import Diet from "../../assets/diet.svg";
import Location from "../../assets/location.svg";
import "./AppAnimals.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import ErrorPage from "../ErrorState";
import Loading from "../Loading";

export const AppAnimals = () => {
    const [animal, setAnimal] = useState([]);
    const [animalCharacteristics, setAnimalCharacteristics] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getAnimal = () => { // Define getAnimal function here
      fetch(`https://api.api-ninjas.com/v1/animals?name=${searchTerm}`, {
        method: 'GET',
        headers: { 'X-Api-Key': 'GFl4moXrmn5j5oLSWwwZsg==GmInODQMiBDxF9rT'},
        contentType: 'application/json',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0){
            setAnimalCharacteristics(data.characteristics);
            setAnimal(data[0]);
            console.log(data[0]);
            console.log(animal.characteristics.taxonomy)
          } else { 
            setAnimal({});
          }
        })
        .catch((err) => {
          setError(true);
        });
    };
  
    const handleSearchClick = (event) => {
      event.preventDefault(); // Prevent form submission
      if (searchTerm.trim() === "") {
        setError(true);
        setAnimal({});
        return;
      }
      // setLoading(true);
      setError(false);
      getAnimal();
    };
  
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleSearchClick();
      }
    };


    useEffect(() => {
      setLoading(true);
      getAnimal();

        setTimeout(() => {
          setLoading(false);
        }, 4000);
    }, [searchTerm]);




    

      return (

        <>
          {error ? (
            <ErrorPage/>
          ) : (
            <div className="generalContainer">
              <header className="NavBar">

                <Link to = '/'><img src={logo} className="App-logo" alt="logo" /></Link>

                <div>
                    <NavBar/>
                </div>

              </header>

              <div className="content">
                {/* search field */}
                <div className="searchBar">
                  <form onSubmit={handleSearchClick}>
                      <input
                          type="text"
                          placeholder="Search your animal"
                          onChange={(event) => setSearchTerm(event.target.value)}
                          value={searchTerm}
                          onKeyDown={handleKeyPress}
                          className="searchField"
                      />
                      <button type="submit" onClick={handleSearchClick} className="searchButton">Search</button>
                  </form>
                </div>

                <main>


                    {loading ? (
                      <Loading/>
                    ) : (
                      <div className="InfosContainer">

                        <div className="Infos">
                          <h1>
                            {animal.name || "No Animal Found"}
                          </h1>

                          <h2 id="LatinName">
                            {/* {animal.taxonomy.scientific_name || "No Latin Name"} */}
                          </h2>

                          <h3 id="Kingdom">
                            {/* {animal.taxonomy.kingdom || "No Kingdom"} */}
                          </h3>
                        </div>


                        <span className="DataInfoB">
                          <img src={Habitat} className="Icon" alt="HabitatIcon"/>
                          <strong className="TextB">HABITAT:</strong>
                          {/* <p>{animal.characteristics.habitat}</p> */}
                        </span>
                        

                        <span className="DataInfoB">
                          <img src={Diet} className="Icon" alt="DietIcon"/>
                          <strong className="TextB">DIET:</strong>
                          {/* <p>{animal.characteristics.diet}</p> */}
                        </span>
                        

                        <span className="DataInfoB">
                          <img src={Location} className="Icon" alt="LocationIcon"/>
                          <strong className="TextB">LOCATION:</strong>
                          <p>{animal.locations}</p>
                        </span>
                      </div>
                    )}


                </main>
              </div>


              <Footer/>

            </div>
          )}

        </>


);
};