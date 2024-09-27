let Colors = [];
function getRandomColor() {
let letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
}
function generateButtons() {
let buttonContainer = document.getElementById('buttonContainer');
for (let i = 0; i < 10; i++) {
let button = document.createElement('button');
button.innerText = 'Button ' + (i + 1);
let randomColor = getRandomColor();
button.style.backgroundColor = randomColor;
Colors.push(randomColor);
buttonContainer.appendChild(button);
}
}
function changeButtonColors(colorChoice) {
let buttons = document.querySelectorAll('#buttonContainer button');
buttons.forEach((button, index) => {
if (colorChoice === 'red' || colorChoice === 'green' || colorChoice === 'blue') {
button.style.backgroundColor = colorChoice;
} else if (colorChoice === 'random') {
button.style.backgroundColor = getRandomColor();
} else if (colorChoice === 'reset') {
button.style.backgroundColor = Colors[index];
}
});
}
function handleChange() {
let colorChoice = document.getElementById('colorSelect').value;
changeButtonColors(colorChoice);
}
  window.onload = generateButtons;
//   window.onload means when the page opens the buttons will display
