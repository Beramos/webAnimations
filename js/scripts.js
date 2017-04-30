window.addEventListener('load', eventWindowLoaded, false);
canvasOne.addEventListener('mouseenter',mouseOver,false);
var videoElement;
var videoDiv;
var fg_src = 'http://am-team.be/images/example-pharma1/MetalChannelPharma750x500.png';
// Magnifier visible? (on/off)
var magnifier_radius 	 = 100;    // radius of magnifier (px)		
var magnifier_state = 'off';  // placeholder

var Magnifying_glass = {x:0,y:0,state:magnifier_state,rad:magnifier_radius};


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
          return;
        }

function  drawScreen () {
      //Background

        context.drawImage(videoElement,0,0);
   }

   var theCanvas = document.getElementById("canvasOne");
   var context = theCanvas.getContext("2d");
   videoElement.play();
    
   function gameLoop() {
      window.setTimeout(gameLoop, 20);
      drawScreen();
   }

   gameLoop();
}

function mouseOver () {
    window.alert('mouseOver');
}
