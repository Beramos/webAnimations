window.addEventListener('load', eventWindowLoaded, false);
canvasOne.addEventListener('mousemove',mouseOver,false);
var videoElement;
var videoDiv;
var imageElement;
var bg_src = 'https://upload.wikimedia.org/wikipedia/commons/8/85/Kalmthout_Frans_Raatstraat_Watertoren.JPG';
// Magnifier visible? (on/off)
var magnifier_radius 	 = 100;    // radius of magnifier (px)		
var magnifier_state = 'off';  // placeholder
var Magnifying_glass = {x:0,y:0,state:magnifier_state,rad:magnifier_radius};


function eventWindowLoaded() {
    imageElement = document.createElement('IMG');
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
    imageElement.setAttribute("src", bg_src);
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
        context.drawImage(imageElement,0,0);
        context.save();
        context.beginPath();
        context.arc(Magnifying_glass.x, Magnifying_glass.y, 74, 0, Math.PI * 2, false);
        context.clip();
        context.drawImage(videoElement,500,200);
        context.restore();
        console.log(Magnifying_glass.x);
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

function mouseOver (e) {
    Magnifying_glass.x=e.pageX;
    Magnifying_glass.y=e.pageY;
}
