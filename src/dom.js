import { getWeatherData } from './weatherData.js';


function getWeatherEmoji(icon) {
    if (!icon) return "❓"; // Handle undefined/null cases

    const emojiMap = {
        "rain": "🌧",
        "cloudy": "☁️",
        "partly cloudy day": "⛅",
        "partly cloudy night": "🌙☁️",
        "clear day": "☀️",
        "clear night": "🌌",
        "snow": "❄️",
        "thunderstorm": "⛈",
        "fog": "🌫",
        "windy": "💨"
    };

    // Normalize input: Replace dashes with spaces and convert to lowercase
    const normalizedIcon = icon.replace(/-/g, " ").toLowerCase();

    return emojiMap[normalizedIcon] || "❓";
}



export async function renderDom(location) {
    const loadingDiv = document.querySelector('.loading');
    loadingDiv.style.visibility = 'visible';
    loadingDiv.style.opacity = '1';
    const locality = document.querySelector('.locality');
    const toTitleCase = str => str.replace(/\b\w/g, c => c.toUpperCase());
    locality.textContent = toTitleCase(location);
    try {
        const weatherData = await getWeatherData(location);
        if (!weatherData) throw new Error("No weather data received");
        
        const { datetime, condition, temp, humidity, precipitation, icon } = weatherData;

        document.querySelector('.datetime').textContent = datetime;
        document.querySelector('.condition').textContent = condition;
        document.querySelector('.temp').textContent = `${temp}°F`;
        document.querySelector('.humidity').textContent = `${humidity}%`;
        document.querySelector('.precipitation').textContent = `${precipitation}mm`;
        document.querySelector('.icon').textContent = getWeatherEmoji(icon);
    } catch (error) {
        console.log("Failed to render weather data:", error);
    } finally {loadingDiv.style.opacity = '0';  // Fade out
        setTimeout(() => {
            loadingDiv.style.visibility = 'hidden';
        }, 300);
    }
}