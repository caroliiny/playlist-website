function treatName(name) {
    return name.replace(/[^a-zA-Z0-9'\s]/g, '').trim();
  }

  function togglePlayPause(button, isPlaying) {
    const playIcon = button.querySelector(".bx-caret-right");
    const pauseIcon = button.querySelector(".bx-pause");
  
    if (isPlaying) {
      playIcon.style.display = "none";
      pauseIcon.style.display = "inline";
    } else {
      playIcon.style.display = "inline";
      pauseIcon.style.display = "none";
    }
  }
  

  function initTwinkle(box) {
    box.classList.add("twinkle");
  }
  

  function stopTwinkle(box) {
    box.classList.remove("twinkle");
  }
    

  function updateButton(box, button, isPlaying) {

    if (isPlaying) {
      initTwinkle(box);
      togglePlayPause(button, true);
       
    }

    else {
      togglePlayPause(button, false);
      stopTwinkle(box);
    }

  }

  function updateAll() {
    
    const allBoxes = document.querySelectorAll('.music-box');
  
    allBoxes.forEach(box => {
    
      const button = box.querySelector(".btnPlayer");  
      const playIcon = box.querySelector(".bx-caret-right");
      const pauseIcon = box.querySelector(".bx-pause");
  
      if (playIcon && pauseIcon) {
        updateButton(box, button, false);
      }

    const progress = box.querySelector(".progress");
    if (progress) progress.style.width = "0%";
      stopTwinkle(box);
  
    });
  
  }

  player.addEventListener("timeupdate", () => {
    if (!currentBox) return; 
    
    const progressBar = currentBox.querySelector(".progress");
    if (progressBar) {
      progressBar.style.width = (player.currentTime / player.duration * 100) + "%";
    }
  });
  
  player.addEventListener("ended", () => {
    if (!currentBox) return;
    stopTwinkle(currentBox);
    const button = currentBox.querySelector(".btnPlayer");
    updateButton(currentBox, button, false);
  });
  