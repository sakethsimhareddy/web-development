let binary = 0;
let button = document.getElementById('submit');
let sum = 0;
let i = 0;

function isBinary(input) {
    const binaryRegex = /^[01]+$/;
    if (binaryRegex.test(input)) {
        return true; 
    } else {
        return false; 
    }
}


button.addEventListener('click', () => {
    binary = parseInt(document.getElementById("display").value);
    if (isBinary(binary)) {
        sum = 0;
        i = 0;
        
        while (binary > 0) { 
            let rem = binary % 10;
            sum += rem * Math.pow(2, i);
            binary = Math.floor(binary / 10); 
            i++;
        }
    
        console.log(`The decimal value of ${document.getElementById("display").value} is:`, sum); 
        document.getElementById('answer').innerText = sum.toString();
    } else {
        document.getElementById('answer').innerText = "";
        alert(`${document.getElementById("display").value} is not a binary number.`);
    }
    
})
