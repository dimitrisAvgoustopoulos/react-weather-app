import { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { setSuggestion } from "../features/form/formSlice";

import { sanitizeInput } from "../utils/sanitizeInput";
import {downloadPDF} from '../utils/downloadPDF';


const WeatherForm = ({ weatherData }) => {
  const { locationName } = useParams();
  
  const decodedName = decodeURIComponent(locationName);

  // Use the passed cityName state via Link (React Router) if available, otherwise fallback to decodedName
  //const location = useLocation();
  //const cityName = location.state?.cityName || decodedName;

  //Initial state usage for the suggestion textarea
  //const [suggestion, setSuggestion] = useState("");
  
  // Find the weather data for the selected city
  const item = weatherData.find((city) => city.location.name === decodedName);
  
  // If the city is not found in weatherData, show a message and back link
  if (!item) {
    return (
      <div className="min-h-screen text-center text-white bg-gradient-to-b from-[#729ac5] to-[#36607b57]">
        <p>City not found.</p>
        <Link to="/" className="text-blue-300 underline">Back</Link>
      </div>
    );
  }

  //Redux
  //Read data from the store
  const cityName = useSelector(state => state.editCity.cityNames[item.location.name] ?? item.location.name);
  const suggestion = useSelector(state=>state.form.suggestion);
  //Using to dispatch actions from the store
  const dispatch=useDispatch();

  // Handle form submission (for now, just prevent default)
  const handleSubmit = (e) => {
    e.preventDefault();
    const sanitizedSuggestion = sanitizeInput(suggestion)
    downloadPDF(cityName,item,sanitizedSuggestion);
    dispatch(setSuggestion(""));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#729ac5] to-[#36607b57] py-10">
      
      <div className="w-4/6 md:w-3/4 lg:w-6/12 2xl:w-4/12 mx-auto bg-white rounded-lg shadow-lg p-8 mt-8">
        <Link to="/" className="text-blue-500 underline mb-4 inline-block">← Back</Link>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Weather Entry</label>
            <input
              type="text"
              value={cityName}
              readOnly
              className="w-full border rounded px-3 py-2 mb-2 bg-gray-100"
            />
            <img src={item.current.condition.icon} alt={item.current.condition.text} className="my-2" />
            <p className="text-xl mb-2">{item.current.condition.text}</p>
            <p className="text-5xl">{Math.round(item.current.temp_c)}°C</p>
            <div className="mt-4 flex space-x-4">
              <span>💧 {item.current.humidity}%</span>
              <span>💨 {item.current.wind_kph} kph</span>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Suggest improvements for the weather API
            </label>
            <textarea
              value={suggestion}
              onChange={e => dispatch(setSuggestion(e.target.value))}
              rows={4}
              className="w-full border rounded px-3 py-2"
              placeholder="Your suggestions..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
          >
            Submit Suggestion
          </button>
        </form>
      </div>
    </div>
  );
};

export default WeatherForm;