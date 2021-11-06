const request = require('request');
const searchArray = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/images/search?q=${searchArray[0]}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Page does not exist");
    return;
  }

  console.log(response);
  console.log(data[0].description);
});