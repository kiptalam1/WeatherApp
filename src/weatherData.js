//import { getLocation } from './formInput.js';


export async function getWeatherData(loc) {
    try {
        const encodedLocation = encodeURI(loc)
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedLocation}?unitGroup=us&key=LR3PFLNQTH4473U4SE6UNZUQ6`, {mode: 'cors'});
        const data = await response.json();

        const condition = data.currentConditions.conditions;
        const humidity = data.currentConditions.humidity;
        const icon = data.currentConditions.icon;
        const temp = data.currentConditions.temp;
        const precipitation = data.currentConditions.precip;
        const datetime = data.currentConditions.datetime;

        return { condition, datetime, humidity, temp, precip, icon };
    } catch (err) {
        console.log(err);
    }
}

