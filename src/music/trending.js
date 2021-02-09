	var sounds = new Array();
            sounds[0]="/music/relaxation/relaxation1.mp3";
            sounds[1]="/music/relaxation/relaxation2.mp3";
            sounds[2]="/music/relaxation/relaxation3.mp3";
            sounds[3]="/music/relaxation/relaxation4.mp3";
            sounds[4]="/music/relaxation/relaxation5.mp3";
        function getRandomSounds() {
            var randomNum = Math.floor(Math.random() * sounds.length);
            document.getElementById("trending").src = sounds[randomNum];
        }
        document.getElementById("trending").addEventListener("ended", getRandomSounds);
        getRandomSounds();