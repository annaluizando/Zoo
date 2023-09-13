import React, { useEffect, useState } from "react";
import Habitat from "../../assets/habitat.png";
import Diet from "../../assets/diet.svg";
import Location from "../../assets/location.svg";
import "./AppAnimals.css";
import Footer from "../Footer/Footer";
import ErrorPage from "../ErrorState";
import Loading from "../Loading";

export const AppAnimals = () => {
    const [animal, setAnimal] = useState(undefined);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const API_KEY = process.env.REACT_APP_API_KEY;

    const getAnimal = () => {
      fetch(`${BASE_URL}v1/animals?name=${searchTerm}`, {
        method: 'GET',
        headers: { 'X-Api-Key': API_KEY},
        contentType: 'application/json',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0){
            setAnimal(data[0]);

          } else if (data.error) {
            setError(true);
          }
          setLoading(false);

        })
        .catch((err) => {
          setError(true);
        });

    };
  
    const handleSearchClick = (event) => {
      if(event) {
        event.preventDefault();
        setLoading(true);

        if (searchTerm.trim() === "") {
          setAnimal({});
          return;
        }
  
        setError(false);
        getAnimal();
      }
    };

    const handleChange = (event) => {
      setLoading(true);
      setSearchTerm(event.target.value);
      setAnimal(null);
    } 

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleSearchClick();
      }
    };


    useEffect(() => {

    }, [animal, loading, error]);

      return (

        <>
          {error ? (
            <ErrorPage/>  
          ) : (
            <div className="generalContainer">

              <div className="content">
                
                {/* search field */}
                <div className="searchBar">
                  <form className="form" onSubmit={handleSearchClick}>
                      <input
                          type="text"
                          placeholder="Search your animal"
                          onChange={handleChange}
                          value={searchTerm}
                          onKeyDown={handleKeyPress}
                          className="searchField"
                      />
                      <button type="submit" onClick={handleSearchClick} className="searchButton">Search</button>
                  </form>
                </div>



                    {loading && animal === null ? (
                      <Loading/>
                    ) : (
                        
                      <main>
                        { animal ? (

                          <div className="InfosContainer">

                            <div className="Infos">
                              <h1>
                                {animal.name || "No Animal Found"}
                              </h1>
                        
                              <h2 id="LatinName">
                                {animal.taxonomy.scientific_name || "No Latin Name Avaliable"}
                              </h2>

                              <h3 id="Kingdom">
                                {animal.taxonomy.kingdom || "No Kingdom Avaliable"}
                              </h3>
                            </div>


                            <span className="DataInfoB">
                              <img src={Habitat} className="Icon" alt="HabitatIcon"/>
                              <strong className="TextB">HABITAT:</strong>
                              <p>{animal.characteristics.habitat || "No Habitat Avaliable"}</p>
                            </span>
                            

                            <span className="DataInfoB">
                              <img src={Diet} className="Icon" alt="DietIcon"/>
                              <strong className="TextB">DIET:</strong>
                              <p>{animal.characteristics.diet || "No Diet Avaliable"}</p>
                            </span>
                            

                            <span className="DataInfoB">
                              <img src={Location} className="Icon" alt="LocationIcon"/>
                              <strong className="TextB">LOCATION:</strong>

                              {animal && animal.locations && animal.locations.length >= 1 ? (
                                animal.locations.map((location, index) => (
                                  <p key={index} className="AnimalLocation">
                                    {index === 0 ? location : `, ${location}`}
                                  </p>
                                ))
                              ) : (
                                <p className="AnimalLocation">{animal.locations || "No Location Avaliable"}</p>
                              )}

                            </span>
                          </div>
                        ) : (
                          <div className="InfosContainer">

                            <div className="Infos">
                              <h1>
                                No Animal Found
                              </h1>
                        
                              <h2 id="LatinName">
                                No Latin Name Avaliable
                              </h2>

                              <h3 id="Kingdom">
                                No Kingdom Avaliable
                              </h3>
                            </div>


                            <span className="DataInfoB">
                              <img src={Habitat} className="Icon" alt="HabitatIcon"/>
                              <strong className="TextB">HABITAT:</strong>
                              <p>No Habitat Avaliable</p>
                            </span>
                            

                            <span className="DataInfoB">
                              <img src={Diet} className="Icon" alt="DietIcon"/>
                              <strong className="TextB">DIET:</strong>
                              <p>No Diet Avaliable</p>
                            </span>
                            

                            <span className="DataInfoB">
                              <img src={Location} className="Icon" alt="LocationIcon"/>
                              <strong className="TextB">LOCATION:</strong>

                              {animal && animal.locations && animal.locations.length >= 1 ? (
                                animal.locations.map((location, index) => (
                                  <p key={index} className="AnimalLocation">
                                    {index === 0 ? location : `, ${location}`}
                                  </p>
                                ))
                              ) : (
                                <p className="AnimalLocation">No Location Avaliable</p>
                              )}

                            </span>
                          </div>
                        )}

                        </main>
                    )}


              </div>


              <Footer/>

            </div>
          )}

        </>


);
};