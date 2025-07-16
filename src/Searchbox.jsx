import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";


export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    const [error,setError] = useState(false)
    const API_URL = "http://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "7d70dc19f2057e8a94b28189557c9c52"
    let getWeatherInfo = async()=>{
      try {
        let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        )
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
          city:city,
            temp:jsonResponse.main.temp,
            temp_min:jsonResponse.main.temp_min,
            temp_max:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelslike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,


        }
        console.log(result);
        return result
      } catch (error) {
        throw error
        
      }
        

    }
    let handleChange = (evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit = async(evt)=>{
      try {
        setError(false)
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo)
        
      } catch (error) {
        setError(true)
        
      }
        
    }
   return (
    <div style={{textAlign:"center"}}>
      
      <form onSubmit={handleSubmit}>
        
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
          />
          <br/>
          <br />
          <Button variant="contained" type="submit">
            Search
          </Button>
          {error && <p style={{color:"red"}}>No such place exists!</p>}
          
        
      </form>
    </div>
  );
}