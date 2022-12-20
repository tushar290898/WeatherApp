import './App.css';
import { useEffect, useState } from "react"
import axios from 'axios'


function App() {

  const [data, setData] = useState({})
  const [city, setCity] = useState("")
 
  

  const getWeather = (cityName) =>{
    const appURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ac7216f70bff06ea9b6788197d80b202`
    axios.get(appURL)
    .then((res)=>{
      console.log("responseData",res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log("err",err)
    })
  }

  const handleSearchCity = () =>{
    getWeather(city);
    setCity("")
  }



  useEffect(()=>{
    getWeather("Delhi");
  },[])
 

  return (
    <div className="App">
      <img src="https://environment.co/wp-content/uploads/sites/4/2022/07/diego-ph-BCuxVP5WEsU-unsplash.jpg" />
      <div className="search-weather">
        <input placeholder='Enter city name here..' type="text" value={city} onChange={e => setCity(e.target.value)}/>
        <button type="button" onClick={handleSearchCity}>Search</button>
      </div>
      <div className="weather-card">
        <h3>{data.name}</h3>
        <h4>{((data?.main?.temp)-273).toFixed(2)} °C</h4>
      </div>
    </div>
  );
}

export default App;
