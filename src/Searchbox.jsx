import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  // ✅ Use Vite env variables
  const API_URL = import.meta.env.VITE_WEATHER_API_URL;
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      let jsonResponse = await response.json();
      console.log(jsonResponse);

      if (!response.ok || jsonResponse.cod !== 200) {
        throw new Error("City not found");
      }

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        temp_min: jsonResponse.main.temp_min,
        temp_max: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    setError(false);

    try {
      const newInfo = await getWeatherInfo();
      setCity("");
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
}
