const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeatherData(city) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json();
  //console.log(data);
  return data;
}
