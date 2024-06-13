//This solves callback hell problems
//resolve and reject are callbacks provided by Javascript
let promise = new Promise((resolve, reject) => {
    console.log('I am a promise');
    resolve('Promise resolved');
});


let promise2 = new Promise((resolve, reject) => {
    console.log('I am promise2');
    reject('Promise rejected');
});

//Generally we don't create promises some API returns a promise
//But we have create a promise for book-shop-client to retrieve saved element in session storage