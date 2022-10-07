export { pollyfillForForEach, addDropDownClickHandler };

const pollyfillForForEach = () => {
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }
};
pollyfillForForEach();

const addDropDownClickHandler = () => {
  document.querySelectorAll(".dropdown").forEach((dropDown) => {
    const dropDownButton = dropDown.querySelector(".dropdown__button");
    const dropDownList = dropDown.querySelector(".dropdown__list");
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownArrow = dropDown.querySelector(".dropdown__button::after");
    const dropDownInput = dropDown.querySelector(".dropdown__input-hidden");

    const showDropDownList = () => {
      dropDownButton.addEventListener("click", () => {
        dropDownList.classList.toggle("dropdown__list--hidden");
      });
    };
    showDropDownList();

    const showValueOfSelectedItem = () => {
      dropDownListItems.forEach((listItem) => {
        listItem.addEventListener("click", (e) => {
          e.stopPropagation();
          dropDownButton.innerText = e.target.innerText;
          dropDownInput.value = e.target.dataset.value;
          dropDownList.classList.add("dropdown__list--hidden");
          dropDownButton.blur();
        });
      });
    };
    showValueOfSelectedItem();

    const closeDropDownListOnDocumetClick = () => {
      document.addEventListener("click", (e) => {
        if (e.target !== dropDownButton) {
          dropDownList.classList.add("dropdown__list--hidden");
        }
      });
    };
    closeDropDownListOnDocumetClick();

    const closeDropDownListOnKeyDown = () => {
      document.addEventListener("keydown", (e) => {
        if (e.key === "Tab" || e.key === "Escape") {
          dropDownList.classList.add("dropdown__list--hidden");
          dropDownButton.blur();
        }
      });
    };
    closeDropDownListOnKeyDown();
  });
};
addDropDownClickHandler();
