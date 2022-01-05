
// Переменные
const form = document.querySelector('form');
const resultData = document.getElementById('resultData');
const ipData = document.getElementById('ipData');
const timezoneData = document.getElementById('timezoneData');
const countryData = document.getElementById('countryData');
const regionData = document.getElementById('regionData');
const cityData = document.getElementById('cityData');
const indexData = document.getElementById('indexData');

// Прослушиватель событий
document.querySelector('form').addEventListener('submit', (event) => {

    // Отключаем обновление страницы
    event.preventDefault();

    let ipValue = form.elements.ip.value;

    let endpoint = 'http://ip-api.com/json/' + ipValue;

    // Создаем объект XMLHTTPRequest
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            if(response.status !== 'success') {
                console.log('query failed: ' + response.message);
            }

            //Очищаем input
            document.getElementById('ipName').value = '';

            // console.log(response);

            if(response.status == 'fail') {
                resultData.style.display = 'none';
            } else {
                resultData.style.display = 'block';
            }

            // Записываем полученные данные в HTML
            ipData.innerText = response.query;
            timezoneData.innerText = response.timezone;
            countryData.innerText = response.country + ', ' + response.countryCode;
            regionData.innerText = response.regionName + ', ' + response.region;
            cityData.innerText = response.city;
            indexData.innerText = response.zip;

        }
    };
    xhr.open('POST', endpoint, true);
    xhr.send();
})