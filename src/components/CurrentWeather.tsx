import { MapPin } from "lucide-react";
import { WeatherData } from "../types";
import { motion } from "motion/react";

interface Props {
    data: WeatherData;
}

const CurrentWeather = ({ data }: Props) => {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-[#202B3B] to-[#1a2332] p-6 md:p-8 rounded-[30px] md:rounded-[40px] flex flex-col md:flex-row justify-between items-center relative overflow-hidden shadow-lg"
        >
            <div className="z-10 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 mb-4">
                    <MapPin size={18} />
                    <span className="text-lg font-medium">{data.name}, {data.sys.country}</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-tighter">
                    {Math.round(data.main.temp)}°
                </h1>
                <p className="text-xl text-gray-300 capitalize font-medium">
                    {data.weather[0].description}
                </p>
            </div>

            <div className="relative mt-6 md:mt-0">
                {/* Glow Effect */}
                <div className="w-32 h-32 md:w-40 md:h-40 bg-blue-500/30 rounded-full blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <img
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                    alt="weather icon"
                    className="w-40 h-40 md:w-52 md:h-52 object-contain z-10 relative drop-shadow-2xl"
                />
            </div>
        </motion.div>
    );
};

export default CurrentWeather;