import { getWeatherData } from './weatherData.js';

export function renderDom() {
    const { condition, datetime, humidity, temp, precip, icon } = getWeatherData();
    
}
