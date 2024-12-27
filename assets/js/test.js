function generateGUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function showMessage(text) {
    alert(text);
}
function handleSelection(el, text){
    //document.getElementById('btn-brand').innerText=text;
    el.innerText=text;
}
function addRow(container){
    // empty the container
   // container.innerHTML = '';
    // add a new row

    var row = document.getElementById('row-template');
    
    var rowClone = row.cloneNode(true);
    
    container.appendChild(rowClone);
    
}

function addCard(rowContainer, dataItem){
    //get the column that contains the card
    var colCard = document.getElementById("col-card-template");
    
    // get the element that contains the name
    var elName = colCard.querySelector("#crd-name");
    
    var elDescription = colCard.querySelector('#crd-description');
    
    var elImage = colCard.querySelector('#crd-image');
    
    // set the value of the name 
    elName.innerText = dataItem.name;
    
    elDescription.innerText = dataItem.description;
    
    elImage.src = dataItem.imageURL;
    
    // create a clone of the column
    var colCardClone = colCard.cloneNode(true);
    
    //addColors(colCard, dataItem.colors)
    
    // append the clone to the container    
    rowContainer.appendChild(colCardClone);
    
}

function addColors(container, colors) {
    for (i=0; i<colors.length; i++) {
        var textColor = container.querySelector('#div-text-color');
        textColor.innerText = colors[i].name;    
    }
}


function addResultChild(){
    //get the value of the switch
    var switchValue = 'card';
    
    //call the proper function to add either a row or a card
    if (switchValue=='card'){
        var rowContainer=document.getElementById('row-card-template');
        var products = getProducts();
        for (i=0; i<products.length; i++) {
            addCard(rowContainer, products[i]);
        }
        var colCard = document.getElementById("col-card-template");
        colCard.style.display = 'none';
    } 
    else {
        var rowContainer=document.getElementById('row-template');
        addRow(rowContainer);
    }
}

