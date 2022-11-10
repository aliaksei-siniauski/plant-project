export { addClickHandelertoAccordion };

const addClickHandelertoAccordion = () => {
  const accordionItems = document.querySelectorAll(
    '[data-name="accordion-title"]'
  );

  accordionItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("accordion-background");
    });
  });
};

addClickHandelertoAccordion();
