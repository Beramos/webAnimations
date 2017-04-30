var canvas2 = document.getElementById('c2');
var ctx2 = canvas2.getContext('2d');
var vid = document.createElement('video');
vid.src = 'http://bramdejaegher.be/images/pidpaMasked.mp4';
vid.autoPlay = true;

$(document).ready(function(){
  // img.src = bg_src;
  // ctx.drawImage(img, -180, 0, 856,1144); 
      ctx2.drawImage(vid,0,0); 
   
  // var Magnifying_glass = {x:0,y:0,state:magnifier_state,rad:magnifier_radius};
  
  /*$("#c").on("mousemove", function(e){
    
    //Get mouse position
    Magnifying_glass.x=e.pageX;
    Magnifying_glass.y=e.pageY;
  
  	img.src = bg_src; 	// Change image source to background
    ctx.drawImage(img, 0, 0); 								 	// Draw image
    ctx.save();																	// Save state to undo clip later
    ctx.beginPath();														// Initiate a path
    ctx.arc(Magnifying_glass.x, Magnifying_glass.y, Magnifying_glass.rad, 0, Math.PI * 2, false); // Draw an arc at the mouse pointer
    ctx.clip(); 																																// Clip the arc
    //ctx.fillRect(0, 0, 200, 158); 				// fill entire clip with black pixel (avoid fg image cominn through where fg and bg are not overlapping anymore)
    img.src=fg_src 	// fg image source
    ctx.drawImage(img, 0, 0,700,450,0,0,700,450); 																		// draw fg image in clipped area
    ctx.restore();																															// restore to last save point (undo the clipping)
    //void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  });
   
   $("#c").on("mouseleave", function(){
   	img.src = bg_src;
   	ctx.drawImage(img, 0, 0); 
    
  }); */
});
