// This file contains the code corresponding to the "artifact buttons" interface
// type, in which the user clicks on a series of buttons to choose from one
// item or another.

function configureInterfaceForButtons() {

  // Function to set up the app interface for the button interface

  inputLabel_text_en = 'Choose an Artifact';

  document.getElementById("artifactList").style.display = "block";
  document.getElementById("keypad_entry").style.display = "none";
  populateArtifactButtons();

}

function populateArtifactButtons() {

  // Function to create an ArifactButton for each elemtnt in nameDict and add it to the artifactList

  var list = document.getElementById('artifactList');
  for (i=1; i<Object.keys(nameDict).length; i++) {
    let index = i.toString()
    var html = "<div class='artifactButton' onclick='loadItemFromButton(" + index + ")'>";
    html += "<img class='artifactButtonImage' src='" + thumbDict[index] + "'>"
    html += "<div class='artifactButtonText'>" + nameDict[index] + "</div></div>"
    list.innerHTML += html
  }

}


function loadItemFromButton(num) {

  // Function to take the input number, search for a tour clip and play it

  audio = document.getElementById('audio');
  // numLabel = document.getElementById('number-input');
  //
  // var html = '';
  // var num = parseInt(numLabel.innerHTML).toString() // To strip and leading 0

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

    //numLabel.innerHTML = '_';
  }
}
