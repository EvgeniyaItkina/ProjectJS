export function createElement() {
    let element = document.getElementById('element').value;

    const bgColor = document.getElementById("bgColor").value;
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const text = document.getElementById("textarea").value;
    const font_size = document.getElementById("font-size").value;
    const font_color = document.getElementById("font-color").value;
    const widthBorder = document.getElementById("widthBorder").value;
    const colorBorder = document.getElementById("colorBorder").value;
    const radiusBorder = document.getElementById("radiusBorder").value;
    const padding = document.getElementById("padding").value;
    const margin = document.getElementById("margin").value;

    const newElement = document.createElement(`${element}`);

    /* newElement.id = 'element';*/
    newElement.className = "elementCSS";
    newElement.style.width = `${width}px`;
    newElement.style.height = `${height}px`;
    newElement.style.border = `${widthBorder}px solid ${colorBorder}`;
    newElement.style.borderRadius = `${radiusBorder}px `;
    newElement.style.backgroundColor = bgColor;
    newElement.textContent = text;
    newElement.style.fontSize = `${font_size}px`;
    newElement.style.color = `${font_color}`;
    newElement.style.padding = `${padding}px`;
    newElement.style.margin = `${margin}px`;


    document.getElementById('whiteSheet').appendChild(newElement);
}

