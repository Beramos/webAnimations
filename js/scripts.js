window.addEventListener('load', eventWindowLoaded, false);
canvasOne.addEventListener('mousemove',mouseOver,false);
var videoElement;
var videoDiv;
var imageElement;
var bg_src = 'figs/Kalmthout_Frans_Raatstraat_Watertoren_rotated.JPG';
var bg_src_lowBright = 'figs/Kalmthout_Frans_Raatstraat_Watertoren_rotated_less_Bright.JPG'
// Magnifier visible? (on/off)
var magnifier_radius 	 = 200;    // radius of magnifier (px)		
var magnifier_state = 'off';  // placeholder
var Magnifying_glass = {x:-100,y:-100,state:magnifier_state,rad:magnifier_radius};


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
    videoElement.setAttribute("src", "vids/simulationOnWaterTower.webm");
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
        context.drawImage(imageElement,300,60,1000,1013,0,0,800,760);
        context.save();
        context.beginPath();
        context.arc(Magnifying_glass.x, Magnifying_glass.y, Magnifying_glass.rad, 0, Math.PI * 2, false);
        context.clip();
        context.drawImage(videoElement,0,0,1000,1013,0,0,800,760);
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
    imageElement.setAttribute("src", bg_src_lowBright);
    Magnifying_glass.x=e.pageX;
    Magnifying_glass.y=e.pageY;
}
