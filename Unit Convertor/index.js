/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// const cta = document.getElementById("cta");
// const input = document.getElementById("number");

// const lengthElement = document.getElementById("length");
// const volume = document.getElementById("volume");
// const mass = document.getElementById("mass");

// cta.addEventListener("click", function() {
//     let inputValue = input.value;
//     lengthConversion(inputValue);
// });

// function lengthConversion(value) {
//     let lengthValue = value * 3.281;
//     lengthElement.innerHTML = `<p>${value} meters = ${lengthValue} feet</p>`;
// }
    // Get references to the elements
    const cta = document.getElementById("cta");
    const input = document.getElementById("number");
    const lengthElement = document.getElementById("length");
    const volumeElement = document.getElementById("volume");
    const massElement = document.getElementById("mass");


    // Add event listener to the button
    cta.addEventListener("click", function() {
        const inputValue = input.value; // Get the value from the input field
        lengthConversion(inputValue); 
        volumeConversion(inputValue);
        massConversion(inputValue);  // Call the function with the input value
    });

    // Function to convert meters to feet and update the HTML
    function lengthConversion(value) {
        let lengthValue1 = value * 3.281;
         let lengthValue2 = value / 3.281;// Convert meters to feet
        lengthElement.innerHTML = `
        <p>
          ${value} meters = ${lengthValue1.toFixed(3)} feet | ${value} feet = ${lengthValue2.toFixed(3)} meters
        </p>
        `; // Update the HTML content
    }
    
     function volumeConversion(value) {
        let volumeValue1 = value * 0.264;
         let volumeValue2 = value / 0.264;// Convert meters to feet
        volumeElement.innerHTML = `
        <p>
          ${value} liters = ${volumeValue1.toFixed(3)} gallon | ${value} gallon = ${volumeValue2.toFixed(3)} liters
        </p>
        `; // Update the HTML content
    }
    
     function massConversion(value) {
        let massValue1 = value * 2.204;
         let massValue2 = value / 2.204;// Convert meters to feet
        massElement.innerHTML = `
        <p>
          ${value} kilogram = ${massValue1.toFixed(3)} pounds | ${value} pounds = ${massValue2.toFixed(3)} kilogram
        </p>
        `; // Update the HTML content
    }
    
