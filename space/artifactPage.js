// This file holds code related to displaying and manipulating the artifact page

function showLightboxOverlay() {

  // Funciton to show the overlay with the image lightbox and captionDict

  document.getElementById('lightboxOverlay').style.display = 'block';
}

function hideLightboxOverlay() {

  // Funciton to show the overlay with the image lightbox and captionDict

  document.getElementById('lightboxOverlay').style.display = 'none';
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

  html = "<div class='objectName'>"+objName+"</div>"
  html += "<img class='objectImage' onclick='showLightboxOverlay()' src='" + imgName + "'>"
  //html += "<div class='objectImageCaption'>" + imgCaption + "</div>"
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
