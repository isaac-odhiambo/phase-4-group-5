import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Properties.css';

function Properties() {
  const [properties, setProperties] = useState([]);
  const [selectedProperties, setSelectedProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/house');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    

    fetchData();
  }, []);

  const handleClick = (propertyId) => {
    setSelectedProperties((prevSelected) =>
      prevSelected.includes(propertyId)
        ? prevSelected.filter((id) => id !== propertyId)
        : [...prevSelected, propertyId]
    );
  };

  return (
    <>
      <h1>Properties</h1>
      <div className="search-field">
        <input className="input-field" type="text" placeholder="search here" />
        <button className="search-btn">search</button>
      </div>
      <div className="properties--1">
        {properties.map((property) => (
          <div className={`item ${selectedProperties.includes(property.id) ? 'selected' : ''}`} key={property.id}>
            <img src={property.url} alt={`House ${property.id}`} />
            <h4>Location: {property.location}</h4>
            <h4>Price: {property.price}</h4>
            <button id="btn-seemore">
              <Link to={`/details/${property.id}`} className="seemore--btn">
                See More
              </Link>
            </button>
            <button onClick={() => handleClick(property.id)}>
              {selectedProperties.includes(property.id) ? 'Deselect' : 'Select'}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Properties;
