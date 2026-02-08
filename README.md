# 🌤️ Weather Web App

A modern, responsive weather application built with React, TypeScript, and Vite. Get real-time weather information for any city worldwide with a beautiful, animated user interface.

<img width="1898" height="1019" alt="image" src="https://github.com/user-attachments/assets/0b20d003-8229-4b61-8a15-86077bbb134d" />

## ✨ Features

- 🔍 **City Search**: Search for weather information for any city worldwide
- 🌡️ **Current Weather**: Real-time temperature, weather conditions, and location details
- 📊 **Weather Highlights**: Comprehensive weather metrics including:
  - Humidity levels
  - Wind speed
  - Atmospheric pressure
  - Visibility
  - Sunrise/Sunset times
  - "Feels like" temperature
- 📅 **Recent Searches**: Quick access to your last 5 searched cities
- 🎨 **Beautiful UI**: Modern glassmorphism design with smooth animations
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and production builds
- 🌐 **TypeScript**: Full type safety for robust code

## 🚀 Demo

Visit the live demo: [Weather Web App](https://weather-web-app-react-kappa.vercel.app/)

## 🛠️ Technologies Used

- **React 19.2.0** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **Motion (Framer Motion)** - Animation library
- **Lucide React** - Beautiful icon library
- **date-fns** - Modern date utility library
- **OpenWeatherMap API** - Weather data provider

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn package manager
- An API key from [OpenWeatherMap](https://openweathermap.org/api)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hasinduudara/Weather_Web_App-React.git
   cd Weather_Web_App-React
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

   To get your API key:
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Navigate to API Keys section
   - Copy your API key

4. **Run the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🎯 Usage

1. **Search for a City**: Click the search icon in the top-right corner
2. **Enter City Name**: Type the name of any city
3. **View Weather Data**: See current weather, highlights, and forecasts
4. **Recent Searches**: Click on any recent search to quickly view that city's weather again

## 📁 Project Structure

```
Weather-Web-App/
├── public/
│   └── weather.png          # App icon
├── src/
│   ├── assets/              # Static assets
│   ├── components/          # React components
│   │   ├── CurrentWeather.tsx
│   │   ├── Forecast.tsx
│   │   └── Highlights.tsx
│   ├── services/            # API services
│   │   └── weatherService.ts
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx              # Main application component
│   ├── App.css              # Application styles
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── .env                     # Environment variables (create this)
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md               # Project documentation
```

## 🎨 Features in Detail

### Current Weather Component
- Displays current temperature with animated weather icons
- Shows city name and country
- Real-time weather description
- Glassmorphism UI design with gradient animations

### Highlights Component
- Comprehensive weather metrics in an organized grid layout
- Visual icons for each metric
- Dynamic background animations
- Responsive card design

### Search Functionality
- Smooth slide-in animation for search panel
- Recent searches history (stores last 5 searches)
- Click outside to close
- Real-time city search with error handling

## 🐛 Troubleshooting

**Issue**: API requests fail
- **Solution**: Verify your API key is correct in the `.env` file
- **Solution**: Check if you have an active internet connection
- **Solution**: Ensure your API key is active (new keys may take a few minutes)

**Issue**: City not found error
- **Solution**: Check the spelling of the city name
- **Solution**: Try including the country code (e.g., "London, UK")

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Hasindu Udara**

- 💼 LinkedIn: [https://www.linkedin.com/in/hasindu-udara/](https://www.linkedin.com/in/hasindu-udara/)
- 📧 Email: hasiduudara@gmail.com
- 🔗 GitHub: [@hasinduudara](https://github.com/hasinduudara)

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap API](https://openweathermap.org/)
- Icons by [Lucide React](https://lucide.dev/)
- Design inspiration from modern weather applications
- Built with love using React and TypeScript ❤️

---

⭐ If you found this project helpful, please give it a star!

Made with ☕ and ❤️ by [Hasindu Udara](https://www.linkedin.com/in/hasindu-udara/)
