
// ---------------- data -----------------
window.current = `{
  "location": {
    "name": "New York",
    "region": "New York",
    "country": "United States of America",
    "lat": 40.71,
    "lon": -74.01,
    "tz_id": "America/New_York",
    "localtime_epoch": 1658522976,
    "localtime": "2022-07-22 16:49"
  },
  "current": {
    "last_updated_epoch": 1658522700,
    "last_updated": "2022-07-22 16:45",
    "temp_c": 34.4,
    "temp_f": 93.9,
    "is_day": 1,
    "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "code": 1003
    },
    "wind_mph": 16.1,
    "wind_kph": 25.9,
    "wind_degree": 180,
    "wind_dir": "S",
    "pressure_mb": 1011,
    "pressure_in": 29.85,
    "precip_mm": 0,
    "precip_in": 0,
    "humidity": 31,
    "cloud": 75,
    "feelslike_c": 37,
    "feelslike_f": 98.6,
    "vis_km": 16,
    "vis_miles": 9,
    "uv": 8,
    "gust_mph": 11.6,
    "gust_kph": 18.7,
    "air_quality": {
      "co": 293.70001220703125,
      "no2": 18.5,
      "o3": 234.60000610351562,
      "so2": 12,
      "pm2_5": 13.600000381469727,
      "pm10": 15,
      "us-epa-index": 1,
      "gb-defra-index": 2
    }
  }
}`;

// ----------- functions ------------------

function getCurrentInfo(city) {
    var data = null;
    try {
        data = JSON.parse(window.current);
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }

    return data;
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

async function fetchCurrentInfo(city) {
    const url = 'https://api.weatherapi.com/v1/current.json?q='+city+'&lang=en&key=474c3630fc564cefbe9170341251402';
    try {
        const response = await fetch(url);
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
            if (attributes[i].value != '') {
                if (item.attributes.findIndex(a => a.attributeKey == attributes[i].key && 
                                                    a.attributeValue == attributes[i].value) < 0) {
                    filterOK = false;
                    break;                
                }                
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

function getProducts_new(searchParams) {
    var data = [];    
    var products = [];
    
    try {
        data = JSON.parse(window.productList);
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }
    
    var filteredProducts = filterByAttributes(data, searchParams.attributes);
    var productCount = filteredProducts.length;
    var pageCount = Math.trunc(productCount / searchParams.pageLength) + (productCount % searchParams.pageLength);
    if (searchParams.pageNo <= pageCount) {
        var offset = (searchParams.pageNo-1) * searchParams.pageLength;
        for (var i=offset; i<offset+searchParams.pageLength; i++) {
            if (i < productCount) {
                products.push(filteredProducts[i]);
            } else {
                break;
            }
        }
    }
    
    return products;
}

function getProduct(key) {
    var product = null;
    var data = [];
    try {
        data = JSON.parse(window.productList);
        product = data.find(p => p.key == key);
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }

    if (product != null) {
        product.composition = "90% Cotton; 10% Elastane";
    }
    
    return product;
}

function getProductComponent() {
	var component = {key: '1234', name: 'Fabric 1', productGroup: 'fabric', composition: '100% Cotton', consumption: {isColourDependent: false, isSizeDependent: false, value: '2 mt'}};
	return component;
}

function getProductBOM(key) {
	var product = getProduct(key);
	
	var bom = [];
	for (var i=0; i<10; i++) {
		bom.push(getProductComponent());
	}
	
	product.bom = bom;
	
	return product;
}