
// ---------------- data -----------------
window.brandList = `[
{"id": 189, "key": "011", "name": "MyLady","description": "", "attributes": []},
{"id": 190, "key": "012", "name": "A&F","description": "", "attributes": []}
]`;
window.seasonList =  `[
  {
    "id": 844,
    "key": "151",
    "name": "SS-2015",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}]
  },
  {
    "id": 845,
    "key": "142",
    "name": "FW-2014",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}]
  },
  {
    "id": 904,
    "key": "172",
    "name": "FW-2017",
    "description": "",
    "attributes": [{"key": "brand", "value": "012"}]
  }
]`;

window.collectionList =  `[
  {
    "id": 844,
    "key": "151-Women",
    "name": "Women",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}]
  },
  {
    "id": 845,
    "key": "142-Women",
    "name": "Women",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "142"}]
  },
  {
    "id": 904,
    "key": "172-Women",
    "name": "Women",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "172"}]
  },
  {
    "id": 944,
    "key": "151-Men",
    "name": "Men",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}]
  },
  {
    "id": 945,
    "key": "142-Men",
    "name": "Men",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "142"}]
  },
  {
    "id": 904,
    "key": "172-Baby",
    "name": "Baby",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "172"}]
  }
]`;

window.themeList =  `[
  {
    "id": 844,
    "key": "100",
    "name": "Modern",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Women"}]
  },
  {
    "id": 845,
    "key": "101",
    "name": "New Generation",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Women"}]
  },
  {
    "id": 944,
    "key": "200",
    "name": "Modern",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Men"}]
  },
  {
    "id": 945,
    "key": "201",
    "name": "Basic",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Women"}]
  },
  {
    "id": 644,
    "key": "300",
    "name": "Casual",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Men"}]
  },
  {
    "id": 645,
    "key": "301",
    "name": "Elegant",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Men"}]
  },
  {
    "id": 646,
    "key": "302",
    "name": "Luxury",
    "description": "",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Men"}]
  }
]`;

window.productList = `
[
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Jackets",
    "colors": [{"key": "920", "rgb": "#FC00FC", "name": "Magenta"}
                ],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74742,
    "key": "30001",
    "name": "Jennifer",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/style3.png",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Men"}, {"key": "theme", "value": "300"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Pants",
    "colors": [{"key": "100", "rgb": "#4010F0", "name": "Blue"}, 
                {"key": "200", "rgb": "#FC0F50", "name": "Red"},
                {"key": "800", "rgb": "#404040", "name": "Dark Gray"},
                {"key": "900", "rgb": "#000000", "name": "Black"},
                {"key": "910", "rgb": "#909090", "name": "Gray"},
                {"key": "920", "rgb": "#FCFCFC", "name": "Magenta"}
                ],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74743,
    "key": "30002",
    "name": "Sandra",
    "description": "Pants",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/21751.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Men"}, {"key": "theme", "value": "300"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Shirts",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74744,
    "key": "30003",
    "name": "Lilly",
    "description": "Shirt",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/21752.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Women"}, {"key": "theme", "value": "100"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Jackets",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74745,
    "key": "30004",
    "name": "Magda",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/30680.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Women"}, {"key": "theme", "value": "100"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Shirts",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74746,
    "key": "30005",
    "name": "Nicole",
    "description": "Shirt",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/30682.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Men"}, {"key": "theme", "value": "302"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Jackets",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74747,
    "key": "30006",
    "name": "Betty",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/30688.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Men"}, {"key": "theme", "value": "301"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Jackets",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74748,
    "key": "30007",
    "name": "Karoline",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/30610.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Men"}, {"key": "theme", "value": "300"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Jackets",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74749,
    "key": "30008",
    "name": "Sara",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/30643.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Women"}, {"key": "theme", "value": "100"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Jackets",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74750,
    "key": "30009",
    "name": "Lara",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/30624.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Jackets",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74750,
    "key": "30010",
    "name": "Annette",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/30611.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Jackets",
    "colors": [{"key": "100", "rgb": "#1010F0", "name": "Blue"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74742,
    "key": "30011",
    "name": "Kim",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/style.png",
    "attributes": [{"key": "brand", "value": "012"}, {"key": "season", "value": "172"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Jackets",
    "colors": [{"key": "920", "rgb": "#FC00FC", "name": "Magenta"}
                ],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74742,
    "key": "300012",
    "name": "Jennifer",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/style3.png",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Men"}, {"key": "theme", "value": "300"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Pants",
    "colors": [{"key": "100", "rgb": "#4010F0", "name": "Blue"}, 
                {"key": "200", "rgb": "#FC0F50", "name": "Red"},
                {"key": "800", "rgb": "#404040", "name": "Dark Gray"},
                {"key": "900", "rgb": "#000000", "name": "Black"},
                {"key": "910", "rgb": "#909090", "name": "Gray"},
                {"key": "920", "rgb": "#FCFCFC", "name": "Magenta"}
                ],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74743,
    "key": "30013",
    "name": "Sandra",
    "description": "Pants",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/21751.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Men"}, {"key": "theme", "value": "300"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Shirts",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74744,
    "key": "30014",
    "name": "Lilly",
    "description": "Shirt",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/21752.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Women"}, {"key": "theme", "value": "100"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Jackets",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74745,
    "key": "30015",
    "name": "Magda",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/30680.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Women"}, {"key": "theme", "value": "100"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Shirts",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74746,
    "key": "30016",
    "name": "Nicole",
    "description": "Shirt",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/30682.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Men"}, {"key": "theme", "value": "302"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Jackets",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74747,
    "key": "30017",
    "name": "Betty",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/30688.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Men"}, {"key": "theme", "value": "301"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Jackets",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74748,
    "key": "30018",
    "name": "Karoline",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/30610.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Men"}, {"key": "theme", "value": "300"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Jackets",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74749,
    "key": "30019",
    "name": "Sara",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/30643.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}, {"key": "collection", "value": "151-Women"}, {"key": "theme", "value": "100"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Jackets",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74750,
    "key": "30020",
    "name": "Lara",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/30624.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Jackets",
    "colors": [{"key": "100", "rgb": "#4CAF50", "name": "Green"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74750,
    "key": "30021",
    "name": "Annette",
    "description": "Jacket",
    "imageURL": "https://raw.githubusercontent.com/dfab1964/image/main/30611.jpg",
    "attributes": [{"key": "brand", "value": "011"}, {"key": "season", "value": "151"}]
  },
  {
    "imageID": 516558,
    "season": "FW-2026",
    "collection": "Women",
    "theme": "Basic",
    "product_main_group": "Garment",
    "product_group": "Jackets",
    "colors": [{"key": "100", "rgb": "#1010F0", "name": "Blue"}, {"key": "200", "rgb": "#FC0F50", "name": "Red"}],
    "sizes": ["S", "M", "L", "XL"],
    "id": 74742,
    "key": "30022",
    "name": "Kim",
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
            if (attributes[i].value != '') {
                if (item.attributes.findIndex(a => a.key == attributes[i].key && 
                                                    a.value == attributes[i].value) < 0) {
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