alert('NO GALATASARAY FANS ALLOWED!!!')
// main.js

// Function to change the content of the main section
function changeContent() {
  // Get the element with the id 'mainContent'
  var mainContent = document.getElementById('mainContent');

  // Update the text content of the mainContent element
  mainContent.textContent = "New Content! Fenerbahce Forever!";

  // Change the background color of the mainContent element
  mainContent.style.backgroundColor = '#d9ffd9';
}

// Find the button by tag name (assumes it's the first button in the document)
var buttons = document.getElementsByTagName('button');

// Check if there is at least one button in the document
if (buttons.length > 0) {
  // Add an event listener to the first button found
  buttons[0].addEventListener('click', changeContent);
}
