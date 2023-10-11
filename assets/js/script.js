var modal = document.getElementById("zoom");
var modalImg = document.getElementById("zoomImg");
var images = document.querySelectorAll(".galery .image");

images.forEach(function(image) {
  image.addEventListener("click", function() {
    modal.style.display = "block"; 
    modalImg.src = this.querySelector("img").src; 
  });
});


var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
  modal.style.display = "none"; 
});
