const url = 'https://cat-fact.herokuapp.com/facts';


const getFacts = async () => {
    console.log('Sending request');
    let promise = await fetch(url);
    console.log(promise);
}

getFacts();