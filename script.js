const player = document.getElementById("player");
const apiUrl = "https://itunes.apple.com/";

function treatName(name) {
  return name.replace(/[^a-zA-Z0-9'\s]/g, '').trim();
}

let currentMusic = null;

async function search(musicName, artistName, box) {

  const button = box.querySelector(".btnPlay");
  const url = `${apiUrl}/search?term=${musicName}&entity=song`;
  const response = await fetch(url);
  
  const music = await response.json().then((result) => {

    const bestResult = result.results.find((music) => {

      return treatName(music.artistName.toLowerCase()) === artistName.toLowerCase();

    });

    return bestResult;

  });
  
  function initTwinkle(box) {

    let twinkleInterval = setInterval(() => {
      box.classList.toggle("twinkle");
    }, 600);
  
    box.dataset.twinkleId = twinkleInterval;
    
  }

  function stopTwinkle(box) {
    clearInterval(box.dataset.twinkleId);
    box.classList.remove("twinkle");
  }
  
  function updateButton(button, isPlaying) {

    const playIcon = button.querySelector(".bx-caret-right");
    const pauseIcon = button.querySelector(".bx-pause");
  
    if (isPlaying) {
      playIcon.style.display = "none";
      pauseIcon.style.display = "inline";
      initTwinkle(box); 
    }

    else {
      playIcon.style.display = "inline";
      pauseIcon.style.display = "none";
      stopTwinkle(box);
    }

  }
  
  const isSameMusic = currentMusic && currentMusic.trackId === music.trackId;

  
  if (isSameMusic) { 
    
    if (player.paused) {

      player.play();

      player.addEventListener("timeupdate", () => {
        console.log(player.currentTime / player.duration * 100);
        box.querySelector(".progress").style.width = player.currentTime / player.duration * 100 + "%";
      })
      
      player.addEventListener("ended", () => {
        stopTwinkle(box);
        updateButton(button, false);

      })

      updateButton(button, true);
      console.log("Retomando:", music.trackName);

    } else {

      player.pause();
      updateButton(button, false);
      console.log("Pausando:", music.trackName);
    }

  } else {

    currentMusic = music;
    player.src = music.previewUrl;
    player.play();

    player.addEventListener("timeupdate", () => {
      console.log(player.currentTime / player.duration * 100);
      box.querySelector(".progress").style.width = player.currentTime / player.duration * 100 + "%";
    })
    
    player.addEventListener("ended", () => {
      stopTwinkle(box);
      updateButton(button, false);

    })

    updateAll();
    updateButton(button, true);
    console.log("Tocando:", musicName);
    stopTwinkle(box);
    
  }
  //UPDATE ALL ICONS
  function updateAll() {
    
  const allBoxes = document.querySelectorAll('.music-box');

  allBoxes.forEach(box => {

    const playIcon = box.querySelector(".bx-caret-right");
    const pauseIcon = box.querySelector(".bx-pause");

    if (playIcon && pauseIcon) {
      playIcon.style.display = "inline";
      pauseIcon.style.display = "none";
    }

    stopTwinkle(box); // parar o efeito das outras músicas

  });
}
  
}

//music: title and artist name
const musicas = [
    {
      name: "Annie's song",
      artist:"John Denver"
    },
    {
      name: "Soldier, Poet, King",
      artist:"The Oh Hellos"
    },
    {
      name: "Still Loving You",
      artist: "Scorpions"
    },
    {
      name: "Don't Cry",
      artist: "Guns N' Roses"
    },
    {
      name: "Always Somewhere",
      artist: "Scorpions"
    },
    {
      name: "Wind Of Change",
      artist: "Scorpions"
    },
    {
      name: "Send Me An Angel",
      artist: "Scorpions"
    },
    {
      name: "Nothing Else Matters",
      artist: "Metallica"
    },
    {
      name: "Heaven",
      artist: "Bryan Adams"
    },
    {
      name: "Sweet Child O' Mine",
      artist: "Guns N' Roses"
    },
    {
      name: "Have You Ever Seen The Rain",
      artist: "Creedence Clearwater Revival"
    },
    {
      name: "Everybody Hurts",
      artist: "REM"
    },
    {
      name: "Imagine",
      artist: "John Lennon"
    },
    {
      name: "Spending My Time",
      artist: "Roxette"
    },
    {
      name: "Slipping Through My Fingers",
      artist: "ABBA"
    },
    {
      name: "The Moon Will Sing",
      artist: "The Crane Wives"
    },
    {
      name: "No Surprises",
      artist: "Radiohead"
    },
    {
      name: "The Temple Of The King",
      artist: "Rainbow"
    },
    {
      name: "Dreams",
      artist: "The Cranberries"
    },
    {
      name: "Piano Man",
      artist: "Billy Joel"
    },
    {
      name: "Girls Just Want to Have Fun",
      artist: "Cyndi Lauper"
    },
    {
      name: "Vienna",
      artist: "Billy Joel"
    },
    {
      name: "Wasted On You",
      artist: "Evanescence"
    },
    {
      name: "There Is a Light That Never Goes Out",
      artist: "The Smiths"
    },
    {
      name: "Beautiful Boy (Darling Boy)",
      artist: "John Lennon"
    },
    {
      name: "Your Song",
      artist: "Elton John"
    },
    {
      name: "Take My Breath Away - Love Theme from Top Gun",
      artist: "Berlin"
    },
    {
      name: "Iris",
      artist: "The Goo Goo Dolls"
    },
    {
      name: "Wherever You Will Go",
      artist: "The Calling"
    },
    {
      name: "Wonderwall - Remastered",
      artist: "Oasis"
    },
    {
      name: "Stop Crying Your Heart Out",
      artist: "Oasis"
    },
    {
      name: "Somewhere Only We Know",
      artist: "Keane"
    },
    {
      name: "Chasing Cars",
      artist: "Snow Patrol"
    },
    {
      name: "I Don't Want to Miss a Thing - From Armageddon Soundtrack",
      artist: "Aerosmith"
    },
    {
      name: "Hero",
      artist: "Chad Kroeger"
    },
    {
      name: "It Hurt So Bad",
      artist: "Susan Tedeschi"
    },
    {
      name: "Knockin' On Heaven's Door",
      artist: "Guns N' Roses"
    },
    {
      name: "One Of Us",
      artist: "Joan Osborne"
    },
    {
      name: "Time in a Bottle",
      artist: "Jim Croce"
    },
    {
      name: "Tears in Heaven",
      artist: "Eric Clapton"
    },
    {
      name: "Blackbird",
      artist: "The Beatles"
    },
    {
      name: "The Reason",
      artist: "Hoobastank"
    },
    {
      name: "California Dreamin' - Single Version",
      artist: "The Mamas & The Papas"
    },
    {
      name: "Kiss Me",
      artist: "Sixpence None The Richer"
    },
    {
      name: "Every Breath You Take",
      artist: "The Police"
    },
    {
      name: "Dust in the Wind",
      artist: "Kansas"
    },
    {
      name: "Hey Jude",
      artist: "The Beatles"
    },
    {
      name: "Bitter Sweet Symphony - Remastered 2016",
      artist: "The Verve"
    },
    {
      name: "Bohemian Rhapsody - Remastered 2011",
      artist: "Queen"
    },
    {
      name: "Livin' On A Prayer",
      artist: "Bon Jovi"
    },
    {
      name: "Somebody To Love - The Voice Performance",
      artist: "Jordan Smith"
    },
    {
      name: "Always",
      artist: "Bon Jovi"
    },
    {
      name: "Don't Let Me Down - Remastered 2009",
      artist: "The Beatles"
    },
    {
      name: "Total Eclipse of the Heart",
      artist: "Bonnie Tyler"
    },
    {
      name: "Sweet Niobrara",
      artist: "The Wildwoods"
    },
    {
      name: "Making Love Out of Nothing at All",
      artist: "Air Supply"
    },
    {
      name: "Take Me Home, Country Roads - Original Version",
      artist: "John Denver"
    },
    {
      name: "Everybody's Changing",
      artist: "Keane"
    },
    {
      name: "Starlight",
      artist: "Muse"
    },
    {
      name: "Ordinary World",
      artist: "Duran Duran"
    },
    {
      name: "It Must Have Been Love - From the Film Pretty Woman",
      artist: "Roxette"
    },
    {
      name: "Numb",
      artist: "Linkin Park"
    },
    {
      name: "In My Life",
      artist: "The Beatles"
    },
    {
      name: "Don't Stop Believin' (2022 Remaster)",
      artist: "Journey"
    },
    {
      name: "Bring Me To Life",
      artist: "Evanescence"
    },
    {
      name: "In the End",
      artist: "Linkin Park"
    },
    {
      name: "Don't Look Back in Anger - Remastered",
      artist: "Oasis"
    },
    {
      name: "Still Loving You",
      artist: "Scorpions"
    },
    {
      name: "Everybody Wants To Rule The World",
      artist: "Tears For Fears"
    },
    {
      name: "I Still Haven't Found What I'm Looking For",
      artist: "U2"
    },
    {
      name: "Lonely Day",
      artist: "System Of A Down"
    },
    {
      name: "Leaving, On a Jet Plane - Greatest Hits Version",
      artist: "John Denver"
    },
    {
      name: "Somebody To Love - Remastered 2011",
      artist: "Queen"
    },
    {
      name: "Purple Rain",
      artist: "Prince"
    },
    {
      name: "Listen To Your Heart",
      artist: "Roxette"
    }
  
]

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

        <button class="btnPlay">
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
    
    const btnPlay = div.querySelector(".btnPlay");

    btnPlay.addEventListener("click", () => {
      search(music.name, music.artist, div);
    });


  });


}