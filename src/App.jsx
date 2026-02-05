import React from 'react';
import { useState, useEffect } from 'react';
import { API_DEVICES } from './services/Endpoints.jsx';

function App() {
  const [deviceList, setDeviceList] = useState([]);
  const [filtredDevices, setFilteredDevices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(API_DEVICES);
    const jsonData = await response.json();
    setDeviceList(jsonData);
    setFilteredDevices(jsonData);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === '') {
      setFilteredDevices(deviceList);
    }
  };

  const searchData = () => {
    const searchVal = searchTerm.toLowerCase();
    const filteredDevices = deviceList.filter((device) =>
      device.name.toLowerCase().includes(searchVal),
    );
    setFilteredDevices(filteredDevices);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search devices..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="search-button" onClick={searchData}>
          Search
        </button>
      </div>
      <div className="devices-list">
        {filtredDevices.map((device) => {
          return (
            <div key={device.id} className="device-card">
              <h3>{device.name}</h3>
              <p>Brand: {device?.data?.brand}</p>
              <p>Generation: {device?.data?.generation}</p>
              <p>Capacity: {device?.data?.Capacity}</p>
              <p>Color: {device?.data?.color}</p>
              <p>Price: ${device?.data?.price}</p>
              <p>Release Year: {device?.data?.releaseYear}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
