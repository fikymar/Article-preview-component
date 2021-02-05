const mainContainer = document.querySelector(".main");
const footerH6 = document.querySelector(".main__footer>h6");
const shareIcon = document.getElementById("shareIcon");
const overlayShareIcon = document.getElementById("overlay_shareIcon");
const overlay = document.querySelector(".overlay");
const overlayMedium = document.querySelector(".overlay_medium");


window.addEventListener("load", function() {
    widthBiggerthenHeightResponsivity();
    overlayShow();
});

window.addEventListener("resize", function() {
    widthBiggerthenHeightResponsivity();
    overlayShow();
});



// aim to mobile 480px * 320px
function widthBiggerthenHeightResponsivity() {
    if (window.innerWidth < 600 && window.innerWidth > window.innerHeight) {
        mainContainer.style.height = "92vh";
        mainContainer.style.rowGap = "0px";
        footerH6.style.alignSelf = "end";
    
        }
        }

// overlay 
function overlayShow (){
    shareIcon.addEventListener("click", function() {
        if (window.innerWidth < 1025) {
        overlay.classList.add("overlayShow")
      
       
        };
       
            if(overlayMedium.style.opacity == 0 && window.innerWidth > 1023){
            overlayMedium.style.opacity = "1";
            overlayMedium.style.height = "6.9vh";
            overlay.classList.remove("overlayShow");
            }
            else if (overlayMedium.style.opacity == 1) {
                overlayMedium.style.opacity = "0";
                overlayMedium.style.height = "0";
            };

        
    });

    overlayShareIcon.addEventListener("click", function(){
        overlay.classList.remove("overlayShow")
        
    });
   
};