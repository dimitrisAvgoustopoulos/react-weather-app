import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { setIsLoading, setData, setError } from "./features/dataHandling/dataHandlingSlice.js";
import Home from './pages/Home.jsx';
import WeatherForm from "./pages/WeatherForm.jsx";

import cities from './utils/cities.js';
import { getWeatherData } from "./api/weatherApi";


function App() {
  // Initial state usage
  // const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState([]);
  // const [error, setError] = useState();

  //Redux
  //Read data from the store
  const isLoading = useSelector(state=>state.dataHandling.isLoading);
  const data = useSelector(state=>state.dataHandling.data);
  const error = useSelector(state=>state.dataHandling.error)
  //Using to dispatch actions from the store
  const dispatch=useDispatch();
  

  useEffect(() => {
    const fetchWeather = async() => {
      dispatch(setIsLoading(true));
      try{
        const weatherData = await Promise.all(
          cities.map(city => getWeatherData(city))
        );
        dispatch(setData(weatherData));
        dispatch(setIsLoading(false));

      }catch (error) {
        dispatch(setError({ message: error.message }));
        dispatch(setIsLoading(false));
      }
    }
    fetchWeather();

  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} data={data} error={error} />} />
        <Route path="/weather/:locationName" element={<WeatherForm weatherData={data} />} />
      </Routes>
    </BrowserRouter>
  )

  
}

export default App
