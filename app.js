
const hexColors = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

const boxesContainer = document.createElement('DIV');
boxesContainer.className = "boxesContainer";

document.body.appendChild(boxesContainer);

const windowHeight = window.innerHeight;

boxesContainer.style.height = (windowHeight - 100)+ "px";

let white = false;

for (let i = 0; i < 8; i++) {
  let row = document.createElement('DIV');
  row.className = 'row';
  row.style.height = (windowHeight - 100)/8+ 'px';
  boxesContainer.appendChild(row);

  for (let i = 0; i < 14; i++) {
    let box = document.createElement('DIV');
    box.className = 'box';

    box.addEventListener('mouseover', function (evt) {
      evt.target.style.backgroundColor = colorGenerator();
      evt.target.classList.add('boxBorderOn');
      console.log(evt.target.getAttribute('backgroundColor'));
    });

    box.addEventListener('mouseout', function (evt) {
      evt.target.classList.remove('boxBorderOn');
    });

    row.appendChild(box);
  }

}

function colorGenerator () {

  let rgb = [];

  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 256));
  }

  return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;

}

console.log(colorGenerator());
