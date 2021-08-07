
    fetch('http://api.ipapi.com/103.158.125.22?access_key=40d514aaaec720b7e60ef20368c1e1c7')
    .then((res)=>{
return res.json()
    })
    .then((data)=>{
       document.querySelector('#location').innerHTML =  data.location.capital
   dat(data.location.capital)      
    })

    function dat(id){
       let city = id
       let appId = '4bd2b22492233492c61f42a77bb1c436'
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`)
      .then((res)=>{
  return res.json()
      })
      .then((data)=>{
          console.log(data);
document.querySelector('#desc').innerHTML = data.weather[0].main
document.querySelector('#string').innerHTML = 'wind: ' + data.wind.speed
document.querySelector('#pressaure').innerHTML ='pressure: ' + data.main.pressure
document.querySelector('#humidity').innerHTML = 'humidity: '+data.main.humidity
document.querySelector('#wind').innerHTML = 'Temp: '+data.main.temp
document.querySelector('#icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      })
    }

document.querySelector('#change').addEventListener('click',()=>{
    let val = document.querySelector('#input-value').value
    let appId = '4bd2b22492233492c61f42a77bb1c436'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${appId}`)
    .then((res)=>{
return res.json()
    })
    .then((data)=>{
document.querySelector('#location').innerHTML =  data.name
document.querySelector('#desc').innerHTML = data.weather[0].main
document.querySelector('#string').innerHTML = 'wind: ' + data.wind.speed
document.querySelector('#pressaure').innerHTML ='pressure: ' + data.main.pressure
document.querySelector('#humidity').innerHTML = 'humidity: '+data.main.humidity
document.querySelector('#wind').innerHTML = 'Temp: '+data.main.temp

    })
})

