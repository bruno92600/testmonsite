import React from 'react'
import '../styles/Meteo.css'

function DisplayMeteo(props) {
    const {data} = props;

    const iconurl = "http://openweathermap.org/img/wn/" + `${data.code !== 404 ? data.weather[0].icon : null}` + ".png"

  return (
    <div className="displayweather">
        {data.cod !== 404 ? 
        
        <React.Fragment>
            <div className="maincard">
            <span className="cardtitle">
                {data.name}, {data.sys.country}
            </span>
            <span className="cardsubtitle">
                à {new Date().toLocaleTimeString()}
            </span>
            <h1 className='temperature'>
                {Math.floor(data.main.temp - 273.15)}
                <sup>°</sup>
            </h1>
            <span className="weather-main">
                {data.weather[0].main}
            </span>
            <img src={iconurl} className="weather-icon" alt='' />
        </div>

         <div className="weatherdetails">
             <div className="section1">
                 <table>
                     <tr>
                         <td>
                             <h4 className='descript-meteo'>Haut/Bas :</h4>
                         </td>
                         <td>
                             <span className='result-meteo'>
                         {Math.floor(data.main.temp_max - 273.15)} /{" "}
                         {Math.floor(data.main.temp_min - 273.15)} <sup>°</sup>C
                         </span>
                         </td>
                     </tr>
                     <tr>
                         <td>
                             <h4 className='descript-meteo'>Humidité :</h4>
                         </td>
                         <td>
                             <span className='result-meteo'>
                         {data.main.humidity} %
                         </span>
                         </td>
                     </tr>
                     <tr>
                         <td>
                             <h4 className='descript-meteo'>Pression :</h4>
                         </td>
                         <td>
                             <span className='result-meteo'>
                         {data.main.pressure} hPa
                         </span>
                         </td>
                     </tr>
                     <tr>
                         <td>
                             <h4 className='descript-meteo'>Visibilité :</h4>
                         </td>
                         <td>
                             <span className='result-meteo'>
                         {data.visibility / 1000} km
                         </span>
                         </td>
                     </tr>
                 </table>
             </div>
             <div className="section2">
                 <table>
                     <tr>
                         <td>
                             <h4 className='descript-meteo'>Vent :</h4>
                         </td>
                         <td>
                             <span className='result-meteo'>
                         {Math.floor((data.wind.speed * 18) / 5)} km/h
                         </span>
                         </td>
                     </tr>
                     <tr>
                         <td>
                             <h4 className='descript-meteo'>Direction du vent :</h4>
                         </td>
                         <td>
                             <span className='result-meteo'>
                         {data.wind.deg} <sup>°</sup> deg
                         </span>
                         </td>
                     </tr>
                     <tr>
                         <td>
                             <h4 className='descript-meteo'>Levé du soleil :</h4>
                         </td>
                         <td>
                             <span className='result-meteo'>
                         {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                         </span>
                         </td>
                     </tr>
                     <tr>
                     <td>
                             <h4 className='descript-meteo'>Couché du soleil :</h4>
                         </td>
                         <td>
                             <span className='result-meteo'>
                         {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                         </span>
                         </td>
                     </tr>
                 </table>
             </div>
         </div>
        </React.Fragment>
    
    
        : <div className='maincard'>
            <h2>{data.message}</h2>
        </div>
    }
    </div>
  )
}

export default DisplayMeteo