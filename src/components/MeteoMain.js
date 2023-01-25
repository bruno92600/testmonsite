import React, { useState } from 'react'
import '../styles/Meteo.css'
import DisplayMeteo from './DisplayMeteo';

function MeteoMain() {

    const APIKEY = "7a1ff8e4514068ef46e17984721bd60f"

    const [form, setForm] = useState({
        city: "",
        country: ""
    });

    const [weather, setWeather] = useState([]);

    async function weatherData(e){

        e.preventDefault();
        if(form.city ===""){
            alert("Add values");
        }else{
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
                )
                .then((res) => res.json())
                .then((data) => data);

                setWeather(
                    {
                        data : data
                    }
                );
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "city"){
            setForm({...form, city:value})
        }

        if(name === "country"){
            setForm({...form, country:value})
        }
    }

  return (
    <div className="weather">
        <span className="title1">
            Météo by Brû nö
        </span>
        <br/>

        <form className='formulaire'>
            <input type="text" name='city' placeholder='ville' onChange={e => handleChange(e)}/>
            &nbsp; &nbsp;&nbsp;&nbsp;
            <input type="text" name='country' placeholder='pays' onChange={e => handleChange(e)}/>
            <button className="getweather" onClick={(e) => weatherData(e)}>
                Rechercher
            </button>
        </form>



        {
            weather.data !== undefined ? (
                <div className='datameteo'>
                    <DisplayMeteo data={weather.data} />
                </div>
            ) : null
        }
    </div>
  )
}

export default MeteoMain