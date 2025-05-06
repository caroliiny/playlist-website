const player = document.getElementById("player");
const apiUrl = "https://itunes.apple.com/";

let currentMusic = null;
let currentBox = null;


async function search(musicName, artistName, box) {

  const button = box.querySelector(".btnPlayer");
  const url = `${apiUrl}/search?term=${musicName}&entity=song`;
  const response = await fetch(url);
  
  const music = await response.json().then((result) => {

    const bestResult = result.results.find((music) => {

      return treatName(music.artistName.toLowerCase()) === artistName.toLowerCase();

    });

    return bestResult;

  });
  
  const isSameMusic = currentMusic && currentMusic.trackId === music.trackId;


  if (isSameMusic) { 
    
    if (player.paused) {

      currentBox = box;
      player.play();
      updateButton(box, button, true);
      console.log("Retomando:", music.trackName);
      
    } else {

      player.pause();
      updateButton(box, button, false);
      console.log("Pausando:", music.trackName);

    }

  } else {

    currentMusic = music;
    currentBox = box;
    player.src = music.previewUrl;
    player.play();
    updateAll();
    updateButton(box, button, true);
    console.log("Tocando:", musicName);
    
  }
  
}


const playlist = document.getElementById("playlist");
let musicNumber = 1;

window.onload = () => {

  musicas.forEach((music, index) => { //loop

    console.log("Música:",musicNumber, "-", music);
    musicNumber ++;
    const div = document.createElement("div"); //to create music box
    const musicName = treatName(music.name);
    const musicArtist = treatName(music.artist);
    

    const imgNumber = (index % 30) + 1; 
    const img = document.createElement("img"); // to create images
    img.src = `./imagens/img${imgNumber}.jpeg`; 
    img.alt = `Imagem da música ${music.name}`;
    img.classList.add("music-img");

    //music player buttons
    const playerHTML = `

      <div class="progress-bar">
        <div class="progress"></div>
      </div>
       <div class="musicTime">
          <span class="currentTime">00:00</span>
          <span class="duration">00:30</span>
        </div>


      <div class="controls">

        <button class="btnPlayer">
          <i class='bx bx-caret-right'></i>
          <i class="bx bx-pause" style="display: none;"></i>
        </button>

        <button class="favoriteIcon">
          <i class="bx bx-heart"></i>
          <i class="bx bxs-heart" style="display: none"></i>
        </button>

      </div>

    `;

    div.innerHTML = `
      <h2>${music.name}</h2>
      <p>${music.artist}</p>
      ${playerHTML}
    `;

    div.classList.add("music-box");
    div.prepend(img); 
    playlist.appendChild(div);
    
    const btnPlayer = div.querySelector(".btnPlayer");

    btnPlayer.addEventListener("click", () => {
      search(music.name, music.artist, div);
    });


  });


}