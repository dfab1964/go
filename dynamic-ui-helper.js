async function fetchClone(elementID) {
    try {
            const response = await fetch('templates.html');  
            const data = await response.text();

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            const elementToClone = tempDiv.querySelector('#' + elementID); 
            if (elementToClone) {
              const clonedElement = elementToClone.cloneNode(true);
              return clonedElement;
            } else {
              console.log("Element to clone not found!");
            }
    } catch (error) {
        console.error('Error fetching or cloning HTML:', error);
    }
}

