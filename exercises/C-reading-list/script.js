const books = [{
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false,
        link: "https://images-na.ssl-images-amazon.com/images/I/41bWcNdTGmL.jpg"
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true,
        link: "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg"
    },
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        alreadyRead: true,
        link: "https://m.media-amazon.com/images/I/51A8l+FxFNL.jpg"

    }
];

function readingList(books) {
    // Write your code here...
    let content = document.querySelector('#content');
    let h1 = document.createElement('h1'); // heading title
    h1.innerText = "Book List"; // heading text
    content.appendChild(h1); // add h1 to content
    let ul = document.createElement('ul'); // unordered list
    for (let item of books) {
        // create adding elements
        let li = document.createElement('li');
        var img = document.createElement('img');
        img.src = item.link;

        let para = document.createElement('p');
        para.textContent = `${item.title}   -   ${item.author}`;
        // add p and img elements to li element
        li.appendChild(para);
        ul.appendChild(li);
        li.appendChild(img);
        // li style
        li.style.padding = "10px";
        li.style.margin = "25px";
        img.style.width = "75%";
        //reading or not reading book
        if (item.alreadyRead === true) {
            li.style.backgroundColor = "green";

        } else {
            li.style.backgroundColor = "red";
        }
    };
    //add ul list to content
    content.appendChild(ul);
    // ul list style
    ul.style.display = "flex"
    ul.style.listStyleType = "none";
    ul.style.flexDirection = "row";
}
readingList(books); //function  calling