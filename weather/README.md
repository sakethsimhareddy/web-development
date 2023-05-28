# Weather App

## Description
The Weather App is a simple web application that allows users to check the current weather conditions of any location around the world. It provides information such as temperature, humidity, wind speed, and a brief description of the weather.

## Features
- Search for weather conditions by location.
- Display current temperature, humidity, wind speed, and weather description.
- Background image changes based on weather conditions.
- Responsive design for a seamless experience on different devices.

## Technologies Used
- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Setup
To run the Weather App locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. Open the project folder:

   ```bash
   cd weather-app
   ```

3. Open `index.html` in your web browser.

## Configuration
The Weather App uses the OpenWeatherMap API to retrieve weather data. To configure the API integration, you need to obtain an API key from OpenWeatherMap. Follow these steps:

1. Sign up or log in to your OpenWeatherMap account.

2. Navigate to the API Keys section.

3. Generate a new API key.

4. Copy the API key and replace the placeholder in the `script.js` file:

   ```javascript
   const apiKey = 'YOUR_API_KEY';
   ```

## Usage
1. Enter the desired location in the search input field.

2. Press the Enter key or click the search button.

3. The current weather conditions for the specified location will be displayed.

4. To search for a different location, clear the input field and repeat steps 1-3.

## Screenshots
![Weather App](screenshots/weather-app.png)

## License
The Weather App is open-source software licensed under the [MIT license](LICENSE).
