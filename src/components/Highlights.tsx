import { Wind, Droplets, Eye } from "lucide-react";
import type { WeatherData } from "../types";
import { motion } from "motion/react";

interface Props {
    data: WeatherData;
}

// Animation Variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const Highlights = ({ data }: Props) => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
            {/* Reusable Card Component */}
            {[
                {
                    title: "Wind Status",
                    value: data.wind.speed,
                    unit: "km/h",
                    Icon: Wind,
                    color: "text-blue-400",
                },
                {
                    title: "Humidity",
                    value: data.main.humidity,
                    unit: "%",
                    Icon: Droplets,
                    color: "text-cyan-400",
                    bar: true,
                },
                {
                    title: "Visibility",
                    value: (data.visibility / 1000).toFixed(1),
                    unit: "km",
                    Icon: Eye,
                    color: "text-orange-400",
                },
            ].map((card, idx) => (
                <motion.div
                    key={idx}
                    variants={item}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl flex flex-col justify-between shadow-lg transition-colors"
                >
                    <div className="text-gray-400 text-sm mb-2">{card.title}</div>

                    <div className="flex items-center justify-between mb-2">
            <span className="text-4xl font-bold text-white">
              {card.value} <span className="text-lg text-gray-500 font-normal">{card.unit}</span>
            </span>
                        <card.Icon className={`${card.color} w-8 h-8`} />
                    </div>

                    {/* Progress Bar Animation for Humidity */}
                    {card.bar && (
                        <div className="w-full bg-white/10 h-2 rounded-full mt-2 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${card.value}%` }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full"
                            />
                        </div>
                    )}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Highlights;