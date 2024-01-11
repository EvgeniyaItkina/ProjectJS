/* let elementText = document.getElementById('write').value;

let elementPlace = document.querySelector('.place').value;  */


function doIt() {

    const elementType = document.getElementById("element").value;
    const elementColor = document.getElementById('color').value;
    const elementWidth = document.getElementById('width').value + 'px';
    const elementHeight = document.getElementById('height').value + 'px';
    console.log(elementType);
    console.log(elementColor);
    console.log(elementWidth);
    console.log(elementHeight);
    switch (elementType) {
        case "Div":
            document.querySelector(".whiteSheet").innerHTML += `<div style='background-color:${elementColor}; width:${elementWidth}; height:${elementHeight}; border: 1px solid black '></div>`;
            break;
        case "Paragraph":
            document.querySelector(".whiteSheet").innerHTML += `<p style='color:${elementColor}; font-size: 1.2em'>Hello Word</p>`;
            break;
        case "Title":
            document.querySelector(".whiteSheet").innerHTML += `<h1 style='color:${elementColor}; font-size: 1.2em''>This is a Title</h1>`;
            break;

        default:
            break;
    }


}
function cleanForm() {

}
function cleanAll() {

}