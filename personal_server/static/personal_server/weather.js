$(document).ready(function(){
  var lat ;
  var long ;
  var api;
  var tempSwap = true;
  var city;
  var tempC;
  var tempF;
  var windk;
  var windM;
  var weatherString;
  
  //getting the users position
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    lat=position.coords.latitude;
    long=position.coords.longitude;
    
    //needed the https://cors-anywhere.herokuapp.com for codepen
    var api="https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long +"&APPID=44762e241a2c3fc4f616e416abc08f0e";
     console.log(api);
    //making the api using users location
   $.getJSON(api, function(weatherData) {
      
      city = weatherData.name;
      var main = weatherData.main;
      tempC =(weatherData.main.temp - 273.15).toFixed(0);
      tempF = (((weatherData.main.temp - 273.15)*1.8) + 32).toFixed(0);
      windk = (weatherData.wind.speed * 3.6).toFixed(2);
      windM = (weatherData.wind.speed * 2.23).toFixed(2);
      weatherString = weatherData.weather[0].description;   
     $('.city').html("Location: "+ city);
     $('.temper').html("Temperature: "+ tempC);
     $('.wind').html("Wind Speed: "+ windk);
     $('.description').html("Weather Today: "+ weatherString);
     
     var iconCode = weatherData.weather[0].icon;
     var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

    $(".icon").html("<img src='" + iconUrl  + "'>");
     
     
   
     
   });
  });
    
   
    
    
    
   //Temperature from C to F and vice versa
    $(".temper-value").click(function(){
      if($('.temper-value').text()=="C"){
      $('.temper-value').html("F");
      $('.temper').html("Temperature: "+ tempF);
      }
      else{
         $('.temper-value').text("C");
      $('.temper').html("Temperature: "+ tempC);
      }
});
    
    
     //Temperature from C to F and vice versa
    $(".wind-button").click(function(){
      if($('.wind-button').text()=="km/h"){
      $('.wind-button').html("m/h");
      $('.wind').html("Wind Speed: "+ windM);
      }
      else{
        $('.wind-button').html("km/h");
      $('.wind').html("Wind Speed: "+ windk);
      }
});
    
   
    
    
    
    
    
}else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
}
  
  
});