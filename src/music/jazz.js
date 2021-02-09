	var sounds = new Array();
            sounds[0]="/music/jazz/jazz1.mp3";
            sounds[1]="/music/jazz/jazz2.mp3";
            sounds[2]="/music/jazz/jazz3.mp3";
            sounds[3]="/music/jazz/jazz4.mp3";
            sounds[4]="/music/jazz/jazz5.mp3";
        function getRandomSounds() {
            var randomNum = Math.floor(Math.random() * sounds.length);
            document.getElementById("jazz").src = sounds[randomNum];
        }
        document.getElementById("jazz").addEventListener("ended", getRandomSounds);
        getRandomSounds();