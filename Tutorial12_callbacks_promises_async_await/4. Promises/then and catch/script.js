const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log('I am a promise');
        reject(':Network error');
    });
}

let promise = getPromise();
promise.then(res => {
    console.log('Promise Fulfilled', res);
});

promise.catch(err => {
    console.log('Promise Rejected', err);
});