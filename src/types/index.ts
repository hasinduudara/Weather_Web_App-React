export interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
        feels_like: number;
        pressure: number;
    };
    weather: {
        main: string;
        description: string;
        icon: string;
    }[];
    wind: {
        speed: number;
    };
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    visibility: number;
}