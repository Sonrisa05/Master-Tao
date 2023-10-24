let favColor = prompt ('Какой Ваш любимый цвет?', "");

let color = favColor.toLowerCase();

switch (color) {
    case "синий":
        alert("Хороший выбор! Это цвет нашей планеты");
        break;
    case "желтый":
        alert("Вау! Это цвет солнца!");
        break;
    case "зеленый":
        alert("Хороший выбор! Это цвет леса, природы");
        break;
    default:
        alert("У меня пока что нет такого цвета");
        break;
}

const colorContainer = document.querySelector('.color-container');
const colorContainer2 = document.querySelector('.color-container-2');
// // const colorContainer3 = document.querySelector('.color-container-3');
const colorInput = document.querySelector('.color-input');
const btn = document.querySelector('.btn-1');


btn.addEventListener('click', function() {
    const colorValue = colorInput.value;
    colorContainer.innerHTML = `<h1>${colorValue}</h1>`;
    colorContainer2.innerText = colorValue;
//     colorContainer3.textContent = colorValue
    console.log(colorValue);

})

// console.log(btn);
// btn.addEventListener('click', function() {
//     console.log('clicked');
// })
// btn.addEventListener('mouseout', function() {
//     console.log('clicked');
// })
// btn.addEventListener('click', function() {
//     console.log(color.value);
// })