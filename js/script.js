function movePage(e) {

    if(e == "mid"){
        window.location.href="#mid-page";
    }else if(e == "miss"){
        window.location.href="#miss";
    }
    

    }

    var source = "https://drive.google.com/file/d/15nVZ1NRJM7jhg_0f5QWbSmk6V6quxW5P/view?usp=drive_link"
    var audio = document.createElement("audio");
    //
    audio.autoplay = true;
    //
    audio.load()
    audio.addEventListener("load", function() { 
        audio.play(); 
    }, true);
    audio.src = source;

    
    function copyCA() {
        // Get the text field
        var copyText = document.getElementById("ca");
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
      
      }