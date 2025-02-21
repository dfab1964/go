
// ---------------- data -----------------
window.current = `{
  "location": {
    "name": "New York",
    "region": "New York",
    "country": "United States of America",
    "lat": 40.71,
    "lon": -74.01,
    "tz_id": "America/New_York",
    "localtime_epoch": 1658522976,
    "localtime": "2022-07-22 16:49"
  },
  "current": {
    "last_updated_epoch": 1658522700,
    "last_updated": "2022-07-22 16:45",
    "temp_c": 34.4,
    "temp_f": 93.9,
    "is_day": 1,
    "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "code": 1003
    },
    "wind_mph": 16.1,
    "wind_kph": 25.9,
    "wind_degree": 180,
    "wind_dir": "S",
    "pressure_mb": 1011,
    "pressure_in": 29.85,
    "precip_mm": 0,
    "precip_in": 0,
    "humidity": 31,
    "cloud": 75,
    "feelslike_c": 37,
    "feelslike_f": 98.6,
    "vis_km": 16,
    "vis_miles": 9,
    "uv": 8,
    "gust_mph": 11.6,
    "gust_kph": 18.7,
    "air_quality": {
      "co": 293.70001220703125,
      "no2": 18.5,
      "o3": 234.60000610351562,
      "so2": 12,
      "pm2_5": 13.600000381469727,
      "pm10": 15,
      "us-epa-index": 1,
      "gb-defra-index": 2
    }
  }
}`;

// ----------- functions ------------------

async function fetchCurrentInfo(city) {
    const url = 'https://api.weatherapi.com/v1/current.json?q=' + city + '&lang=en&key=474c3630fc564cefbe9170341251402';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;  // Return the data when the fetch is successful
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;  // Propagate the error if needed
    }
}

async function fetchLocationData() {
    try {
        var ip = await fetchPublicIP();

        const locationResponse = await fetch(`https://api.weatherapi.com/v1/ip.json?key=${apiKey}&q=${ip}`);
        const locationData = await locationResponse.json();

        return locationData;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;  // Propagate the error if needed
    }

}

async function fetchPublicIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        console.log('Your Public IP Address is:', data.ip);
    } catch (error) {
        console.error('Error getting IP address:', error);
    }
}