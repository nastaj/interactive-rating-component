const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thank-you-state");
const ratingsContainer = document.querySelector(".rating");
const btnRatings = document.querySelectorAll(".btn-rating");
const btnSubmit = document.querySelector(".btn-submit");
const selectedRating = document.querySelector(".rating-selected");

let currentRating;

ratingsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".btn-rating");

  if (!clicked) return;

  const rating = clicked.dataset.ratingValue;
  currentRating = rating;

  btnRatings.forEach(
    (btn) => (btn.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)")
  );
  clicked.style.backgroundColor = "hsl(25, 97%, 53%)";
  clicked.style.color = "hsl(0, 0%, 100%)";
});

btnSubmit.addEventListener("click", () => {
  ratingState.classList.add("hidden");
  thankYouState.classList.remove("hidden");

  selectedRating.textContent = `You selected ${currentRating} out of 5`;
});
