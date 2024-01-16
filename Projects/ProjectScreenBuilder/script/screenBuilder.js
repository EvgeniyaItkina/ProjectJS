function createElement() {
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

function save() {
    const whiteSheet = document.getElementById('whiteSheet');

    // Подготавливаем массив для хранения данных об элементах
    const elementsData = [];

    // Проходимся по всем дочерним элементам и сохраняем их данные
    whiteSheet.childNodes.forEach(element => {
        const elementData = {
            tag: element.tagName,
            content: element.textContent,
            style: {
                width: element.style.width,
                height: element.style.height,
                border: element.style.border,
                borderRadius: element.style.borderRadius,
                backgroundColor: element.style.backgroundColor,
                fontSize: element.style.fontSize,
                color: element.style.color,
                padding: element.style.padding,
                margin: element.style.margin
            }
        };
        elementsData.push(elementData);
    });

    // Сохраняем данные элементов в Local Storage
    localStorage.setItem('savedElements', JSON.stringify(elementsData));
}
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
    })

    document.getElementById('no').addEventListener('click', () => {
        document.querySelector('.massage').style.display = "none";
    })

})
document.querySelector('.btn_save').addEventListener('click', save)