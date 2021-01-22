function shoppingList(arrayOfPeople) {
    // Write your code here...
    let content = document.querySelector('#content')
    let list = document.createElement('ul');
    // Create a list item for each shopping
    // and append it to the list
    shopping.forEach(function(shopping) {
        let li = document.createElement('li');
        li.textContent = shopping;
        list.appendChild(li);
    });

    // Log
    console.log(list);
    // insert into DOM (inside ul)
    content.appendChild(list);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];
//content.appendChild(list);
shoppingList(shopping);