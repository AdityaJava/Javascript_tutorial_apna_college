function hello() {
    console.log('hello from setTimeout');
}

console.log('Hello1');

//hello is callback
setTimeout(hello, 4000);
console.log('Hello2');
console.log('Hello3');
console.log('Hello4');

///////////////////////////////////


