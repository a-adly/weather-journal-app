/* Global Variables */

const APIKey = "4ec2de63a97b9f5d19f76094829ecc48",
    UI = {
        generateBtn: document.querySelector('#generate'),
        zip: document.querySelector('#zip'),
        feelings: document.querySelector('#feelings'),
        date: document.querySelector('#date'),
        temp: document.querySelector('#temp'),
        content: document.querySelector('#content'),
    }


UI.generateBtn.addEventListener('click', callAPI)


async function callAPI() {

    const baseURL = "http://api.openweathermap.org/data/2.5/weather?",
        zip = UI.zip.value;
    if (isNaN(zip)) {
        alert('Please check the entered zip code.')
        return;
    }
    const params = {
            zip,
            appid: APIKey,
            units: 'imperial'
        },
        query = Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&'),
        url = baseURL + query,
        weatherData = await retrieveData(url);

    if (!('main' in weatherData) || !('temp' in weatherData.main)) return;

    const data = {
        temperature: weatherData.main.temp,
        date: getCurrentDate(),
        userResponse: UI.feelings.value
    }

    await postData('/add', data)
    retrieveData('/all').then(updateUI)
}


// Async GET
async function retrieveData(url = '') {
    const request = await fetch(url);
    try {
        const allData = await request.json()
        return allData
    } catch (error) {
        console.log("error", error);
    }
};


// Async POST
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};


function updateUI(res) {
    try {
        UI.temp.innerHTML = res.temperature;
        UI.content.innerHTML = res.userResponse;
        UI.date.innerHTML = res.date;
    } catch (error) {
        console.log("updateUI error", error);
    }
}


function getCurrentDate() {
    let d = new Date();
    return (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();
}