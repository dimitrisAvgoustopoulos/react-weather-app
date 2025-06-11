import { jsPDF } from "jspdf";

// PDF generation handler
export const downloadPDF = (name, item, suggestion) => {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text("Weather Report", 10, 10);
  doc.setFontSize(12);
  doc.text(`City: ${name}`, 10, 25);
  doc.text(`Condition: ${item.current.condition.text}`, 10, 35);
  doc.text(`Temperature: ${Math.round(item.current.temp_c)}°C`, 10, 45);
  doc.text(`Humidity: ${item.current.humidity}%`, 10, 55);
  doc.text(`Wind: ${item.current.wind_kph} kph`, 10, 65);
  doc.text("Suggestion:", 10, 80);
  doc.text(suggestion || "No suggestion provided.", 10, 90, { maxWidth: 180 });
  doc.save(`${name}-weather.pdf`);
};
