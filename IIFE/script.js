// //Async function always returns a promise
// //Await pauses the execution of its surrounding async function until the promise is settled

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Call is successful');
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
//     await api();
//     console.log('After calls in function');
// }

// getWeatherData();
// console.log('After calls outside function');

//In above code we can see that we need to call getWeatherData function

//Immediately invoked function expression is a function that is called immediately as soon as it is defined

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Call is successful');
            resolve(200);
        }, 2000);
    });
}


//Below is syntax of IIFE
//(func)();

(
    async function getWeatherData() {
        await api();
        await api();
        console.log('After calls in function');
    }
)();

