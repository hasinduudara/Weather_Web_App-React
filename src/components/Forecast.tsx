import { CalendarDays } from "lucide-react";

const Forecast = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
        <div className="bg-[#202B3B] p-6 rounded-3xl h-full flex flex-col">
            <div className="flex items-center gap-2 mb-6">
                <CalendarDays className="text-gray-400 w-5 h-5" />
                <h3 className="font-bold text-lg text-gray-200">7-Day Forecast</h3>
            </div>

            <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {days.map((day, i) => (
                    <div key={i} className="flex justify-between items-center text-sm p-3 hover:bg-[#2B384E] rounded-xl transition-colors cursor-pointer">
                        <span className="text-gray-400 w-12 font-medium">{day}</span>
                        <div className="flex items-center gap-2">
                            <img src="https://openweathermap.org/img/wn/10d.png" className="w-8 h-8" alt="" />
                            <span className="text-gray-300">Rainy</span>
                        </div>
                        <span className="font-bold text-white">24° <span className="text-gray-500 font-normal">/ 18°</span></span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;