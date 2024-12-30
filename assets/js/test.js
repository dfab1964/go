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
    colCardClone.id = generateGUID();
    colCardClone.style.display = '';

    
    addColors(colCard, dataItem.colors)
    
    // append the clone to the container    
    rowContainer.appendChild(colCardClone);
    
}

function addColors(container, colors) {
    for (i=0; i<colors.length; i++) {
        var textColor = container.querySelector('#div-text-color');
        textColor.innerText = colors[i].name;    
    }
}


function addResultChildren(attributes){
    //get the value of the switch
    var switchValue = 'card';
    
    //call the proper function to add either a row or a card
    if (switchValue == 'card') {
        // hide the row template
        document.getElementById('row-template').style.display = 'none';

        var rowContainer = document.getElementById('row-card-template');
        
        // remove all children except the template
        var colCardTemplate = document.getElementById("col-card-template");
        const children = Array.from(rowContainer.children);
        children.forEach(child => {
            if (child.id != colCardTemplate.id) {
            rowContainer.removeChild(child);
            }
        });
        
        var products = getProducts(attributes);
        for (i=0; i<products.length; i++) {
            addCard(rowContainer, products[i]);
        }
        var colCard = document.getElementById("col-card-template");
        colCard.style.display = 'none';
    } 
    else {
        var rowContainer = document.getElementById('row-template');
        addRow(rowContainer);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const brandList = getFilterData('brand', []);
    populateCombobox(document.getElementById("mnu-brand"), '#drd-item-template', brandList);
    document.getElementById('btn-brand').dataset.key = '';
    
    const seasonList = getFilterData('season', []);
    populateCombobox(document.getElementById("mnu-season"), '#drd-item-season-template', seasonList);
    document.getElementById('btn-season').dataset.key = '';
});

function populateCombobox(container, itemTemplate, data) {
    // get the anchor template
    var elItemTemplate = container.querySelector(itemTemplate);

    // remove all children except the template
    const children = Array.from(container.children);
    children.forEach(child => {
      if (child.id != elItemTemplate.id) {
        container.removeChild(child);
      }
    });
    
    // add the 'All' item
    elItemTemplate.dataset.key = '';
    elItemTemplate.textContent = "All";
    var elAllItem = elItemTemplate.cloneNode(true);
    container.appendChild(elAllItem);

    data.forEach(item => {
        elItemTemplate.dataset.key = item.key;
        elItemTemplate.textContent = item.name;
        
        // create a clone of the column
        var elItem = elItemTemplate.cloneNode(true);
        elItem.id = generateGUID();
        elItem.style.display = '';
                
        container.appendChild(elItem);
    }
    );

    // hide the anchor template
    elItemTemplate.style.display = 'none';
}

function getFilterValues() {
    var filterValues = [];
    filterValues.push({key: 'brand', value: document.getElementById('btn-brand').dataset.key});
    filterValues.push({key: 'season', value: document.getElementById('btn-season').dataset.key});
    return filterValues;
}
function handleSelection(elBtn, elMenuItem){
    if (elBtn.dataset.key == elMenuItem.dataset.key)
        return;
    
    elBtn.innerText = elMenuItem.innerText;
    elBtn.dataset.key = elMenuItem.dataset.key;

    const filterValues = getFilterValues();

    // assuming that buttons have ids like 'btn-xxxxx'
    const filterType = elBtn.id.substring(elBtn.id.lastIndexOf("-") + 1);

    if (filterType == "brand") {
        const seasonList = getFilterData('season', filterValues.filter(a => a.key == 'brand'));
        populateCombobox(document.getElementById("mnu-season"), '#drd-item-season-template', seasonList);      
        document.getElementById('btn-season').innerText = 'All';
        document.getElementById('btn-season').dataset.key = '';
    }
}
