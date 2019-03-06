


function preload() {

}

function setup() {
    createCanvas(500, 500);
    background(30);
    getPosition((pos, err) => {

        if (pos) {
            updateWeather(pos.coords.latitude,
                          pos.coords.longitude);
        }        

    })
    fill(255);
}

function draw() {
}

function getPosition(callback) {
    navigator.geolocation.getCurrentPosition((pos) => {
        background(30, 60, 30);
        callback(pos);
        console.log("Got position", pos);
    }, (err) => {
        background(60, 30, 30);
        console.err("Couldn't get position", err);
        callback(null, err);
    });
}


function updateWeather(lat, long) {
   fetch(`https://api.weather.gov/points/${lat},${long}`)
    .then((res) => {
        background(30, 100, 30);
        console.log("Got weather data", res);
        return res.json();
    })
    .then(resText => {
        console.log("Response text", resText)
    })
    .catch((err) => {
        background(100, 30, 30);
        console.error("Error fetching weather data", err);

    })
} 