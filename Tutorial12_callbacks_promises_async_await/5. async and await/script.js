//Async function always returns a promise
//Await pauses the execution of its surrounding async function until the promise is settled

async function hello() {
    console.log('hello');
}

console.log(hello());