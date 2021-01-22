//element.insertAdjacentHTML(position, text);
// content.insertAdjacentHTML('afterbegin', '< h1 > name < /h1>');
// content.insertAdjacentHTML('afterbegin', '< h2 > job < /h2>');

function listOfNames(arrayOfPeople) {
    let content = document.querySelector("#content");
    for (let item of arrayOfPeople) {
        var h1 = document.createElement('h1');
        var h2 = document.createElement('h2');
        h1.textContent = `${item.name}`;
        h2.textContent = `${item.job}`;
        content.appendChild(h1);
        content.appendChild(h2);
    };


}

let people = [
    { name: "Chris", job: "Teacher" },
    { name: "Joanna", job: "Student" },
    { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);