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


let prom1 = async();
prom1.then((result) => {
    console.log(result);
});

let prom2 = async2();
prom2.then((result) => {
    console.log(result);
});

//Above both promises will resolve simultaneously but we don't want that we want to resolve prom1 first and then prom2
//There comes promise chaining