import React from 'react';
import Habitat from "../../assets/habitat.png";
import Diet from "../../assets/diet.svg";
import Location from "../../assets/location.svg";
import "./Card.css";

const AnimalCard = ({animal}) => {
    return ( 

    <div>
        <div className="Card">
            <div className="BorderImgB">
                <img src={animal.image_link} id="AnimalImgB" alt="AnimalImage"/>
            </div>
              
            <div className="InfosB">
                <h1>
                    {animal.name}
                </h1>
                <h2 id="LatinNameB">
                  {animal.latin_name}
                </h2>


                <span className='DataInfo'>
                  <img src={Habitat} className="IconB" alt='HabitatIcon'/>
                  <strong className='Text'>HABITAT:</strong>
                  <p>{animal.habitat}</p>
                </span>
                

                <span className='DataInfo'>
                  <img src={Diet} className="IconB" alt='DietIcon'/>
                  <strong className='Text'>DIET:</strong>
                  <p>{animal.diet}</p>
                </span>
                

                <span className='DataInfo'>
                  <img src={Location} className="IconB" alt='LocationIcon'/>
                  <strong className='Text'>LOCATION:</strong>
                  <p>{animal.geo_range}</p>
                </span>
                
            </div>
        </div>


    </div>
     );
}
    
 
export default AnimalCard;