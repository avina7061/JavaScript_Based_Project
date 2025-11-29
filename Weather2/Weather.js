
let p = fetch("https://api.openweathermap.org/data/2.5/weather?q=darbhanga&appid=c5416e852f9208f61354ae75f30ea2bc&units=metric")

p.then((response) => {
    return response.json()

}).then((response) => {
    console.log(response)

    document.querySelector(".city").innerHTML = response.name;
    console.log(response.main.temp)
    document.querySelector(".temp").innerHTML = response.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = response.main.humidity +"%";
    document.querySelector(".wind").innerHTML = response.wind.speed + "Km/h";
})


let data = function (name) {

    let p = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=c5416e852f9208f61354ae75f30ea2bc&units=metric`)

    p.then((response) => {
        return response.json()
    }).then((response) => {
        console.log(response)
        
        document.querySelector(".city").innerHTML = response.name;
        console.log(response.main.temp)
        document.querySelector(".temp").innerHTML = response.main.temp +"°C";
        document.querySelector(".humidity").innerHTML = response.main.humidity +"%";
        document.querySelector(".wind").innerHTML = response.wind.speed + "Km/h";
        let take = document.querySelector(".wheat");
        console.log(take)
        if (response.weather[0].main == "Mist") {
            take.src = "./images/mist.png";
            console.log(take.src)
        }
        else if (response.weather[0].main == "Humidity") {
            take.src = "./images/humidity.png";
        }
        else if (response.weather[0].main == "Clouds") {
            take.src = "./images/clouds.png"
        }
        else if (response.weather[0].main == "Clear") {
            take.src = "./images/clear.png"
        }
        else if (response.weather[0].main == "Drizzle") {
            take.src = "./images/drizzle.png"
        }
        else if (response.weather[0].main == "Snow") {
            take.src = "./images/snow.png"
        }


    })
}

document.querySelector('.search').onclick = function () {
    const a = document.querySelector(".text");

    if (a.value.length == 0) {
        alert("City ka name tera Bap dalega")
    }
    else {
        try {
            data(a.value);
            a.value = "";
        }
        catch (e) {

        }
    }

}

