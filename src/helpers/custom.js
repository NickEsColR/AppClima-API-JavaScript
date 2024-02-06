const API_KEY = '41d1d7f5c2475b3a16167b30bc4f265c'

export const callAPI = (city, country) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => {
                console.log(error);
                reject(error);
            });
    });
}

export const kelvinToCentigrade = (temp) => {
    return parseInt(temp - 273.15);
}
