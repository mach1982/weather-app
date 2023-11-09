
/* // function to get city name   */ 
function getCity (){
 const city=document.getElementById("cityInput").value;
 fetchWeather(city)

}


async function fetchWeather(city){

 /*  // connecting api */
const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1499bed3ace74172a3b215054231109&q=${city}`,{ mode: 'cors' });
    /* // if the response is no a 200 throw network error */
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    /*  getting weather data using the await promise */
    const weatherData = await response.json();

    console.log(weatherData);
    

    const loc = weatherData.location.name;
    const temp_c = weatherData.current.temp_c;
    const imageIcon = weatherData.current.condition.icon;
    const imageText = weatherData.current.condition.text;
    console.log(loc);

    /* Creating H1 element to display the data */
    const h1Element = document.createElement('h1');
    h1Element.innerHTML = `
                          
                          ${loc}
                          <br />
                          <br />
                          ${temp_c}\u2103  
                          <br />
                          <br />
                          <img src="${imageIcon}" alt="${imageText}">
                          <br />
                          <br />
                          ${imageText}
                          
                          `;

    const manDiv = document.getElementById('app');
    /* adding city input field  */
    manDiv.innerHTML = `<input type="text" id="cityInput" placeholder="Enter Location">
    <button onclick="getCity()">Get Weather</button>` 
    /* Appending h1 to DOM */
    manDiv.appendChild(h1Element);
    

  }

    








 


