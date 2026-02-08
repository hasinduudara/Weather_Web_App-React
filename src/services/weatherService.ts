import axios from "axios";
import { WeatherData } from "../types";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherByCity = async (city: string): Promise<WeatherData> => {
    try {
        const response = await axios.get(
            `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};