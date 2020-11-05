// This code corresponds to the "keypad" interface type, in which the user
// inputs the artifact they want by typing in a number

function configureInterfaceForKeypad() {

  // Function to set up the app interface for the keypad

  document.getElementById("artifactList").style.display = "none";
  document.getElementById("keypad_entry").style.display = "block";

}

function pressKey(val) {

  // Function to take a press from the keypad and update the number label

  numLabel = document.getElementById('number-input');

  if (val >= 0) {
    if (numLabel.innerHTML == '_') {
      numLabel.innerHTML = ''
    }
    numLabel.innerHTML += val
  } else { // We've hit the back button
    numLabel.innerHTML = numLabel.innerHTML.slice(0,-1)
    if (numLabel.innerHTML.length == 0) {
      numLabel.innerHTML = '_'
    }
  }
}

function loadItemFromKeypad() {

  // Function to take the input number and show the corresponding page

  let numLabel = document.getElementById('number-input');

  var num = parseInt(numLabel.innerHTML).toString() // To strip and leading 0

  buildPage(num);
  numLabel.innerHTML = '_';
}
