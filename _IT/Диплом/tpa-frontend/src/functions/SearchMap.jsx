import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import geocodeByAddress from 'react-geocode';
import getLatLng from 'react-geocode';
import Geocode from 'react-geocode';
import axios from 'axios';

function AddressSearch() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Call Nominatim API to get the list of suggestions
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?q=${value}&format=json`
    );

    // Map the response to an array of suggestion objects
    const newSuggestions = response.data.map((result) => ({
      label: result.display_name,
      lat: result.lat,
      lon: result.lon,
    }));

    // Set the state with the new suggestions
    setSuggestions(newSuggestions);
  };

  const handleSelect = (selectedAddress) => {
    // Do something with the selected address, e.g. display it on a map
    console.log(selectedAddress);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <ul>
        {suggestions.map((address) => (
          <li key={address.label} onClick={() => handleSelect(address)}>
            {address.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddressSearch;
