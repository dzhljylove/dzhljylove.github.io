const image = document.querySelector('img');

// Flag to check if the image is already spinning
let spinning = false;

image.addEventListener('mouseenter', function() {
  // Start spinning the image when the mouse enters
  if (!spinning) {
    spinning = true;
    image.classList.add('spinning');  // Add the 'spinning' class to apply the animation
  }
});

image.addEventListener('mouseleave', function() {
  // Stop spinning the image when the mouse leaves
  image.classList.remove('spinning'); // Remove the 'spinning' class to stop the animation
  spinning = false;
});

image.addEventListener('click', function() {
  const myName = prompt("戴志恒最爱的人叫什么名字？");
  if(myName=='陆家怡'){
    window.location.href = 'love.html';

  }
  else if(myName=='吴子健'){
    alert('错了，这位是输赢赢的最爱')
  }
  else{
    alert('戴志恒的爱只会属于一个人')
  }
});
window.addEventListener('load', () => {
  alert('欢迎来到戴志恒爱情故事')
  const audio = document.querySelector('audio');
  audio.play().catch(error => {
      console.log("Autoplay blocked by browser policies:", error);
  });
});
