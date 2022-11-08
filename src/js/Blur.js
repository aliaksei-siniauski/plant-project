export { addButtonClickHandler };

const addButtonClickHandler = () => {
  document
    .querySelector(".services__buttons")
    .addEventListener("click", (e) => {
      if (e.target.classList.contains("services__button")) {
        let clickedButton = e.target;
        filterBySelectedButton(clickedButton.dataset.service);
      }
    });
};

const filterBySelectedButton = (selectedButton) => {
  let serviceItems = document.querySelectorAll(".services .service-item");
  serviceItems.forEach((serviceItem) => {
    serviceItem.style.filter = "blur(3px)";
    serviceItem.querySelectorAll(".service-item__title").forEach((title) => {
      if (title.textContent === selectedButton) {
        serviceItem.style.filter = "none";
      }
    });
  });
};
addButtonClickHandler();
