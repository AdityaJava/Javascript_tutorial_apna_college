function async() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Async1');
            resolve('Promise1 resolved')
        }, 4000);
    });
}


function async2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Async2');
            resolve('Promise2 resolved')
        }, 4000);
    });
}

//Promise chaining
//This we have used a lot in our react project
let prom1 = async();
prom1.then((result) => {
    console.log(result);
    //Promise1 is resolved and the call is given to promise2
    let p2 = async2();
    p2.then((result) => {
        console.log(result);
    });
    //Above can be written in following way but above is more understandable as call is separate
    // async2().then((result) => {
    //     console.log(result);
    // })
});

//2nd way
let prom1Of2 = async();
prom1.then((result) => {
    console.log(result);
    return async2();
}).then((result) => {
    console.log(result);
});



