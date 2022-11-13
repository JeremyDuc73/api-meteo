const temp = document.querySelector('#temperature')
const tempR = document.querySelector('#temperatureRessentie')
const humidite = document.querySelector('#humidite')
const ciel = document.querySelector('#ciel')


async function getMeteo(){

    let reponse = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Lyon,fr&lang=fr&APPID=ec1358047c3cb56e1ebbef8b7cbb2835&units=metric')

    let donnees = await reponse.json()
    console.log(donnees)
    return donnees

}
getMeteo().then(meteo=>{
    temp.textContent+=meteo.main.temp+'°C'
    tempR.textContent+=meteo.main.feels_like+'°C'
    humidite.textContent+=meteo.main.humidity+'%'
    ciel.textContent+=meteo.weather[0].description
})