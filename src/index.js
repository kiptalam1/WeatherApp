import "./styles.css";
import { getWeatherData } from './weatherData.js';
import { getLocation } from './formInput.js';
import { renderDom } from './dom.js';

const form = document.getElementById('locationForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const location = getLocation();

    if (location) {
        getWeatherData(location);
    }
});

renderDom();