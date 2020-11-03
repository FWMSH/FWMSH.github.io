// This file contains the code corresponding to the "artifact buttons" interface
// type, in which the user clicks on a series of buttons to choose from one
// item or another.

function configureInterfaceForButtons() {

  // Function to set up the app interface for the button interface

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

    var html = "<div class='artifactButton' onclick='buildPage(" + index + ")'>";
    html += "<img class='artifactButtonImage' src='" + thumb + "'>"
    html += "<div class='artifactButtonText'>" + nameDict[index] + "</div></div>"
    list.innerHTML += html
  }

}
