//Properties.jsx
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Properties.css";


function Properties() {
  const [properties, setProperties] = useState([]);
  const [handle, setHandle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:5000/house");
      const data = await response.json();
      setProperties(data);
    };
    fetchData();
  }, []);

  const handleClick = (propertyid) => {
    setHandle((properties) => {
      if (properties.includes(propertyid)) {
        return properties.filter((id) => id !== propertyid);
      } else {
        return [...properties, propertyid];
      }
    });
  };

  return (
    <>
      <h1>Properties</h1>
      <div className='search-field'>
        <input className="input-field" type="text" placeholder='search here'/>
        <button className ="search-btn">
          search
        </button>
      </div>
      <div className="properties--1">
        {properties.map((property) => (
          <div className="item" key={property.id}>
            <img src={property.url} alt={`House ${property.id}`} />
            {/* <h4>House Type: {property.housetype}</h4> */}
            <h4>Location: {property.location}</h4>
            <h4>Price: {property.price}</h4>
            {/* <h4>Description: {property.description}</h4> */}
            {/* Use Link to navigate to the Details component */}
            <button id="btn-seemore">
              <Link to={`/details/${property.id}`}  className="seemore--btn">
              See More
            </Link>
            </button>
            
          </div>
          
        ))}
        
      </div>

      
    </>
  );
}

export default Properties;
