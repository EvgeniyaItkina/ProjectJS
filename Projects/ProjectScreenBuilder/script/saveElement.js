export function save() {
    const whiteSheet = document.getElementById('whiteSheet');
    const newElement = whiteSheet.children[0];
    const elementData = {
        tag: newElement.tagName,
        content: newElement.textContent,
        style: {
            width: newElement.style.width.value,
            height: newElement.style.height.value,
            border: newElement.style.border,
            borderRadius: newElement.style.borderRadius,
            backgroundColor: newElement.style.backgroundColor,
            fontSize: newElement.style.fontSize,
            color: newElement.style.color,
            padding: newElement.style.padding,
            margin: newElement.style.margin
        }
    };

    localStorage.setItem("one", JSON.stringify(elementData))

}




/* export function save() {
    const whiteSheet = document.getElementById('whiteSheet');

    // Подготавливаем массив для хранения данных об элементах
    const elementsData = [];

    // Проходимся по всем дочерним элементам и сохраняем их данные
    for (let i = 0; i < whiteSheet.childNodes.length; i++) {
        const newElement = whiteSheet.childNodes[i];
        const elementData = {
            tag: newElement.tagName,
            content: newElement.textContent,
            style: {
                width: newElement.style.width,
                height: newElement.style.height,
                border: newElement.style.border,
                borderRadius: newElement.style.borderRadius,
                backgroundColor: newElement.style.backgroundColor,
                fontSize: newElement.style.fontSize,
                color: newElement.style.color,
                padding: newElement.style.padding,
                margin: newElement.style.margin
            }
        };
        elementsData.push(elementData);
    });

    // Сохраняем данные элементов в Local Storage
    localStorage.setItem('savedElements', JSON.stringify(elementsData));
} */