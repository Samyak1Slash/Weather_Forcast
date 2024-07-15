import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);//ye apn agar wrong info daal diye toh uske liye hai
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY=process.env.WeatherKey;       

    let getWhetherInfo=async()=>{ //Passing city as args to have an access of city o/w state var ko upar likdo waise bhi uski access sbk pass hoti hai
        try{
            setError(false);
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();

            let result={
                city:city,
                temp:jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                Weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch (error){
            throw error; 
        }
    }

    

    let handlechange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo= await getWhetherInfo();
            updateInfo(newInfo);
        }catch (err){
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <h3>Search For Wheather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handlechange} required />
                <br></br><br></br>
                <Button variant="contained" type="submit">Search</Button> {/**Yaha specifically form me =in button ka type submit likhna padega */}
                {error ? <p style={{color:"red"}}>No Such Place Exits</p> :""}{/**condn statement hai if error exists */}
            </form>
        </div>

        
    )
}