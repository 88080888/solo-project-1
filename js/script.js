document.querySelector('.hamburger-btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.sidebar').classList.toggle('sidebar-media-active');
});