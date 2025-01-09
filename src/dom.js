import { getWeatherData } from './weatherData.js';

export async function renderDom(location) {
    const loadingDiv = document.querySelector('.loading');
    loadingDiv.style.visibility = 'visible';
    loadingDiv.style.opacity = '1';

    try {
        const { datetime, condition, temp, humidity, precipitation, icon } = await getWeatherData(location);

        document.querySelector('.datetime').textContent = datetime;
        document.querySelector('.condition').textContent = condition;
        document.querySelector('.temp').textContent = temp;
        document.querySelector('.humidity').textContent = humidity;
        document.querySelector('.precipitation').textContent = precipitation;
        document.querySelector('.icon').textContent = icon;
    } catch (err) {
        console.log("Failed to render weather data:", error);
    } finally {loadingDiv.style.opacity = '0';  // Fade out
        setTimeout(() => {
            loadingDiv.style.visibility = 'hidden';
        }, 300);
    }
}