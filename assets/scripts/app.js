window.addEventListener('load', function(event) {
  const videoButton = document.querySelector('.toggleVideoLoader');
  const videoParent = document.querySelector('.parent');
  const videoIframe = document.querySelector('#video');
  videoButton.addEventListener('click', function() {
    videoParent.classList.remove('hidden');
    setTimeout(function() {
      videoParent.classList.add('shown');
    }, 0);
  });
  videoParent.addEventListener('click', function() {
    videoParent.classList.add('hidden');
    videoParent.classList.remove('shown');
    videoIframe.src = videoIframe.src;
  });
});
