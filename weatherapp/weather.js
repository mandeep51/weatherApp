const API_KEY = `4675ca6f0563d2046ac4a1d59ecf476d`;

//to fetch data from api
function f1() {
  let city = document.getElementById("cityname").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  )
    .then(async (data) => {
      console.log(data);
      const m1 = await data.json();
      console.log(m1);
      console.table(m1)
      showdata(m1);
    })
    .catch((error) => {
      console.log(error);
    });

  //to show data in web page
  function showdata(data) {
    document.getElementById("weather").innerHTML = `<div>
            <h2 style="text-transform:capitalize;">${city} , ${data.sys.country}</h2>
            <h2>${data.main.temp} °C</h2>
            <p>min temprature:${data.main.temp_min} °C</p>
   <p>max temprature:${data.main.temp_max} °C</p>
   <p>feels like:${data.main.feels_like} °C</p>
   <p>pressure:${data.main.pressure} hPa</p>
   <p>sunrise:${data.sys.sunrise}</p>
    <p>sunset:${data.sys.sunset}</p>
    <p>windspeed:${data.wind.speed} MPH</p>
    <p>description:${data.weather[0].description}</p>
        </div>`;
  }
}
