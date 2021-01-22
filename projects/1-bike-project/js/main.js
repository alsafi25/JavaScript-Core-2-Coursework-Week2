//Part one
let blueButtonStyle = document.querySelector('#blueBtn');
blueButtonStyle.addEventListener('click', changeBlueButtonStyle);

function changeBlueButtonStyle() {
    document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "#588fbd";
    document.getElementsByClassName("btn btn-primary btn-lrg")[0].style.backgroundColor = "#ffa500";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.backgroundColor = "black";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.color = "white";
}
let orangeButtonStyle = document.querySelector("#orangeBtn");
orangeButtonStyle.addEventListener("click", changeOrangeButtonStyle);

function changeOrangeButtonStyle() {
    document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "#f0ad4e";
    document.getElementsByClassName("btn btn-primary btn-lrg")[0].style.backgroundColor = "#5751fd";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.backgroundColor = "#31b0d5";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.color = "white";

}
let greenButtonStyle = document.querySelector("#greenBtn");
greenButtonStyle.addEventListener("click", changeGreenButtonStyle);

function changeGreenButtonStyle() {
    document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "#87ca8a";
    document.getElementsByClassName("btn btn-primary btn-lrg")[0].style.backgroundColor = "black";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.backgroundColor = "#8c9c08";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.color = "black";
}