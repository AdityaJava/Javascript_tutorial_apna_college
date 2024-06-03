const countvowels = (string) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    for (str of string) {
        // console.log(str);
        if (vowels.indexOf(str) !== -1) {
            vowelCount++;
        }
    }
    return vowelCount;
}

let string = 'aeitgv';
let vowelCount = countvowels(string);

console.log(`Vowel count in ${string} is ${vowelCount}`);