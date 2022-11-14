function loadCoupon() {
  document.getElementById("coupon").style.visibility = "visible";
  document.getElementById("main").style.opacity = "0.9";
}

function closeCoupon() {
  document.getElementById("coupon").style.visibility = "hidden";
  document.getElementById("main").style.opacity = "1";
}
// ==== Dark theme =====


function changeMode() {
  let mybody = document.body;
  mybody.classList.toggle("mydark");
}


// Geolocation //

let x = document.getElementById('out');
let y = document.getElementById('weatherOut');
function geolocation(){
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition)  
    }
    else
    {
        x.innerText = "Geo Not Supported"    
    }
}
function showPosition(data){
    console.log(data)
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    let y = document.getElementById('weatherOut');
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    //api calling
    fetch(url,{method: 'GET'})
    // return promise
    .then((res) => res.json())
    // resolve promise
    .then((data) => {
        console.log(data)
        let cityName = data.city.name;
        let temp = data.list[0].temp.day;
        y.innerText = `City: ${cityName} \n Temp: ${temp} °C`
    })
    .catch((err) => {
        console.log(err)
    })
}


// hide menu bar



function togglebtn(){
  let navBar = document.getElementById("navBar");
  navBar.classList.toggle("hidemenu");
}