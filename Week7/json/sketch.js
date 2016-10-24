var weather;

function setup() {
  noLoop();
	
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,UK'+
   '&APPID=7bbbb47522848e8b9c26ba35c226c734';
  
  var weatherInLondon = openWeather.getWeather('London');
 
	weather = loadJSON(url, drawWeather);
	// println('hello');
}

function drawWeather() {
  background(200);
  // get the humidity value out of the loaded JSON
  var humidity = weather.main.humidity;
	
	println(weather.main['temp']); // weather.main.temp === weather.main['temp'];
	
	var description = weather.weather[0].description;
	
	// println(description);
	// println(humidity);
  fill(0, humidity); // use the humidity value to set the alpha
  ellipse(width/2, height/2, 50, 50);
}