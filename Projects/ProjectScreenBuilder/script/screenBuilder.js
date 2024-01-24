import { createElement } from "./createElement.js";
import { save } from "./saveElement.js";
import { load, loadElements } from "./loadElements.js";


document.querySelector('.btn_doIt').addEventListener('click', createElement)

document.querySelector('.btn_clear').addEventListener('click', () => {
    document.querySelector('.massageClear').style.display = "block";


    document.getElementById('yesClear').addEventListener('click', () => {
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
        document.querySelector('.massageClear').style.display = "none";
        localStorage.clear()
    })

    document.getElementById('noClear').addEventListener('click', () => {
        document.querySelector('.massageClear').style.display = "none";
    })

})
document.querySelector('.btn_save').addEventListener('click', save)
document.querySelector('.btn_load').addEventListener('click', loadElements)
load()