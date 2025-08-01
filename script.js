function bloomFlower() {
  if (document.body.classList.contains('not-loaded')) {
    document.body.classList.remove("not-loaded");
    document.querySelector('.reloadBtn').textContent = 'Kuncup Bunga';
    
    const music = document.getElementById("bg-music");
    music.play().catch(err => console.log("Autoplay diblokir: ", err));
  } else {
    location.reload();
  }
}
