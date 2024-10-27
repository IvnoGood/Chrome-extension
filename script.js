
document.getElementById('Call').addEventListener('click',
    async function GetWeather() {
        let zone = document.getElementById('zone')
        let tempText = document.getElementById('temp')
        const url = "https://open-weather13.p.rapidapi.com/city/" + zone.value + "/FR";
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '0e99db5948mshee2432ca839f1b6p16c2dfjsn053212a45f2b',
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
            let JsonResult = JSON.parse(result);
            console.log(JsonResult);
            console.log(JsonResult.main.temp);
            tempText.innerHTML = "It's: " + JsonResult.main.temp + "°C"

        } catch (error) {
            console.error(error);
        }

    });

