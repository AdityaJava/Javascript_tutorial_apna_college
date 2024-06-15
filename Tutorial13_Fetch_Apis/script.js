const url = 'https://cat-fact.herokuapp.com/facts';


const getFacts = async () => {
    console.log('Sending request');
    let response = await fetch(url);
    console.log(response);
}

getFacts();