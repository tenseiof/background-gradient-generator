var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.getElementById('random');

function getGradientColors() {
	const getStyle = window.getComputedStyle(body).getPropertyValue('background');
	const regex = /(rgb(?:a)?\([^)]+\))/g; // Ищем все значения rgb() или rgba()
	const colors = getStyle.match(regex); // Извлекаем цвета
	if (colors && colors.length >= 2) {
		color1.value = rgbToHex(colors[1]); // Преобразуем в HEX и присваиваем
		color2.value = rgbToHex(colors[2]);
		css.textContent =
			'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
	}
}
getGradientColors();

// Функция преобразования RGB в HEX
function rgbToHex(rgb) {
	const rgbValues = rgb.match(/\d+/g); // Извлекаем числа из rgb(...)
	return `#${rgbValues
		.map(num => parseInt(num).toString(16).padStart(2, '0'))
		.join('')}`;
}

function setGradient() {
	body.style.background =
		'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

	css.textContent = body.style.background + ';';
}

// ---------------------------------RANDOM COLOR----------------------------------------
function generateRandomColor1() {
	var randomColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
	if (randomColor1.length != 7) {
		randomColor1 = generateRandomColor1();
	}
	return randomColor1;
}
function generateRandomColor2() {
	var randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
	if (randomColor2.length != 7) {
		randomColor2 = generateRandomColor2();
	}
	return randomColor2;
}

function generateRandomColor() {
	let randomColor1 = generateRandomColor1();
	let randomColor2 = generateRandomColor2();
	color1.value = randomColor1;
	color2.value = randomColor2;
	body.style.background =
		'linear-gradient(to right, ' + randomColor1 + ', ' + randomColor2 + ')';
	css.textContent = body.style.background + ';';
}

function randomize() {
	generateRandomColor();
}

button.addEventListener('click', randomize);

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
