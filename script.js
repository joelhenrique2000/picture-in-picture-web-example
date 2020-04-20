const videoElement = document.getElementById('video')
const buttonToggleElement = document.getElementById('btn')
const logBoxElement = document.getElementById('log')

buttonToggleElement.addEventListener("click", async function(event) {
  
  try {
    if (videoElement !== document.pictureInPictureElement)
      await videoElement.requestPictureInPicture();
    else
      await document.exitPictureInPicture();
  } catch(error) {
  } finally {
  }

})