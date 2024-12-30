
// ---------------- data -----------------
window.brandList = `[
{"id": 189, "key": "011", "name": "MyLady","description": "", "attributes": []},
{"id": 190, "key": "012", "name": "A&F","description": "", "attributes": []}
]`;
window.seasonList =  `[
  {
    "id": 844,
    "key": "151",
    "name": "FS 2015",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}]
  },
  {
    "id": 845,
    "key": "142",
    "name": "HW 2014",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}]
  },
  {
    "id": 904,
    "key": "172",
    "name": "HW 2017",
    "description": "",
    "attributes": [{"key": "brand", "value": "012"}]
  }
]`;

window.productList = `
[
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74742,
    "key": "30673",
    "name": "21749",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/style3.png",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74742,
    "key": "30674",
    "name": "21750",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/style.png",
    "attributes": [{"key": "brand", "value": "012"}, {"key": "season", "value": "172"}]
  }
]
`;



// ----------- functions ------------------
function showUserMessage(msg) {
    alert(msg);
}

async function APILogin() {
    if (window.db_token !== undefined)
        return;

    try {
        var body = {
            dataSource: "server2023q/loeff",
            userId: "pdm",
            password: "pdm"
        };

        const jsonBody = JSON.stringify(body);
        var url = window.location.origin;
        // temp
        //url = 'http://127.0.0.1:5174';
        //

        const response = await fetch(url + '/api/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                },
            //body: JSON.stringify({
            //                dataSource: "server2023q/loeff",
            //                userId: "pdm",
            //                password: "pdm",
            //   }), // Body content as JSON
            body: jsonBody,
            }
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.token !== null && data.token !== undefined && data.token !== "")
            window.db_token = data.token;

        return;  
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;  // Propagate the error if needed
    }
}

function fetchDataFromLocalJson(resource) {
    var jsonString = '';
    if (resource == 'brand') {
        jsonString = jsonBrand;
    }
    try {
        const data = JSON.parse(jsonString);
        console.log(data);
        return data;
    } catch (error) {
        console.log("Invalid JSON:", error);
    }
}

async function fetchDataFromAPI(resource) {
    var jsonString = '';
    if (resource == "brand") {
        jsonString = jsonBrand;
        const data = JSON.parse(jsonString);
        console.log(data);
        return data;
    }
    try {
        await APILogin();
        var url = window.location.origin;
        // temp
        //url = 'http://localhost:5174';
        //
        const response = await fetch(url + '/api/' + resource, {
            headers: {
                'DB-Token': window.db_token,
                }
            }
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;  // Return the data when the fetch is successful
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;  // Propagate the error if needed
    }
}

function getProducts2() {
    var products = [
        { name: 'Jennifer', description: "Woman jacket with pockets", 
            imageURL: "https://raw.githubusercontent.com/dfab1964/image/main/style3.png",
            colors: [{key:"100", rgb: '#4CAF50', name:'Green'}, {key:"200", rgb: '#FC0F50', name:'Red'}]},
        { name: 'Marylin', description: "Woman shirt", 
            imageURL: "https://raw.githubusercontent.com/dfab1964/image/main/style3.jpg",
            colors: [{key:"100", rgb: '#4CAF50', name:'Green'}, {key:"200", rgb: '#FC0F50', name:'Red'}]},    
        { name: 'Sandra', description: "Woman shirt with a very long long descripion", 
            imageURL: "https://raw.githubusercontent.com/dfab1964/image/main/style3.jpg",
            colors: [{key:"100", rgb: '#4CAF50', name:'Green'}, {key:"200", rgb: '#FC0F50', name:'Red'}]},    
        { name: 'Magda', description: "Woman shirt", 
            imageURL: "https://raw.githubusercontent.com/dfab1964/image/main/style3.jpg",
            colors: [{key:"100", rgb: '#4CAF50', name:'Green'}, {key:"200", rgb: '#FC0F50', name:'Red'}]},   
        { name: 'Lilly', description: "Woman shirt", 
            imageURL: "https://raw.githubusercontent.com/dfab1964/image/main/GoLiveMg.345332.jpg",
            colors: [{key:"100", rgb: '#4CAF50', name:'Green'}, {key:"200", rgb: '#FC0F50', name:'Red'}]},   
        { name: 'Nicole', description: "Woman shirt", 
            imageURL: "https://raw.githubusercontent.com/dfab1964/image/main/style3.jpg",
            colors: [{key:"100", rgb: '#4CAF50', name:'Green'}, {key:"200", rgb: '#FC0F50', name:'Red'}]}    
    ];
    
    return products;
}

function getFilterData(filterType, attributes) {
    var jsonString = filterType + 'List';
    var data = [];
    try {
        data = JSON.parse(window[jsonString]);        
    } catch (error) {
        console.log("Invalid JSON:" + jsonString, error);
    }
    
    return filterByAttributes(data, attributes);
}

function filterByAttributes(data, attributes) {
    var filteredData = [];
        
    data.forEach(item => {
        var filterOK = true;
        for (i=0; i<attributes.length; i++) {
            if (item.attributes.findIndex(a => a.key == attributes[i].key && a.value == attributes[i].value) < 0) {
                filterOK = false;
                break;                
            }
        }
        if (filterOK)
            filteredData.push(item);
    }
    );

    return filteredData;    
}

function getProducts(attributes) {
    var data = [];
    
    try {
        data = JSON.parse(window.productList);
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }
    
    return filterByAttributes(data, attributes);
}