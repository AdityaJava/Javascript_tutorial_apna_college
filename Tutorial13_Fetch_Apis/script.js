const url = 'https://cat-fact.herokuapp.com/facts';

let btn = document.querySelector('#get-facts');
let para = document.querySelector('#cat-para');


const getFacts = async () => {
    console.log('btn clicked');
    console.log('Sending request');
    let response = await fetch(url);
    console.log(response);
    let dataList = await response.json();
    //console.log(dataList);
    for (let data of dataList) {
        para.innerText = para.innerText + data.text + '\n';
    }

}

btn.addEventListener('click', getFacts);