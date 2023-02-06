let title = document.createElement('h1');
let titleCont = document.createTextNode('To Do List');
title.appendChild(titleCont);

var list = document.getElementById('list');
list.appendChild(title);

let addText = document.createElement('input');
addText.setAttribute('id', 'addText');
addText.setAttribute('type', 'text');
addText.setAttribute('placeholder', 'Enter your list');
list.appendChild(addText);

let btn = document.createElement('button');
btn.textContent = 'Add';
btn.setAttribute('class', 'addBtn');
btn.addEventListener('click', newElement);
list.appendChild(btn);
btn.style.cursor = 'pointer'

let btnreset = document.createElement('button');
btnreset.textContent = 'Reset';
btnreset.setAttribute('class', 'reset');
// btnreset.setAttribute('type', 'reset');
btnreset.addEventListener('click', resetList);
btnreset.style.cursor = 'pointer'
list.appendChild(btnreset);

let ul = document.createElement('ul')
ul.setAttribute('id', 'myList');

list.appendChild(ul);

function newElement(){
    const listValue = document.querySelector('#addText').value;
    let li = document.createElement('li');
    li.setAttribute('class', 'mylist');
    li.style.fontFamily = 'itim';
    li.style.fontSize = "20px";
    li.style.color = "#003333";
    li.style.margin = "8px";
    li.style.padding = "5px 20px";
    li.style.listStyle = "none";
    li.style.border = "2px solid #006666";
    li.style.borderRadius = "8px";

    let remove = document.createElement("i");
    remove.setAttribute("class", "fa-solid fa-trash-can fa-xs");
    remove.setAttribute("style", "Color : #006666");
    remove.addEventListener('click', () => {
        li.remove();
    });
    remove.style.float ="right";
    remove.style.marginTop ="11px";


    let checkbox = document.createElement('input')
    checkbox.style.float = "right"
    checkbox.style.marginTop = "5px"
    checkbox.setAttribute('type', 'checkbox')
    

    ul.appendChild(li).innerHTML = listValue;
    li.appendChild(checkbox);
    li.appendChild(remove);
}

function resetList(){
    document.getElementById('myList').innerHTML = "";
}

        // Style

document.body.style.backgroundColor = "#FFE5CC";
list.style.margin = "0 350px"

title.style.fontFamily = "'Itim', cursive";
title.style.textAlign = "center";
title.style.color = "#001933";

addText.style.backgroundColor = "transparent"; 
addText.style.border = "2px solid #006666"; 
addText.style.borderRadius = "10px";
addText.style.width = "350px"; 
addText.style.height = "30px";
addText.style.margin = "20px";
addText.style.padding = "0 10px";
addText.style.color = "#003333";
addText.style.fontFamily = "'Poppins', sans-serif";
addText.style.fontSize = "Light 300";
addText.style.fontWeight = "bold";
addText.style.outline = "none"

btn.style.border = "2px solid #336600";
btn.style.borderRadius = "10px";
btn.style.backgroundColor = "#CCFF99";
btn.style.width = "70px";
btn.style.height = "30px";
btn.style.margin = "10px";
btn.style.fontFamily = "'Poppins', sans-serif";
btn.style.fontSize = "16px";
btn.style.fontWeight = "bold";
btn.style.color = "#336600";

btnreset.style.border = "2px solid #990000";
btnreset.style.borderRadius = "10px";
btnreset.style.backgroundColor = "#FFB9B9";
btnreset.style.width = "70px";
btnreset.style.height = "30px";
btnreset.style.margin = "10px";
btnreset.style.fontFamily = "'Poppins', sans-serif";
btnreset.style.fontSize = "16px";
btnreset.style.fontWeight = "bold";
btnreset.style.color = "#990000";







