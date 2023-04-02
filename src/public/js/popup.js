const finalizarCompraBtn = document.getElementById("finalizarCompraBtn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");

finalizarCompraBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});
