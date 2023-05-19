import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "../styles/RentForm.css";

const center = { lat: 30.7600, lng: 76.6264 };

function RentForm() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [rideDate, setRideDate] = useState('');
  const [rideTime, setRideTime] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [currentLocation, setCurrentLocation] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact">
      <div className="leftSide">
      <h1>Rent a ride</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="pickupLocation">Pickup location</label>
          <input
            type="text"
            id="pickupLocation"
            value={pickupLocation}
            onChange={(event) => setPickupLocation(event.target.value)}
          />

          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          />

          <label htmlFor="rideDate">Date</label>
          <input
            type="date"
            id="rideDate"
            value={rideDate}
            onChange={(event) => setRideDate(event.target.value)}
          />

          <label htmlFor="rideTime">Time</label>
          <input
            type="time"
            id="rideTime"
            value={rideTime}
            onChange={(event) => setRideTime(event.target.value)}
          />

          <label htmlFor="passengers">Number of passengers</label>
          <input
            type="number"
            id="passengers"
            value={passengers}
            min="1"
            onChange={(event) => setPassengers(event.target.value)}
          />

          <button type="submit">Book ride</button>
        </form>
      </div>
      <div className="rightSide">
      {isLoaded ? (
          <GoogleMap
            center={currentLocation || center}
            zoom={15}
            mapContainerStyle={{ height: '100%', width: '100%' }}
          >
            {currentLocation && (
              <Marker position={currentLocation} />
            )}
          </GoogleMap>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default RentForm;
