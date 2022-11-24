console.log(" Welcome to Spotify");

//Initialize the variables
let songInfo = 0;
audioElement = new  Audio('https://youtu.be/WOdnRhWeHoY'); 
let masterPlay = document.getElementById('masterPlay');
let controller = document.getElementById('controller'); 

let songs = [
    {songName: "Daku", filepath:"https://youtu.be/WOdnRhWeHoY", coverpath:"cover/cover.jpeg"}
]

//audioelement.play();
//Handle play/pause button;
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('  fa-circle-play');
        masterPlay.classList.add(' fa-circle-pause');
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('  fa-circle-pause');
        masterPlay.classList.add(' fa-circle-play');
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timupdate');
})