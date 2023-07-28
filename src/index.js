"use strict";

// Importing
import { DynamicButton } from "./modules/UI";

class UI {
  constructor() {
    this.dynamicButtonsArray = [];
    this.initAddProjectButtons();
    this.initAddTasksButtons();
    this.initAddListButton();
  }

  // Closing popups
  closeAllPopups() {
    const popupProject = document.getElementById("add-project-popup");
    const popupTask = document.getElementById("add-task-popup");
    const addList = document.getElementById("add-list");
    const addTask = document.getElementById("tasks-div");
    popupProject.classList.remove("active");
    popupTask.classList.remove("active");
    addList.classList.add("active");
    addTask.classList.remove("active");
  }

  initAddProjectButtons() {
    const addProjectButton = document.getElementById("add-projects-button");
    const addProjectPopup = document.getElementById("add-project-popup");
    const addList = document.getElementById("add-list");
    const cancelProjectButton = document.getElementById(
      "button-cancel-project-popup"
    );

    // Add Project button
    addProjectButton.addEventListener("click", () => {
      this.closeAllPopups();
      addList.classList.remove("active");
      addProjectPopup.classList.add("active");
    });

    // Cancel button
    cancelProjectButton.addEventListener("click", () => {
      addList.classList.add("active");
      addProjectPopup.classList.remove("active");
    });
  }

  initAddTasksButtons() {
    const addTaskButton = document.getElementById("add-tasks-button");
    const addTask = document.getElementById("tasks-div");
    const addTasksPopup = document.getElementById("add-task-popup");
    const cancelListButton = document.getElementById(
      "button-cancel-list-popup"
    );

    // Add Project button
    addTaskButton.addEventListener("click", () => {
      this.closeAllPopups();
      addTask.classList.add("active");
      addTasksPopup.classList.add("active");
    });

    // Cancel button
    cancelListButton.addEventListener("click", () => {
      addTasksPopup.classList.remove("active");
      addTask.classList.remove("active");
    });
  }

  initAddListButton() {
    const addListButton = document.getElementById("button-add-project-popup");
    const addListInput = document.getElementById("input-add-project-popup");
    const navElementsDiv = document.getElementById("nav-elements");

    const closePopup = () => {
      addListInput.value = ""; // Clear the input
      addListInput.blur(); // Remove focus from the input
      this.closeAllPopups(); // Close the popup
    };

    addListButton.addEventListener("click", () => {
      const newListName = addListInput.value.trim();

      if (newListName !== "") {
        
        const newButton = new DynamicButton(newListName, this);

        this.dynamicButtonsArray.push(newButton);

        console.log(this.dynamicButtonsArray);

        navElementsDiv.appendChild(newButton.element);
        addListInput.value = "";

        // Add an event listener to the new button to handle clicks
        newButton.element.addEventListener("click", () => {
          // Set the active property of all buttons to false
          this.dynamicButtonsArray.forEach((button) => {
            button.active = false;
          });

          // Set the active property of the clicked button to true
          newButton.active = true;
        });
      }
    });

    // Handle the keydown event on the input
    addListInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        addListButton.click(); // Trigger the "Add" button click event
      } else if (event.key === "Escape") {
        closePopup(); // Handle the "Escape" key to cancel
      }
    });

    // Handle the click event on the "Cancel" button
    const cancelButton = document.getElementById("button-cancel-project-popup");
    cancelButton.addEventListener("click", () => {
      closePopup();
    });
  }

  removeButton(button) {
    const index = this.dynamicButtonsArray.indexOf(button);
    if (index !== -1) {
      this.dynamicButtonsArray.splice(index, 1);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
});
