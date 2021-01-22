function todoList(todos) {

    // Write your code here...
    let content = document.querySelector("#content"); // 
    let h1 = document.createElement('h1');

    let ul = document.createElement('ul');
    for (let item of todos) {
        let h2 = document.createElement('h2');
        let li = document.createElement('li');
        h2.textContent = `${item.todo}`;
        li.appendChild(h2);
        ul.appendChild(li);
        // User  events .....
        li.addEventListener('click', function() { // when user click on list
            if (li.style.textDecoration === "line-through") {
                li.style.textDecoration = "none";
            } else {
                li.style.textDecoration = "line-through";
            }
        });

    }

    content.appendChild(h1);
    h1.textContent = "My To-do List:";
    content.appendChild(ul);
}

const todos = [
    { todo: "wash the dishes" },
    { todo: "walk the dog" },
    { todo: "learn javascript" },
    { todo: "go shopping" }
];

todoList(todos);