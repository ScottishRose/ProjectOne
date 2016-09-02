const boards =
{ board1: [
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
],
};

const cellNodes = document.querySelector('.gameboard').querySelectorAll('div');
for (const cellNode of cellNodes) {
  cellNode.addEventListener('click', (e) => {
    const cellClicked = e.target;
    const coordString = cellClicked.getAttribute('data-id');
    const coordArray = coordString.split(',');
    const x = coordArray[0];
    const y = coordArray[1];
    const boardVal = boards.board1[x][y];
    if (boardVal === 1) {
      cellClicked.style.backgroundColor = 'red';
    } else {
      cellClicked.style.backgroundColor = 'blue';
    }
  });
}
console.log('arg matey!');
