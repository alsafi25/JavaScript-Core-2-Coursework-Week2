// global variables
let content = document.querySelector('#content');
let select = document.createElement('select');
// create and append the heading to the content
let h1 = document.createElement("h1");
h1.innerHTML = "Highlight Exercise";
content.appendChild(h1);
// create empty paragraph 
let p = document.createElement("p");
p.innerHTML = "";

function highlightWords(paragraph, colours) {
    // Write your code here...
    content.appendChild(select);

    for (colour in colours) {
        select.add(new Option(colours[colour])); // dropdown list 
    }
    paragraph.split('').forEach(element => {
        let span = document.createElement('span');
        span.innerText = `${element}`;
        span.addEventListener('click', e => {
            if (select.value === 'none') {
                e.target.style.backgroundColor = 'white';
            } else
                e.target.style.backgroundColor = select.value;
        });
        p.appendChild(span);
    });

    content.appendChild(select);
    content.appendChild(p);
}


const paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);