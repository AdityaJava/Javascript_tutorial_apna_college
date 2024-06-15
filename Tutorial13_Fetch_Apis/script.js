const url = 'https://cat-fact.herokuapp.com/facts';

let btn = document.querySelector('#get-facts');
let para = document.querySelector('#cat-para');


const getFacts = async () => {
    console.log('btn clicked');
    console.log('Sending request');
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
    para.innerText = data[0].text;
}

btn.addEventListener('click', getFacts);