let Student = {
    name: 'Radha Krishna Sarkar',
    age: '23',
    cgpa: 10,
    isPass: true
}
//For in loop 
console.log( 'For in Loop' );
// for ( let key in Student ) {
//     console.log( 'Key:', key, ' value:', Student[ key ] );
// }

for ( let key in Student ) {
    console.log( 'Key:', key );
}


let t = [ 1, 2, 3, 5, 6 ]
for ( let n in t ) {
    console.log( n )
}