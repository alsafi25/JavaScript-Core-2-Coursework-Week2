// global variables
let content = document.querySelector('#content');
let select = document.createElement('select');
// create and append the heading to the content
let h1 = document.createElement("h1");
h1.innerHTML = "Colours Exercise";
content.appendChild(h1);
// create empty paragraph 
let p = document.createElement("p");
p.innerHTML = "";

function listOfColours(colours) {
    content.appendChild(select);
    select.addEventListener("change", GetSelectedText); // dropdown list change event
    for (colour in colours) {
        select.add(new Option(colours[colour])); // dropdown list 
    }
    // function GetSelected text from dropdownlist
    function GetSelectedText() {
        var text = select.options[select.selectedIndex].text;
        //var val = select.options[select.selectedIndex].value;
        content.appendChild(p).innerHTML = "you have selected: " + text;
        p.style.color = text;
        p.style.fontSize = "40px";
        h1.style.color = text;
    }
}
const colours = ["red", "blue", "green", "yellow", "pink", "brown"];
listOfColours(colours);