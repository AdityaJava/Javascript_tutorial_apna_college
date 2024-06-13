
function getData(data1Id, getNextData) {
    setTimeout(() => {
        if (getNextData) {
            getNextData();
        }
        console.log(`data ${data1Id}`);
    }, 2000);
}

getData('data1', () => {
    getData('data2', () => {
        getData('data3');
    });
});
