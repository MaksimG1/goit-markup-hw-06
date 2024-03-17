document.getElementById("open_modal").addEventListener("click", function () {
  document.getElementById("mymodal").classList.add("open");
});

document.getElementById("close_btn").addEventListener("click", function () {
  document.getElementById("mymodal").classList.remove("open");
});
// escape
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("mymodal").classList.remove("open");
  }
});

document.querySelector("#mymodal .modal").addEventListener("click", (event) => {
  event._isClickWithInModal = true;
});
document.getElementById("mymodal").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});

// phone rezolution==================================================================================
document
  .getElementById("open_phone_modal")
  .addEventListener("click", function () {
    document.getElementById("modal_phone").classList.add("open_phone_modal");
  });
document
  .getElementById("close_phone_btn")
  .addEventListener("click", function () {
    document.getElementById("modal_phone").classList.remove("open_phone_modal");
  });
