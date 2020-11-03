// This file holds code related to displaying and manipulating the artifact page

function showLightboxOverlay() {

  // Funciton to show the overlay with the image lightbox and captionDict

  document.getElementById('lightboxOverlay').style.display = 'block';
}

function hideLightboxOverlay() {

  // Funciton to show the overlay with the image lightbox and captionDict

  document.getElementById('lightboxOverlay').style.display = 'none';
}

function handleAudioError() {

  // Funciton called when we try to play an audio file that doesn't exist,
  // Usually because something put in an invalid number

  label = document.getElementById('clipName');
  label.innerHTML = 'Entry not found!';
  setAudioState('pause');
}

function togglePlayPause() {
  if (audioState == 'play') {
    setAudioState('pause');
  } else {
    setAudioState('play');
  }
}

function setAudioState(val) {

  // Set the audio state and update the interface button

  audio = document.getElementById('audio');

  if (val == 'play') {
    audioState = 'play';
    if (document.getElementById('playPauseButton')) {
      document.getElementById('playPauseButton').innerHTML = '⏸️';
    }
    audio.play();
  } else if (val == 'pause'){
    audioState = 'pause';
    if (document.getElementById('playPauseButton')) {
      document.getElementById('playPauseButton').innerHTML = '▶️';
    }
    audio.pause();
  } else if (val == 'reset') {
      audio.currentTime = 0;
  }
}

function playAudio(num) {

  // Function to look up an audio file in the audioDict, load it, and play it.

  // If the playPauseButton exists, it means that this page has an
  // audio file. Try to load it and play it.
  if (typeof audioDict[num] !== 'undefined') {
    audio.src = audioDict[num];
    setAudioState('play');
  } else {
    document.getElementById('audioControlBar').style.display = 'none';
  }
}

function buildPage(num) {

  // Builds an artifact page by loading all the necessary content from the various dictionaries.
  // num gives the index of the artifact to be loaded.

  if (isFinite(num)) { // User has entered a number

    if (num in nameDict) { // Check the dict for the given number

      // Validate the data shared across media_types

      var image_path;
      var caption;
      var youTubeLink;

      let objectName = nameDict[num];
      if (typeof imageDict[num] !== "undefined") {
        image_path = imageDict[num];
      } else image_path = "";
      if (typeof captionDict[num] !== "undefined") {
        caption = captionDict[num];
      } else caption = "";
      if (typeof youTubeDict[num] !== "undefined") {
        youTubeLink = youTubeDict[num];
      } else youTubeLink = "";

      // Now build the appropriate layout

      if (mediaType == 'text') { // Build a text page

        var text;

        if (typeof textDict[num] !== "undefined") {
          text = textDict[num];
        } else text = "";

        if (image_path != '') { // We have a picture
          html = generateImageTextBlock(objectName, image_path, caption, text);
        } else if (youTubeLink != '') { // We have a YouTube video
          html = generateYouTubeTextBlock(objectName, youTubeDict[num], text);
        }
        else { // No picture or YouTube video
          html = generateTextOnlyBlock(nameDict[num],text);
        }

      } else if (mediaType == 'audio') { // Build an audio page

        if (image_path != '') { // We have a picture
          html = generateAudioImageBlock(objectName, image_path, caption);
        } else if (youTubeLink != '') { // We have a YouTube video
          html = generateAudioYouTubeBlock(objectName, youTubeDict[num]);
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
    // audio file. Try to load it and play it.
    if (document.getElementById('playPauseButton')) {
      playAudio(num);
    }

    document.getElementById('header').style.display = 'none';
    document.getElementById('inputPane').style.display = 'none';
    document.getElementById('contentPane').style.display = 'block';

  }
}

function generateTextOnlyBlock(objName, objText) {

  // Function to show only text about an object. This should be used rarely.

  html = "<div class='objectName'>"+objName+"</div>"
  html += '<br>' + "<div id='objectDesc' class='objectText' style='height: 80%;'>" + objText + "</div>"

  return(html)
}

function generateImageTextBlock(objName, imgName, imgCaption, objText) {

  // Function to return an HTML block with an image, caption, and text
  // nicely formatted.

  document.getElementById('lightboxImage').src = imgName;
  document.getElementById('lightboxImageCaption').innerHTML = imgCaption;

  html = "<div class='objectName'>"+objName+"</div>"
  html += "<img class='objectImage' onclick='showLightboxOverlay()' src='" + imgName + "'>"
  html += "<div id='objectDesc' class='objectText'>" + objText + "<div class='paddingBlock'></div></div>"

  return(html)
}

function generateAudioOnlyBlock(objName) {

  // Function to return an HTML block with the artifact name and the controls
  // for audio playback.

  html = "<div class='objectName'>"+objName+"</div>"
  html += `
  <div id='audioControlBar'>
    <div class='audioControl' onclick='setAudioState("reset")'>⏮️</div>
    <div class='audioControl' id='playPauseButton' onclick='togglePlayPause()'>▶️</div>
  </div><br>
  `

  return(html)
}

function generateAudioImageBlock(objName, imgName, imgCaption) {

  // Function to return an HTML block with the artifact name, the controls
  // for audio playback, and an image with its caption.

  document.getElementById('lightboxImage').src = imgName;
  document.getElementById('lightboxImageCaption').innerHTML = imgCaption;

  html = ''

  html += "<div class='objectName'>"+objName+"</div>"
  html +=  `
        <div id='audioControlBar'>
          <div class='audioControl' onclick='setAudioState("reset")'>⏮️</div>
          <div class='audioControl' id='playPauseButton' onclick='togglePlayPause()'>▶️</div>
        </div>
        `
  html += "<img class='objectImage' onclick='showLightboxOverlay()' src='" + imgName + "'>"
  html += "<div class='objectImageCaption' style='max-height: 30vh'>" + imgCaption + "</div>"

  return(html)
}

function generateAudioYouTubeBlock(objName, link) {

  // Function to return an HTML block with the artifact name, the controls
  // for audio playback and a YouTube embed

  let width = document.getElementById("inputPane").offsetWidth; // This is the same width the contentPane will be when it is shown.
  let height = width * 9 / 16;

  html = "<div class='objectName'>"+objName+"</div>"
  html += `
  <div id='audioControlBar'>
    <div class='audioControl' onclick='setAudioState("reset")'>⏮️</div>
    <div class='audioControl' id='playPauseButton' onclick='togglePlayPause()'>▶️</div>
  </div><br>
  `
  html += '<iframe width="' + width + '" height="' + height + '" src="' + link + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>'

  return(html)
}

function generateYouTubeTextBlock(objName, link, objText) {

  // Function to return an HTML block with a YouTube embed and a text block.

  let width = document.getElementById("inputPane").offsetWidth; // This is the same width the contentPane will be when it is shown.
  let height = width * 9 / 16;

  html = "<div class='objectName'>"+objName+"</div>"
  html += '<iframe width="' + width + '" height="' + height + '" src="' + link + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>'
  html += "<div id='objectDesc' class='objectText'>" + objText + "<div class='paddingBlock'></div></div>"

  return(html)
}

function generateAudioScriptBlock(objName, script) {

  // Function to return an HTML block with the artifact name, the controls
  // for audio playback and a custom iframe. Cannot use <script> tags!

  html = `
  <div id='audioControlBar'>
    <div class='audioControl' onclick='setAudioState("reset")'>⏮️</div>
    <div class='audioControl' id='playPauseButton' onclick='togglePlayPause()'>▶️</div>
  </div>
  `
  html += "<div class='objectName''>"+objName+"</div>"
  html += script

  return(html)
}
