//Async function always returns a promise
//Await pauses the execution of its surrounding async function until the promise is settled

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Call is successful');
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData() {
    await api();
    await api();
    console.log('After calls in function');
}

getWeatherData();
console.log('After calls outside function');

