const dinosaur = document.getElementById('dinosaur');
let isJumping = false;

function handleKeyDown(event) {
  if (event.code === 'Space' && !isJumping) {
    jump();
  }
}

function jump() {
  isJumping = true;
  let position = 0;
  
  const jumpInterval = setInterval(() => {
    if (position === 150) {
      clearInterval(jumpInterval);
      let downInterval = setInterval(() => {
        if (position === 0) {
          clearInterval(downInterval);
          isJumping = false;
        }
        
        position -= 20;
        dinosaur.style.bottom = position + 'px';
      }, 30);
    }
    
    position += 20;
    dinosaur.style.bottom = position + 'px';
  }, 30);
}

document.addEventListener('keydown', handleKeyDown);