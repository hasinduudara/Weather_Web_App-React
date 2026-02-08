import { MapPin } from "lucide-react";
import type { WeatherData } from "../types";
import { motion } from "motion/react";

interface Props {
    data: WeatherData;
}

const CurrentWeather = ({ data }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative overflow-hidden p-8 rounded-[40px] shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
            {/* Background Gradient Blob */}
            <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px]" />

            <div className="flex flex-col md:flex-row justify-between items-center z-10 relative">
                <div className="text-center md:text-left space-y-2">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 bg-white/10 w-fit px-4 py-1.5 rounded-full mx-auto md:mx-0 backdrop-blur-md">
                        <MapPin size={16} className="text-blue-400" />
                        <span className="text-sm font-medium tracking-wide">
              {data.name}, {data.sys.country}
            </span>
                    </div>

                    <div className="relative">
                        <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tighter">
                            {Math.round(data.main.temp)}°
                        </h1>
                    </div>

                    <p className="text-2xl text-blue-200/80 capitalize font-medium">
                        {data.weather[0].description}
                    </p>
                </div>

                {/* Floating Icon Animation */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative mt-8 md:mt-0"
                >
                    <div className="w-40 h-40 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <img
                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                        alt="weather icon"
                        className="w-52 h-52 object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CurrentWeather;