const titleText = document.getElementById("div");
const image = document.getElementById("image");

titleText.addEventListener("click", function() {
  if (image.style.display === "block") {
    image.style.display = "none";
  } else {
    image.style.display = "block";
  }
});