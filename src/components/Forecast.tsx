import { CalendarDays } from "lucide-react";
import { motion } from "motion/react";

const Forecast = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[35px] h-full flex flex-col shadow-xl"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500/20 p-2 rounded-xl">
                    <CalendarDays className="text-blue-400 w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-white">7-Day Forecast</h3>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {days.map((day, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                        className="flex justify-between items-center text-sm p-4 rounded-2xl cursor-pointer border border-transparent hover:border-white/5 transition-all group"
                    >
                        <span className="text-gray-400 w-12 font-medium group-hover:text-white transition-colors">{day}</span>
                        <div className="flex items-center gap-2">
                            <img src="https://openweathermap.org/img/wn/10d.png" className="w-8 h-8" alt="" />
                            <span className="text-gray-400 group-hover:text-blue-200 transition-colors">Rainy</span>
                        </div>
                        <span className="font-bold text-white">24° <span className="text-gray-500 font-normal">/ 18°</span></span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Forecast;