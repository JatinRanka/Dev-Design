window.onload = () => {
  const inputElements = document.getElementsByClassName("input-container__input-field");

  Array.from(inputElements).forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      if (inputElement.value.length === 0) {
        inputElement.nextElementSibling.classList.remove("input-container__heading-filled");
      } else {
        inputElement.nextElementSibling.classList.add("input-container__heading-filled");
      };
    });
  });
};
