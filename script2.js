var button = document.getElementById("enter");
var input = document.getElementById("username");
var ul = document.querySelector("ul");
var div = document.querySelector("div");
var item = document.getElementsByTagName("li")
var delAll = document.createElement("button");
delAll.appendChild(document.createTextNode("Delete All"));
div.appendChild(delAll);
delAll.onclick=EmptyList;


function inputLength() {
    return input.value.length;
}

function createListElement(){
    var li= document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
    var del = document.createElement("button");
    del.className="buttonLi";
    del.appendChild(document.createTextNode("delete!"))
    li.appendChild(del);
    del.onclick=removeParent;
    // for(i=0; i<ul.children.length;i++){
        
    //     del.appendChild(document.createTextNode("delete!"))
    //     li.appendChild(del);
    // }
}

for(i=0;i<item.length;i++){
    removeItem(i);
}
function removeItem(i){
    var del = document.createElement("button");
    del.className="buttonLi";
    del.appendChild(document.createTextNode("Delete!"))
    item[i].appendChild(del);
    del.onclick=removeParent;
}
// for(i=0;i<item.length;i++){
//    removeItem(); 
// }

function removeParent(evt){
	evt.target.parentNode.remove();
}

function EmptyList(){
    var len = item.length;
    for(i=0;i<len;i++){
        item[0].remove();
    }
    
}
ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
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

input.addEventListener("keypress", addListAfterKeypress);
