const track = document.getElementById("tagsTrack");

// Duplicate the logos once for seamless infinite effect
track.innerHTML += track.innerHTML;

let position = 0;
const speed = 1; // pixels per frame

function animate() {
  position -= speed;

  // Reset position when first half is fully scrolled
  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();