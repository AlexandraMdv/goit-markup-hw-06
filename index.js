const button = document.querySelector(".menu-open-button");
const backdrop = document.querySelector(".hamburger-menu");

button.addEventListener("click", toggleModal);
// button.addEventListener("click", function () {
//   console.log(13);
// });

backdrop.addEventListener("click", (e) => {
  const target = e.target.closest(".menu-close-button");

  if (!target) {
    return;
  }
  toggleModal();
});

function toggleModal() {
  backdrop.classList.toggle("is-open");
}
