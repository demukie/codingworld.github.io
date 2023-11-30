alert('NO GALATASARAY FANS ALLOWED!!!')

// Function to change the background color of the body
function changeBackgroundColor() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

// Event listener for a button click to change the background color
document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);
