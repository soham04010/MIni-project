// Get the elements for the lightbox
const lightbox = document.getElementById('lightbox');
const closeBtn = document.querySelector('.close');
const videoFrame = document.getElementById('video-frame');
const thumbnails = document.querySelectorAll('.thumbnail');

// Add click event to each thumbnail
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    const videoUrl = this.getAttribute('data-video');
    videoFrame.src = videoUrl;
    lightbox.style.display = 'block';
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
  videoFrame.src = '';  // Stop the video
});

// Close lightbox when clicking outside of the content
window.addEventListener('click', (e) => {
  if (e.target == lightbox) {
    lightbox.style.display = 'none';
    videoFrame.src = '';  // Stop the video
  }
});
