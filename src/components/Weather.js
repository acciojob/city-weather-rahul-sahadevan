import axios from 'axios';
import React,{useState,useEffect} from 'react';
function Weather(){
    
    let [city,setCity] = useState('');
    let [data,setData] = useState([]);
    let [temp,setTemp] = useState(null);
    let [des,setDes] = useState('');

    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=85d6588eaee5a0d134b1e5e179482061&units=metric`

    function handleSearch(){
        axios.get(endpoint)
        .then((data)=>{
            setData(data.data)
            setTemp(data.data.main.temp)
            setDes(data.data.weather[0].description)
            console.log(data.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    useEffect(()=>{
        handleSearch()
    },[city])

    return (
        <div>
            <input className='search' type='text' placeholder='Enter city' onChange={(e)=> setCity(e.target.value)}></input>
            <div className='weather'>
               <h1>{city}</h1>
               <h2>{temp} F</h2>
               <h3>{des}</h3>
                
            </div>
        </div>
    )
}
export default Weather