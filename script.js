const videoElement = document.getElementById('video')
const buttonToggleElement = document.getElementById('btn')
const logBoxElement = document.getElementById('log')

buttonToggleElement.addEventListener("click", async function(event) {
  
  try {
    if (videoElement !== document.pictureInPictureElement) {
      console.log('Picture-in-Picture actived')
      buttonToggleElement.disabled = true;
      await videoElement.requestPictureInPicture();
      buttonToggleElement.disabled = false;
    } else {
      console.log('Picture-in-Picture desabled')
      await document.exitPictureInPicture();
    }
  } catch(error) {
    console.log('Picture-in-Picture error ', error)
  } finally {
    buttonToggleElement.disabled = false;
  }

})

// Listening to picture-in-picture when it is activated
video.addEventListener('enterpictureinpicture', function(event) {
  console.log('actived Picture-in-Picture');

  pictureInPictureWindow = event.pictureInPictureWindow;
  console.log(`size: ${pictureInPictureWindow.width}x${pictureInPictureWindow.height}`);

  pictureInPictureWindow.addEventListener('resize', onPipWindowResize);
});

// Listening to picture-in-picture when it is desabled
video.addEventListener('leavepictureinpicture', function(event) {
  console.log('> desabled Picture-in-Picture');

  pictureInPictureWindow.removeEventListener('resize', onPipWindowResize);
});

// Listening to picture-in-picture when it is resized
function onPipWindowResize(event) {
  console.log(`size: ${pictureInPictureWindow.width}x${pictureInPictureWindow.height}`);
}