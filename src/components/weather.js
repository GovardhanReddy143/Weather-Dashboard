import React, {useEffect, useRef} from 'react'
import './weather.css'
import seach_icon from '../assets/search-png' 



const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setweatherData] = useState(false);

  const allicons = {
    'ord' : clear_icon,
  }

  const search = async(city) => {
    if (city === "")
    alert("Please enter a city");
    return;
  }
  try{
    const url = "https://openweathermap.org/"
    const response = await fetch(url);
    const data = await response.json();

    if(response.ok){
      alert(data.message);
      return;
    }
    console.log(data);
    const icon = allicons[data.weather[o].icon] || clear_icon;
    setweatherData({
      humidity : data.main.humidity,
      windspeed : data.wind.speed,
      temerature : data.Math.floor(data.main.temp),
      location : data.name,
      icon : icon,
    })
  }
  catch (error){
    setweatherData(false);
    console.alert("Error Fetching Data",error);

  }
}
useEffect(() =>{
search('Delhi');
},[])

return(
  <div className='weather'>
    <div className='seach_icon'>
      <input Ref ={inputRef} type='text' placeholder='search'/>
      <img sec = {seach_icon} alt='' onClick={() =>search(inputRef.current.value)}/>
    </div>
       
    {weatherData? <>
    <img src = {weatherData.icon} alt = "" className='weather-icon'/>
    <P className = 'temerature'>{weatherData.temerature}c</P>
    <p className='location'>{weatherData.location}</p>
    <div className='weatherData'>
      <div className='col'>
         <img src={humidity_icon} alt= '' />
         <div>
         <p>{weatherData.humidity}%</p>
         <span>Humidity</span>
         </div>
         <div className="col">
           <img src = {wind_icon} alt= ''/>
          <div>
            <p>{weatherData.windspeed}km/h</p>
            <span>WindSpeed</span>
          </div>
         </div>
      </div>
    }
    </div>
  )
}

export default Weather