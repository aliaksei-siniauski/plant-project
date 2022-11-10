export { addClickHandelertoAccordion };

const addClickHandelertoAccordion = () => {
  const accordionItems = document.querySelectorAll(
    '[data-name="accordion-title"]'
  );

  accordionItems.forEach((item) => {
    item.addEventListener("click", () => {
      let priceButton = item.querySelector(".cost__button");
      item.classList.toggle("accordion-background");
    });
  });
};

addClickHandelertoAccordion();
