function fetchWeather()
{
const apikey="3ac458dd326539b352f0eceaabb1ba0c";
var city=document.getElementById("city").value;
document.write("<table border='1'>");
document.write("<tr><td>Temperature</td><td>Humidity</td><td>Pressure</td>")
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
fetch(url).then((response)=>{return response.json()}).then(data=>{
    document.write(`<tr><td>${data.main.temp}</td><td>${data.main.humidity}</td><td>${data.main.pressure}</td></table>`)
}).catch(err=>console.log(err))
}
