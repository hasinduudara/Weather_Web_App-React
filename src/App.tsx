import { useState, useEffect, useCallback } from "react";
import { Search } from "lucide-react";
import { motion } from "motion/react";
import { getWeatherByCity } from "./services/weatherService";
import type { WeatherData } from "./types";
import CurrentWeather from "./components/CurrentWeather";
import Highlights from "./components/Highlights";
import Forecast from "./components/Forecast";

function App() {
    const [city, setCity] = useState("Colombo");
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchWeather = useCallback(async () => {
        setLoading(true);
        try {
            const data = await getWeatherByCity(city);
            setWeather(data);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    }, [city]);

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    return (
        <div className="min-h-screen bg-[#0B131E] text-white p-4 md:p-8 font-sans flex justify-center items-start md:items-center">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-4 gap-6"
            >

                {/* LEFT SECTION (Main Dashboard) */}
                <div className="lg:col-span-3 space-y-6">

                    {/* Header & Search Bar */}
                    <header className="flex flex-col sm:flex-row justify-between items-center bg-[#202B3B] p-4 rounded-3xl gap-4">
                        <div className="flex items-center gap-3">
                            <img
                                src="/weather.png"
                                alt="WeatherLy Logo"
                                className="w-10 h-10 object-contain"
                            />
                            <span className="font-bold text-xl tracking-wide">WeatherLy</span>
                        </div>

                        <div className="relative w-full sm:w-auto sm:flex-1 max-w-md">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search city..."
                                className="bg-[#0B131E] w-full py-3 pl-12 pr-4 rounded-full outline-none text-sm text-white focus:ring-2 focus:ring-blue-500 transition-all"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
                            />
                        </div>
                    </header>

                    {/* Loading State or Weather Components */}
                    {loading ? (
                        <div className="text-center py-20 text-gray-400 animate-pulse">Loading weather data...</div>
                    ) : weather ? (
                        <>
                            <CurrentWeather data={weather} />
                            <Highlights data={weather} />
                        </>
                    ) : (
                        <div className="text-center py-20 text-red-400">City not found</div>
                    )}

                </div>

                {/* RIGHT SECTION (Forecast) */}
                <div className="lg:col-span-1">
                    <Forecast />
                </div>

            </motion.div>
        </div>
    );
}

export default App;