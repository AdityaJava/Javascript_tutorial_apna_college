let isAddOn = true;
//Test change
function addOrRemoveBorder() {
    console.log(isAddOn);
    let addRemoveButton = document.querySelector('#add-remove-border');
    if (isAddOn) {
        console.log('in if');
        addRemoveButton.innerHTML = 'Remove Border';
        div.classList.add('border');
        isAddOn = false;
    }
    else {
        console.log('in else')
        addRemoveButton.innerHTML = 'Add Border';
        div.classList.remove('border');
        isAddOn = true;
    }
}