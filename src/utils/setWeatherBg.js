export const setWeatherBg = (conditionText) => {
  //dynamically set bg by weather
  const text = conditionText.toLowerCase();
  if (text.includes("rain")) return "from-[#3e678b] to-[#485563]";
  if (text.includes("sunny")) return "from-[#ffe09a] to-[#CA9E42]";
  if (text.includes("cloud")) return "from-[#ffffff] to-[#7d8fa3]";
  if (text.includes("mist")) return "from-[#a7b3bc] to-[#6d7a86]";
  if (text.includes("overcast")) return "from-[#bfc6d1] to-[#325A76]"; // Overcast: gray gradient

  // default
  return "bg-gradient-to-b from-[#4184CB] to-[#75B6D7]";
};
