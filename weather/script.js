let  searchbtn =document.querySelector("#searchbtn")
const apiKey = 'YOUR_API_KEY';
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function weather(place) {
        const respone = await fetch(apiurl + place +'&appid=' +apiKey);
        var data = await respone.json();
        console.log(data);
       
        if(data.cod==='404'){
            alert('enter a valid place');
        }else{
            let start =document.getElementById('start');
            let weatherDispaly=document.getElementById('weather');
            let body = document.querySelector('body');
            document.getElementById("name").innerHTML='Weather in '+ place
            document.getElementById('temp').innerHTML='Temperature: '+data.main.temp+ '°C';
            document.getElementById('wind') .innerHTML='wind speed: '+ data.wind.speed ;
            document.getElementById('description').innerHTML="Description: "+data.weather[0].description
            document.getElementById('humidity').innerHTML='Humidity: '+data.main.humidity;
            start.style.display= 'none'
            weatherDispaly.style.display='contents'
            if (data.weather[0].main==='Clouds') {
                body.style.background="url('img/clouds.jpg') no-repeat center center/cover"
            }
            if (data.weather[0].main==='Rain') {
                body.style.background="url('img/rain.jpg') no-repeat center center/cover"
            }
            if (data.weather[0].main==='Clear') {
                body.style.background="url('img/clear.jpg') no-repeat center center/cover"
            }
            if (data.weather[0].main==='Mist') {
                body.style.background="url('img/mist.jpg') no-repeat center center/cover"
            }
            if (data.weather[0].main==='Drizzle') {
                body.style.background="url('img/drizzle.jpg') no-repeat center center/cover"
            }
            if (data.weather[0].main==='Snow') {
                body.style.background="url('img/show.jpg') no-repeat center center/cover"
            }
        }

}
searchbtn.addEventListener('click',()=>{
    let place =document.getElementById('search');
    if (place.value===''){
        alert('enter a place')
    }
    else{
    data=weather(place.value);
    
    }
        
})
