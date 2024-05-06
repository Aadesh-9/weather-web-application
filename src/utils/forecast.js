const request = require("request");

const weatherForcast = (city, callback) => {
  const API_KEY = "bbd9078a642543ac98e130131241003";

  const url =
    "http://api.weatherapi.com/v1/current.json?key=" + API_KEY + "&q=" + city;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      return callback({
        error: "Unable to connect to weather service!",
      });
    } else if (response.body.error) {
      return callback({
        error: "Unable to find location. Try another search.",
      });
    } else {
      const location =
        response.body.location.name + " , " + response.body.location.region;
      const currTemp = response.body.current.temp_c;

      const weatherInfo = {
        location,
        currTemp,
      };
      callback(weatherInfo);
    }
  });
};

module.exports = weatherForcast;
