window.addEventListener('load', eventWindowLoaded, false);
var videoElement;
var videoDiv;

function eventWindowLoaded() {
    videoElement = document.createElement("video");
    videoDiv = document.createElement('div');
    document.body.appendChild(videoDiv);
    videoDiv.appendChild(videoElement);
    videoDiv.setAttribute("style", "display:none;");
    
    var videoType = supportedVideoFormat(videoElement);
    if (videoType == "") {
        alert("no video support");
        return;
    }
    
    videoElement.addEventListener("canplaythrough",videoLoaded,false);
    videoElement.setAttribute("src", "vids/pidpaSubmergedFilling.webm");
    //videoElement.setAttribute("src", "muirbeach." + videoType); if everything works responsive videos
}

function canvasSupport () {
     return Modernizr.canvas;
}

function videoLoaded(event) {
   canvasApp();
}

function supportedVideoFormat(video) {
   var returnExtension = "";
   if (video.canPlayType("video/webm") =="probably" ||
       video.canPlayType("video/webm") == "maybe") {
         returnExtension = "webm";
   } else if(video.canPlayType("video/mp4") == "probably" ||
       video.canPlayType("video/mp4") == "maybe") {
         returnExtension = "mp4";
   } else if(video.canPlayType("video/ogg") =="probably" ||
       video.canPlayType("video/ogg") == "maybe") {
         returnExtension = "ogg";
   }
   return returnExtension;
}

function canvasApp() {
   if (!canvasSupport()) {
          window.alert("no canvas support");
          return;
        }

function  drawScreen () {
      //Background
      context.drawImage(videoElement,0,0);
   }

   var theCanvas = document.getElementById("canvasOne");
   var context = theCanvas.getContext("2d");
   videoElement.play();
   window.alert("playing vid");
    
   function gameLoop() {
      window.setTimeout(gameLoop, 20);
      drawScreen();
   }

   gameLoop();
}