import axios from 'axios';
import React,{useState,useEffect} from 'react';
let citySearch = '';
function Weather(){
    
    let [city,setCity] = useState('');
    let [data,setData] = useState([]);
    let [temp,setTemp] = useState(null);
    let [des,setDes] = useState('');
    let [val,setVal] = useState(city);

    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=85d6588eaee5a0d134b1e5e179482061&units=metric`

    function handleSearch(){
        axios.get(endpoint)
        .then((data)=>{
           
            setData(data.data)
            setTemp(data.data.main.temp)
            setDes(data.data.weather[0].description)
            citySearch = city;
            setCity('')
            console.log(data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    // useEffect(()=>{
    //     handleSearch()
    // },[city])

    return (
        <div>
            <input className='search' value={city}  type='text' placeholder='Enter city' onChange={(e)=> setCity(e.target.value)}></input>
            <button onClick={handleSearch}>Search</button>
            <div className='weather'>
               <h1>{citySearch}</h1>
               <h2>{temp} F</h2>
               <h3>{des}</h3>
                
            </div>
        </div>
    )
}
export default Weather