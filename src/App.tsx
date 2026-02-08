import { useState, useEffect, useCallback, useRef } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWeatherByCity } from "./services/weatherService";
import type { WeatherData } from "./types";
import CurrentWeather from "./components/CurrentWeather";
import Highlights from "./components/Highlights";
import Forecast from "./components/Forecast";

function App() {
    const [city, setCity] = useState("Colombo");
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [recentSearches, setRecentSearches] = useState<string[]>([]);
    const searchRef = useRef<HTMLDivElement>(null);

    const fetchWeather = useCallback(async (cityName: string = city) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getWeatherByCity(cityName);
            setWeather(data);
            setCity(cityName);

            // Add to recent searches
            setRecentSearches(prev => {
                const newSearches = [cityName, ...prev.filter(s => s !== cityName)];
                return newSearches.slice(0, 5);
            });
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to fetch weather data';
            setError(`City not found: "${cityName}". Please try another location.`);
            console.error("Error fetching weather:", errorMessage);
        } finally {
            setLoading(false);
            setSearchOpen(false);
        }
    }, [city]);

    useEffect(() => {
        fetchWeather();
    }, []);

    // Auto-dismiss error after 5 seconds
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    // Close search on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setSearchOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0B131E] via-[#101D2E] to-[#0F1A2B] text-white p-4 md:p-8 font-sans relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        x: [0, 10, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        x: [0, -15, 0],
                        rotate: [0, -3, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5
                    }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
                />
            </div>

            {/* Error Notification Toast */}
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 max-w-md"
                    >
                        <div className="bg-red-500/90 backdrop-blur-xl border border-red-400/50 rounded-2xl p-4 shadow-2xl flex items-center gap-3">
                            <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-2xl">⚠️</span>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-white">Error</p>
                                <p className="text-sm text-white/90">{error}</p>
                            </div>
                            <button
                                onClick={() => setError(null)}
                                className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="grid grid-cols-1 lg:grid-cols-4 gap-6"
                >
                    {/* LEFT SECTION */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Animated Header */}
                        <motion.header
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="flex items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-3 cursor-pointer"
                            >
                                <motion.img
                                    animate={{ rotate: [0, 360] }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    src="/weather.png"
                                    alt="WeatherLy Logo"
                                    className="w-12 h-12 drop-shadow-lg"
                                />
                                <div>
                                    <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                        WeatherLy
                                    </h1>
                                    <p className="text-xs text-gray-400">Real-time Weather Intelligence</p>
                                </div>
                            </motion.div>

                            <div className="relative" ref={searchRef}>
                                <motion.div
                                    animate={{
                                        width: searchOpen ? 300 : 48,
                                        borderRadius: searchOpen ? "12px" : "50%"
                                    }}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden"
                                >
                                    {searchOpen ? (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex items-center px-3"
                                        >
                                            <Search className="text-gray-400 w-5 h-5 flex-shrink-0" />
                                            <input
                                                type="text"
                                                placeholder="Search city..."
                                                className="bg-transparent w-full py-3 px-3 outline-none text-white placeholder-gray-400"
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                                onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
                                                autoFocus
                                            />
                                            <button
                                                onClick={() => setSearchOpen(false)}
                                                className="p-1 hover:bg-white/10 rounded-full"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setSearchOpen(true)}
                                            className="w-12 h-12 flex items-center justify-center"
                                        >
                                            <Search className="w-5 h-5" />
                                        </motion.button>
                                    )}
                                </motion.div>

                                {/* Recent Searches Dropdown */}
                                <AnimatePresence>
                                    {searchOpen && recentSearches.length > 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute top-full mt-2 w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden"
                                        >
                                            <div className="p-2">
                                                <p className="text-xs text-gray-400 px-3 py-2">Recent Searches</p>
                                                {recentSearches.map((search, idx) => (
                                                    <motion.button
                                                        key={idx}
                                                        whileHover={{ x: 5 }}
                                                        onClick={() => {
                                                            setCity(search);
                                                            fetchWeather(search);
                                                        }}
                                                        className="w-full text-left px-3 py-2 hover:bg-white/5 rounded-lg flex items-center gap-2 group"
                                                    >
                                                        <Search className="w-3 h-3 text-gray-400 group-hover:text-blue-400" />
                                                        <span className="text-sm group-hover:text-blue-300">{search}</span>
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.header>

                        {/* Loading Animation */}
                        <AnimatePresence mode="wait">
                            {loading ? (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="relative h-[400px] rounded-3xl overflow-hidden bg-gradient-to-r from-white/5 to-transparent"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full mb-4"
                                        />
                                        <p className="text-gray-400 font-medium">Fetching weather data...</p>
                                        <p className="text-sm text-gray-500 mt-2">Searching in our global network</p>
                                    </div>
                                </motion.div>
                            ) : weather ? (
                                <motion.div
                                    key="weather"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-6"
                                >
                                    <CurrentWeather data={weather} />
                                    <Highlights data={weather} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="error"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-20"
                                >
                                    <div className="text-6xl mb-4">🌍</div>
                                    <h3 className="text-xl font-semibold text-gray-300">City Not Found</h3>
                                    <p className="text-gray-500 mt-2">Try searching for another location</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* RIGHT SECTION - Forecast */}
                    <div className="lg:col-span-1">
                        <Forecast />
                    </div>
                </motion.div>

                {/* Weather Stats Bar */}
                {weather && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {[
                            { label: "FEELS LIKE", value: `${Math.round(weather.main.feels_like)}°`, icon: "🌡️" },
                            { label: "HUMIDITY", value: `${weather.main.humidity}%`, icon: "💧" },
                            { label: "PRESSURE", value: `${weather.main.pressure} hPa`, icon: "📊" },
                            { label: "UV INDEX", value: "5", icon: "☀️" },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center"
                            >
                                <div className="text-2xl mb-2">{stat.icon}</div>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/10 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            y: [null, -50],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;