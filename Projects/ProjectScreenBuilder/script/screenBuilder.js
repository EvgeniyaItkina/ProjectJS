function createDiv() {
    let element = document.getElementById('element').value;

    const newDiv = document.createElement(`${element}`);
    let bgColor = document.getElementById("bgColor").value;
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let text = document.getElementById("textarea").value;
    let font_size = document.getElementById("font-size").value;
    let font_color = document.getElementById("font-color").value;
    let widthBorder = document.getElementById("widthBorder").value;
    let colorBorder = document.getElementById("colorBorder").value;
    let radiusBorder = document.getElementById("radiusBorder").value;
    let padding = document.getElementById("padding").value;
    let margin = document.getElementById("margin").value;



    newDiv.id = 'div';
    newDiv.className = "divCSS";
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;
    newDiv.style.border = `${widthBorder}px solid ${colorBorder}`;
    newDiv.style.borderRadius = `${radiusBorder}px `;
    newDiv.style.backgroundColor = bgColor;
    newDiv.textContent = text;
    newDiv.style.fontSize = `${font_size}px`;
    newDiv.style.color = `${font_color}px`;

    newDiv.style.padding = `${padding}px`;
    newDiv.style.margin = `${margin}px`;



    document.body.appendChild(newDiv);

}
document.getElementById('btn_doIt').addEventListener('click', createDiv)


