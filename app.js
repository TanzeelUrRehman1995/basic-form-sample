function mySum(){
    var firstNumber = +document.getElementById("firstNumber").value; 
    var secondNumber = + document.querySelector("#secondNumber").value;
    
    var sum = document.querySelector("#sum");
    sum.innerHTML += firstNumber + secondNumber;

    
    event.preventDefault();
}


function clickMe(){
    var inputButton = document.getElementById("inputButton");
    var tagButton = document.getElementById("tagButton");

    inputButton.value = "Click Me";
    tagButton.innerHTML = "Click Me";
    
}

var tagButton = document.addEventListener("click",  function(){
    var inputButton = document.getElementById("inputButton");
    var tagButton = document.getElementById("tagButton");

    inputButton.value = "Click Me";
    tagButton.innerHTML = "Click Me";
    
});