const restoreOptions = () => {
    chrome.storage.local.get(
        { temp: 'Fahrenheit' },
        (items) => {
            let tempUnit = items.temp;
            let checkbox = document.getElementById('tempUnit');
            console.log(items.temp)
            if (tempUnit == 'Celsius') {
                checkbox.checked = true
            } else {
                checkbox.checked = false
            }
        }
    );
};

document.addEventListener('DOMContentLoaded', restoreOptions);


document.getElementById('Call').addEventListener('click',
    async () => {

        let zone = document.getElementById('zone');
        let tempText = document.getElementById('temp');
        let image = document.getElementById('clouds');
        let checkbox = document.getElementById('tempUnit');


        const url = "https://open-weather13.p.rapidapi.com/city/" + zone.value + "/FR";
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '0e99db5948mshee2432ca839f1b6p16c2dfjsn053212a45f2b',
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }
        };

        try {

            /*             const response = await fetch(url, options);
                        const result = await response.text(); //TODO: remove this to re-activate the api
                        console.log(result);
                        let JsonResult = JSON.parse(result); */

            let JsonResult;

            await fetch('./file.json')
                .then(response => response.json())
                .then(data => {
                    JsonResult = data;
                    console.log("Data inside then:", JsonResult);
                })
                .catch(error => console.error('Error:', error));



            console.log(JsonResult);
            console.log(JsonResult.main.temp);
            let Celsius = Math.round((JsonResult.main.temp - 32) * 5 / 9);
            let Fahrenheit = JsonResult.main.temp;
            console.log(checkbox.value);

            if (checkbox.value == "on") {
                tempText.innerHTML = "It's: " + Celsius + "°C";
            } else {
                tempText.innerHTML = "It's: " + Fahrenheit + "°F"
            }

            let src = "https://openweathermap.org/img/wn/" + JsonResult.weather[0].icon + "@2x.png";
            console.log(src);
            image.src = src;

        } catch (error) {
            console.error(error);
        }

    });