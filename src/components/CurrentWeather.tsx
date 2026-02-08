import { MapPin, Navigation, Cloud } from "lucide-react";
import type { WeatherData } from "../types";
import { motion } from "framer-motion";

interface Props {
    data: WeatherData;
}

const CurrentWeather = ({ data }: Props) => {
    const temp = Math.round(data.main.temp);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative overflow-hidden p-8 rounded-3xl shadow-2xl"
        >
            {/* Dynamic Gradient Background */}
            <motion.div
                animate={{
                    background: [
                        'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
                        'radial-gradient(circle at 70% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
                        'radial-gradient(circle at 30% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
                    ]
                }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 -z-10"
            />

            {/* Glass Morphism Layer */}
            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-3xl -z-10" />

            <div className="relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    {/* Left Section */}
                    <div className="text-center lg:text-left space-y-4">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
                        >
                            <MapPin className="w-4 h-4 text-blue-300" />
                            <span className="font-medium">
                                {data.name}, {data.sys.country}
                            </span>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-2 h-2 bg-blue-400 rounded-full"
                            />
                        </motion.div>

                        <div className="relative">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-9xl font-bold bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent relative"
                            >
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.4, type: "spring" }}
                                >
                                    {temp}°
                                </motion.span>
                            </motion.h1>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-4 -left-4 w-32 h-32 border-2 border-white/10 rounded-full"
                            />
                        </div>

                        <div className="space-y-2">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-3xl font-semibold capitalize"
                            >
                                {data.weather[0].description}
                            </motion.p>
                            <div className="flex items-center justify-center lg:justify-start gap-6 text-gray-300">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2"
                                >
                                    <Navigation className="w-4 h-4" />
                                    <span>{data.wind.speed} km/h</span>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2"
                                >
                                    <Cloud className="w-4 h-4" />
                                    <span>Visibility: {(data.visibility / 1000).toFixed(1)} km</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Animated Icon */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.6, type: "spring" }}
                        className="relative"
                    >
                        {/* Orbital Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-2 border-white/5 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-8 border border-white/10 rounded-full"
                        />

                        {/* Floating Icon */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, 0, -5, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
                            <img
                                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                                alt="weather icon"
                                className="w-64 h-64 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            />
                        </motion.div>

                        {/* Feels Like Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            className="absolute -bottom-4 -right-4 bg-linear-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full font-bold shadow-lg"
                        >
                            Feels like {Math.round(data.main.feels_like)}°
                        </motion.div>
                    </motion.div>
                </div>

                {/* Time Indicator */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 2 }}
                    className="mt-8 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full overflow-hidden"
                >
                    <motion.div
                        animate={{ x: ["0%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-20 h-full bg-white/30"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CurrentWeather;

