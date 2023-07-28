export class DynamicButton {
  constructor(name, ui) {
    this.name = name;
    this.ui = ui;
    this.active = false;
    this.element = this.createButtonElement();

    // Check if the element has the "active" class initially
    if (this.element.classList.contains("active")) {
      this.active = true;
    }
  }

  createButtonElement() {
    const button = document.createElement("button");
    button.classList.add("button-list");

    const iconSvg1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    iconSvg1.classList.add("icon");
    const use1 = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use1.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      "./images/sprite.svg#list-check-solid"
    );
    iconSvg1.appendChild(use1);

    const span = document.createElement("span");
    span.textContent = this.name;

    const iconSvg2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    iconSvg2.classList.add("icon", "icon_x");
    const use2 = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use2.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      "./images/sprite.svg#x-solid"
    );
    iconSvg2.appendChild(use2);

    iconSvg2.addEventListener("click", (event) => {
      event.stopPropagation();
      this.deleteButton();
    });

    button.appendChild(iconSvg1);
    button.appendChild(span);
    button.appendChild(iconSvg2);

    button.addEventListener("click", () => {
      this.handleButtonClick();
    });

    return button;
  }

  toggleActive() {
    this.active = !this.active;
  }

  handleButtonClick() {
    // Toggle the active state
    this.toggleActive();
    console.log(this.active);

    // Remove the "active" class from the previously active button (if any)
    const prevActiveButton = document.querySelector(".button-list.active");
    console.log(prevActiveButton);
    if (prevActiveButton !== null) {
      const prevActiveButtonSpan = prevActiveButton.querySelector("span");
      prevActiveButtonSpan.classList.remove("bold-text");
      prevActiveButton.classList.remove("active");
    }

    // Add the "active" class to the current active button (if it is now active)
    if (this.active) {
      const span = this.element.querySelector("span");
      span.classList.add("bold-text");
      this.element.classList.add("active");
    } else {
      const span = this.element.querySelector("span");
      span.classList.remove("bold-text");
      this.element.classList.remove("active");
    }
  }

  // deleteButton() {
  //   const navElementsDiv = document.getElementById("nav-elements");
  //   navElementsDiv.removeChild(this.element);
  // }

  deleteButton() {
    const navElementsDiv = document.getElementById("nav-elements");
    navElementsDiv.removeChild(this.element);
    this.ui.removeButton(this);
  }

  
}
