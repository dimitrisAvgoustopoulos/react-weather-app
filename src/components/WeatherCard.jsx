import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setCityName } from '../features/editCity/editCitySlice.js';
import { Link } from 'react-router-dom';

import { setWeatherBg } from '../utils/setWeatherBg.js';

const WeatherCard = ({item}) =>{
    //Initial state usage
    //const [cityName, setCityName] = useState(item.location.name);
    
    //Redux
    //Dead data from the store
    const cityName = useSelector(state => state.editCity.cityNames[item.location.name] ?? item.location.name);//nullish operator
    //console.log(useSelector(state => state.editCity.cityNames))
    //Using to dispatch actions from the store
    const dispatch=useDispatch();

    return(
        <Link to={`/weather/${encodeURIComponent(item.location.name)}`} 
            //state={{ cityName }} // Pass cityName as state via Link (React Router)
        >
            <div className={
                `bg-gradient-to-b ${setWeatherBg(item.current.condition.text)} 
                h-full bg-opacity-90 rounded-4xl shadow-xl p-6 flex flex-col items-center`
                }
            >
                <div className="flex flex-col items-center mb-2">
                    <img
                        src={item.current.condition.icon}
                        alt={item.current.condition.text}
                        className="w-30 h-30"
                    />
                    <h2 className="text-3xl mb-1 text-white">
                        <input //editable field
                            type="text"
                            value={cityName}
                            onChange={e => 
                                dispatch(setCityName({
                                        key: item.location.name,
                                        value: e.target.value
                                    }
                                ))
                            }
                            onClick={e => e.preventDefault()}
                            className="bg-transparent border-b border-white  text-white text-center w-32 outline-none"
                        />
                    </h2>
                    <p className="text-5xl text-white mb-2">
                        {Math.round(item.current.temp_c)}°
                    </p>
                    {/* <span className="text-lg text-gray-700">{item.current.condition.text}</span> */}
                </div>
                <div className="flex space-x-4 mt-2 text-gray-600 bg-[#ffffffa6] p-1 rounded-2xl shadow-lg">
                    <span>💧 {item.current.humidity}%</span>
                    <span>💨 {item.current.wind_kph} kph</span>
                </div>
            </div>
        </Link>
    )

}
export default WeatherCard;