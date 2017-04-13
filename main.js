//Get from procedure
if (process.argv[2] === "" || process.argv[2] === null || typeof process.argv[2] === 'undefined' || !process.argv[2]) {
    console.log("Morate uneti grad.");
} else {
    var grad = process.argv[2];
    if (!process.argv[3]) {
        vreme(grad);
    } else {
        grad = grad + process.argv[3];
        vreme(grad);
    }
}
//Funkcija za svlacenje Vremenske prognoze
function vreme(grad) {
    var request = require("request");
    var tryjson = require('tryjson');
    url = "http://api.openweathermap.org/data/2.5/weather?q=" + grad + "&appid=4e0dea64696ee38aca5a770cb83df195&units=metric";
    request(url, function (error, response, body) {
        if (!error) {
            var data = tryjson.parse(body);
            //console.log(data);
            console.log("Grad: " + data.name + " - Temperatura: " + data.main.temp + "°C - Pritisak: " + data.main.pressure
                    + "\ - Temp.min: " + data.main.temp_min + "°C - Temp.max: " + data.main.temp_max + "°C - Brzina vetra: "
                    + data.wind.speed + "m/s -" + " Koordinate: " + data.coord.lon + ", " + data.coord.lat + "");
        } else {
            console.log("Nepoznato");
        }
    });
}