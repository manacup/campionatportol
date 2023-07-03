

 document.addEventListener('DOMContentLoaded', function() {
     M.AutoInit();
    //identificador()
});
document.getElementById('divisio').onload = function() {
document.getElementById('spinner').style.display='none';
  

};

  function toggleFullScreen(elem) {
 // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
 if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
     if (elem.requestFullScreen) {
         elem.requestFullScreen({ navigationUI: 'hide' });
     } else if (elem.mozRequestFullScreen) {
         elem.mozRequestFullScreen({ navigationUI: 'hide' });
     } else if (elem.webkitRequestFullScreen) {
         elem.webkitRequestFullScreen({ navigationUI: 'hide' });
     } else if (elem.msRequestFullscreen) {
         elem.msRequestFullscreen({ navigationUI: 'hide' });
     }
 } else {
     if (document.cancelFullScreen) {
         document.cancelFullScreen();
     } else if (document.mozCancelFullScreen) {
         document.mozCancelFullScreen();
     } else if (document.webkitCancelFullScreen) {
         document.webkitCancelFullScreen();
     } else if (document.msExitFullscreen) {
         document.msExitFullscreen();
     }
 }
}


 function canviaUrl(href){
    
   if(document.getElementById("rec")!= undefined){
      document.getElementById("rec").setAttribute("href",href)
     
   }
 }
function clickEventHandler(e){
   console.log(e)
          
        if(e.target.matches("a")){
         
          canviaUrl(e.target.href);
        }
     if(e.target.matches("i")){
         
          canviaUrl(e.target.parentElement.href);
        }
            
  }

document.addEventListener("click",clickEventHandler);
