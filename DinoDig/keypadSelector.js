// This code corresponds to the "keypad" interface type, in which the user
// inputs the artifact they want by typing in a number

function configureInterfaceForKeypad() {

  // Function to set up the app interface for the keypad

  inputLabel_text_en = 'Use the keypad to enter a label number';

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

  audio = document.getElementById('audio');
  numLabel = document.getElementById('number-input');

  var html = '';
  var num = parseInt(numLabel.innerHTML).toString() // To strip and leading 0

  if (isFinite(num)) { // User has entered a number

    if (num in nameDict) { // Check the dict for the given number

      if (mediaType == 'text') { // Build a text page

        if (imageDict[num] != '') { // We have a picture
          html = generateImageTextBlock(nameDict[num], imageDict[num], captionDict[num], textDict[num]);
          document.getElementById('lightboxImage').src = imageDict[num];
          document.getElementById('lightboxImageCaption').innerHTML = captionDict[num];
        } else { // No picture
          html = generateTextOnlyBlock(nameDict[num],textDict[num]);
        }

      } else if (mediaType == 'audio') { // Build an audio page

        if (imageDict[num] != '') { // We have a picture
          html = generateAudioImageBlock(nameDict[num], imageDict[num], captionDict[num]);
          document.getElementById('lightboxImage').src = imageDict[num];
          document.getElementById('lightboxImageCaption').innerHTML = captionDict[num];
        } else { // No picture
          html = generateAudioOnlyBlock(nameDict[num]);
        }
      }

      document.getElementById('contentPane').innerHTML = html;
      var objectText = document.getElementsByClassName('objectText');
      for (i=0; i<objectText.length; i++) {
        objectText[i].style.fontSize = fontSize + 'px';
      }
      var objectImageCaption = document.getElementsByClassName('objectImageCaption');
      for (i=0; i<objectImageCaption.length; i++) {
        objectImageCaption[i].style.fontSize = fontSize + 'px';
      }

    }
    else {
      document.getElementById('contentPane').innerHTML = generateTextOnlyBlock(nameDict['error'], textDict['error']);
    }

    // If the playPauseButton exists, it means that this page has an
    // audio file. Load it and play it.
    if (document.getElementById('playPauseButton')) {
      audio.src = audioDict[num];
      setAudioState('play');
    }

    document.getElementById('header').style.display = 'none';
    document.getElementById('inputPane').style.display = 'none';
    document.getElementById('contentPane').style.display = 'block';

    // var height = 0.45*$('#contentPane').height();
    // console.log($('.objectImage').outerHeight());
    // $('#objectDesc').height(height);

    numLabel.innerHTML = '_';
  }
}
