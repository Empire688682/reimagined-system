"use client";
import { useEffect, useState } from 'react';

const LocationDisplay = () => {
    const {setGetLocation} = useGlobalContext();

  const [location, setLocation] = useState({ city: '', state: '', error: '' });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({ ...location, error: 'Geolocation not supported' });
      return;
    }

    constnavigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const apiKey = 'YOUR_OPENCAGE_API_KEY'; // 🔑 paste your key here

      try {
        const res = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
        );
        const data = await res.json();
        const { city, town, village, state } = data.results[0].components;

        setLocation({
          city: city || town || village || '',
          state: state || '',
          error: '',
        });
      } catch (err) {
        setLocation({ ...location, error: 'Failed to fetch location info' });
      }
    }, (err) => {
      setLocation({ ...location, error: err.message });
    });
  }, []);

  if (location.error) return <p>Error: {location.error}</p>;
  if (!location.city && !location.state) return <p>Getting your location...</p>;

  return (
    <div>
      <p>City: {location.city}</p>
      <p>State: {location.state}</p>
    </div>
  );
};

export default LocationDisplay;
