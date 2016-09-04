const boards =
{ board1: [
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
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
      cellClicked.style.backgroundColor = 'maroon';
    } else {
      cellClicked.style.backgroundColor = 'lightblue';
    }
  });
}
// onclick open new window containing game rules

// onclick restart new game
// const newGame = newGame;
// const restartPlay = restartPlay;
// $('#restart-btn').click(function (e) {
//     newGame();
//     restartplay();
// });

// Open Modal

// Get the modal
const modal = document.getElementById('popUp');

// Get the button that opens the modal
const btn = document.getElementById('rules');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function (open) {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function (close) {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
