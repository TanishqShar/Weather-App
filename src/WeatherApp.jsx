import { useState } from "react";
import SearchBox from "./Searchbox";
import InfoBox from "./InfoBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city:"DELHI",
        feelslike:24.84,
        temp:25.05,
        temp_min:25.05,
        temp_max:25.05,
        humidity:47,
        weather:"haze",
    })
    
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}