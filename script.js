const data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "img/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "img/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "img/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "img/icon-visual.svg"
    }
  ]

const dataToEdit = document.querySelector('.summary__ratings');
data.forEach(element => {
  const div = document.createElement('div');
  const className = `summary__ratings-${element.category.toLowerCase()}`;
  div.className = className;
  const imageElement = document.createElement('img');
  imageElement.src = element.icon;
  div.appendChild(imageElement);
  const paragragh = document.createElement('p');
  paragragh.className = `${className}--text`;
  paragragh.innerText = element.category;
  div.appendChild(paragragh);
  const span = document.createElement('span');
  span.className = 'num';
  span.innerText = '/100';
  const scoreText = document.createElement('p');
  scoreText.innerText = element.score;
  scoreText.appendChild(span);
  div.appendChild(scoreText);
  dataToEdit.appendChild(div);
});
