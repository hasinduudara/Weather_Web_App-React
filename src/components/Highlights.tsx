import { Wind, Droplets, Sun, Eye } from "lucide-react";
import { WeatherData } from "../types";

interface Props {
    data: WeatherData;
}

const Highlights = ({ data }: Props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

            {/* Wind Card */}
            <div className="bg-[#202B3B] p-5 rounded-3xl flex flex-col justify-between">
                <div className="text-gray-400 text-sm mb-2">Wind Status</div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">{data.wind.speed} <span className="text-sm text-gray-500">km/h</span></span>
                    <Wind className="text-blue-400 w-8 h-8" />
                </div>
            </div>

            {/* Humidity Card */}
            <div className="bg-[#202B3B] p-5 rounded-3xl flex flex-col justify-between">
                <div className="text-gray-400 text-sm mb-2">Humidity</div>
                <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-bold">{data.main.humidity} <span className="text-sm text-gray-500">%</span></span>
                    <Droplets className="text-blue-400 w-8 h-8" />
                </div>
                <div className="w-full bg-gray-700 h-1.5 rounded-full">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${data.main.humidity}%` }}></div>
                </div>
            </div>

            {/* Feels Like / Visibility */}
            <div className="bg-[#202B3B] p-5 rounded-3xl flex flex-col justify-between">
                <div className="text-gray-400 text-sm mb-2">Visibility</div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">{(data.visibility / 1000).toFixed(1)} <span className="text-sm text-gray-500">km</span></span>
                    <Eye className="text-orange-400 w-8 h-8" />
                </div>
            </div>

        </div>
    );
};

export default Highlights;