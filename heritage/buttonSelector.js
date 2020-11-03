// This file contains the code corresponding to the "artifact buttons" interface
// type, in which the user clicks on a series of buttons to choose from one
// item or another.

function configureInterfaceForButtons() {

  // Function to set up the app interface for the button interface

  inputLabel_text_en = 'Choose a Story';

  document.getElementById("artifactList").style.display = "block";
  document.getElementById("keypad_entry").style.display = "none";
  populateArtifactButtons();

}

function populateArtifactButtons() {

  // Function to create an ArifactButton for each elemtnt in nameDict and add it to the artifactList

  var list = document.getElementById('artifactList');
  for (i=1; i<Object.keys(nameDict).length; i++) {
    let index = i.toString();
    // Find the thumbnail image
    if (typeof thumbDict[index] !== 'undefined' && thumbDict[index] != '') {
      thumb = thumbDict[index];
    } else if (typeof thumbDict['1'] !== 'undefined' && thumbDict['1'] != '') { // Maybe we're using the same image for all thumbnails
      console.log("Warning: reusing thumbnail")
      thumb = thumbDict["1"];
    } else {
      thumb = '' // This will create visual problems but not crash
    }

    var html = "<div class='artifactButton' onclick='loadItemFromButton(" + index + ")'>";
    html += "<img class='artifactButtonImage' src='" + thumb + "'>"
    html += "<div class='artifactButtonText'>" + nameDict[index] + "</div></div>"
    list.innerHTML += html
  }

}


function loadItemFromButton(num) {

  // Function to take the input number, search for a tour clip and play it

  audio = document.getElementById('audio');

  if (isFinite(num)) { // User has entered a number

    if (num in nameDict) { // Check the dict for the given number

      if (mediaType == 'text') { // Build a text page

        if (typeof textDict[num] !== "undefined") {
          text = textDict[num]
        } else text = ""

        if (typeof imageDict[num] !== 'undefined' && imageDict[num] != '') { // We have a picture
          html = generateImageTextBlock(nameDict[num], imageDict[num], captionDict[num], text);
          document.getElementById('lightboxImage').src = imageDict[num];
          document.getElementById('lightboxImageCaption').innerHTML = captionDict[num];
        } else if (typeof youTubeDict[num] !== 'undefined' && youTubeDict[num] != '') { // We have a YouTube video
          html = generateYouTubeTextBlock(nameDict[num], youTubeDict[num], text);
        }
        else { // No picture or YouTube video
          html = generateTextOnlyBlock(nameDict[num],text);
        }

      } else if (mediaType == 'audio') { // Build an audio page

        if (typeof imageDict[num] !== 'undefined' && imageDict[num] != '') { // We have a picture
          html = generateAudioImageBlock(nameDict[num], imageDict[num], captionDict[num]);
          document.getElementById('lightboxImage').src = imageDict[num];
          document.getElementById('lightboxImageCaption').innerHTML = captionDict[num];
        } else if (typeof youTubeDict[num] !== 'undefined' && youTubeDict[num] != '') { // We have a YouTube video
          html = generateAudioYouTubeBlock(nameDict[num], youTubeDict[num]);
        }
        else { // No picture or YouTube video
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

  }
}
