function movePage(e) {

if(e == "mid"){
    window.location.href="#mid-page";
}else if(e == "miss"){
    window.location.href="#miss";
}


}



function copyCA() {
    // Get the text field
    var copyText = document.getElementById("ca");
    
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    
        // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

}


var myListener = function () {
    document.removeEventListener('mousemove', myListener, false);
    // do stuff
    var audio = new Audio('../assets/ip-theme.mp3');
    audio.volume = 0.3; // Reduce the Volume by Half
    audio.play();
};

document.addEventListener('mousemove', myListener, false);




// Get a reference to the .mask element.
const mask = document.querySelector('.mask');
// Get the root element
const root = document.documentElement;
// Add an event to catch mouse movements.
document.addEventListener('mousemove', (pos) => {
  
    // Calculate mouse position in percentages.
    let x = parseInt( pos.clientX / window.innerWidth * 100 );
    let y = parseInt( pos.clientY / window.innerHeight * 100 );
    
    //console.log(mask.getAttribute("mask"));

    // Update the custom property values on the body.
    root.style.setProperty('--mouse-x', x + '%');
    root.style.setProperty('--mouse-y', y + '%'); 
  
});

