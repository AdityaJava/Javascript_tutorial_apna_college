function hello() {
    console.log('hello from setTimeout');
}

console.log('Hello1');

//hello is callback
setTimeout(hello, 4000);
console.log('Hello2');
console.log('Hello3');
console.log('Hello4');

for(let i=0; i<100; i++){
    setTimeout(()=>console.log(i), i * 1000);
}
///////////////////////////////////


