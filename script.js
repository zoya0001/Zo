    document.addEventListener("DOMContentLoaded", function () {

    var touchBtn = document.getElementById("touchBtn");
    var hiddenText = document.getElementById("hiddenText");
    var musicBtn = document.getElementById("musicBtn");
    var music = document.getElementById("bg-music");

    
    touchBtn.addEventListener("click", function () {
        hiddenText.style.display = "block";
    });

    
    musicBtn.addEventListener("click", function () {

        if (music.paused) {
            music.play().then(function(){
                musicBtn.innerHTML = "🔇 Stop Music";
            }).catch(function(error){
                console.log(error);
            });
        } else {
            music.pause();
            musicBtn.innerHTML = "🎵 Play Music";
        }

    });
});