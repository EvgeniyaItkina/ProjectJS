import { createElement } from "./createElement.js";
import { save } from "./saveElement.js";


document.querySelector('.btn_doIt').addEventListener('click', createElement)

document.querySelector('.btn_clear').addEventListener('click', () => {
    document.querySelector('.massage').style.display = "block";


    document.getElementById('yes').addEventListener('click', () => {
        document.getElementById('whiteSheet').innerHTML = "";
        document.getElementById('element').value = "";
        document.getElementById("bgColor").value = "";
        document.getElementById("width").value = "";
        document.getElementById("height").value = "";
        document.getElementById("textarea").value = "";
        document.getElementById("font-size").value = "";
        document.getElementById("font-color").value = "";
        document.getElementById("widthBorder").value = "";
        document.getElementById("colorBorder").value = "";
        document.getElementById("radiusBorder").value = "";
        document.getElementById("padding").value = "";
        document.getElementById("margin").value = "";
        document.querySelector('.massage').style.display = "none";
        localStorage.clear()
    })

    document.getElementById('no').addEventListener('click', () => {
        document.querySelector('.massage').style.display = "none";
    })

})
document.querySelector('.btn_save').addEventListener('click', save)