

var currentNumberWrapper= document.getElementById("valor");
var currentNumber = 0;

function increment() {
    currentNumber= currentNumber+1;
    currentNumberWrapper.innerHTML= currentNumber+1;
}

function decrement() {
    currentNumber= currentNumber-1;
    currentNumberWrapper.innerHTML= currentNumber+1;
}
