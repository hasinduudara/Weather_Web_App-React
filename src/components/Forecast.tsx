import { CalendarDays, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Forecast = () => {
    const forecastData = [
        { day: "Mon", icon: "☀️", condition: "Sunny", high: 28, low: 22 },
        { day: "Tue", icon: "⛅", condition: "Partly Cloudy", high: 26, low: 21 },
        { day: "Wed", icon: "🌧️", condition: "Rainy", high: 24, low: 20 },
        { day: "Thu", icon: "☁️", condition: "Cloudy", high: 25, low: 19 },
        { day: "Fri", icon: "🌤️", condition: "Mostly Sunny", high: 27, low: 21 },
        { day: "Sat", icon: "⚡", condition: "Stormy", high: 23, low: 18 },
        { day: "Sun", icon: "🌈", condition: "Clear", high: 29, low: 23 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative h-full"
        >
            {/* Glass Morphism Container */}
            <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 h-full shadow-2xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]" />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="flex items-center justify-between mb-8"
                    >
                        <div className="flex items-center gap-3">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2 rounded-xl backdrop-blur-sm"
                            >
                                <CalendarDays className="text-blue-300 w-6 h-6" />
                            </motion.div>
                            <div>
                                <h3 className="font-bold text-xl text-white">7-Day Forecast</h3>
                                <p className="text-xs text-gray-400">Next week's outlook</p>
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ x: 5 }}
                            className="text-gray-400 hover:text-white p-2"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>

                    {/* Forecast List */}
                    <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        {forecastData.map((day, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    borderColor: "rgba(255, 255, 255, 0.2)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative p-4 rounded-2xl border border-white/10 backdrop-blur-sm cursor-pointer"
                            >
                                {/* Hover Gradient Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                                <div className="relative flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.1, 1],
                                                rotate: [0, 5, 0]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: i * 0.3
                                            }}
                                            className="text-2xl"
                                        >
                                            {day.icon}
                                        </motion.div>
                                        <div>
                                            <div className="font-semibold">{day.day}</div>
                                            <div className="text-xs text-gray-400 group-hover:text-gray-300">
                                                {day.condition}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        {/* Temperature Bar */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "60px" }}
                                            transition={{ delay: i * 0.2, duration: 1 }}
                                            className="relative h-2 bg-gray-700 rounded-full overflow-hidden"
                                        >
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(day.high - day.low) * 3}px` }}
                                                transition={{ delay: i * 0.3, duration: 1 }}
                                                className="absolute h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                                            />
                                        </motion.div>

                                        <div className="text-right">
                                            <div className="font-bold text-lg">
                                                {day.high}°
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                {day.low}°
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Animated Underline */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent origin-left"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="pt-6 mt-6 border-t border-white/10"
                    >
                        <div className="text-center text-sm text-gray-400">
                            Updated just now • Source: OpenWeather
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"
            />
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, -5, 0, 5, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 rounded-full blur-sm"
            />
        </motion.div>
    );
};

export default Forecast;