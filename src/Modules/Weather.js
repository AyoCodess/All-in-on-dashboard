import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weather() {
  const [coords, setCoords] = useState({});
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (coords.lon && coords.lat) {
      const apiCall = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=d0a10211ea3d36b0a6423a104782130e&units=metric`
          );
          setData(response.data);
          setLoading(false);
          setError(false);
        } catch (err) {
          console.error(err);
          setError(true);
        }
      };
      apiCall();
    }
  }, [coords]);

  // - checks if users location data is available

  const getLocation = () => {
    setLoading(true);
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
      setError(true);
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        () => {
          console.log('Unable to retrieve your location');
        }
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  // - data formatting
  let temp;
  let city;
  let icon;
  if (data) {
    temp = data.main.temp.toFixed(0);
    city = data.name;
    icon = data.weather[0].icon;
  }

  return (
    <>
      {loading && !error && <div className='text-center'>Loading Data...</div>}
      {error && loading && (
        <div className='text-center'>
          Sorry, something went wrong. Try again later.
        </div>
      )}

      {data && !loading && (
        <div className='flex flex-col  '>
          <div className='flex justify-between items-center'>
            <img
              src={`http://openweathermap.org/img/w/${icon}.png`}
              alt=' weather icon'
            />
            <div className='relative pr-2'>
              <div>{temp}</div>
              <div className=' text-red absolute top-[-0.75rem] left-[1.2rem]'>
                c
              </div>
            </div>
          </div>
          <div className='self-center'>{city}</div>
        </div>
      )}
    </>
  );
}

export default Weather;
