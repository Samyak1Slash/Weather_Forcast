import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let [WeatherInfo,SetWeatherInfo]=useState({
        city:"Delhi",
        Weather: "haze",
        feelsLike: 42.05,
        humidity: 55,
        temp: 35.05,
        tempMax: 35.05,
        tempMin: 35.05  
    });

    let updateInfo=(newInfo)=>{
        SetWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={WeatherInfo}/>
        </div>
    )
}