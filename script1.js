<<<<<<< HEAD
var button = document.getElementById("enter");
var input = document.getElementById("username");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement(){
    var li= document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

function addListAfterClick(){
    if(inputLength() > 0) {
        createListElement()
    }
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);



=======
var button = document.getElementById("enter");
var input = document.getElementById("username");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement(){
    var li= document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

function addListAfterClick(){
    if(inputLength() > 0) {
        createListElement()
    }
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);



>>>>>>> 33918167791340424e6fb5bab60447a8070751e3
input.addEventListener("keypress", addListAfterKeypress);