"use strict";

// Importing
import { DynamicButton } from "./modules/UI";

class UI {
  constructor() {
    this.dynamicButtonsArray = [];
    this.initAddProjectButtons();
    this.initAddTasksButtons();
    this.initAddListButton();
    this.addTasks();
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

  addTasks() {
    // adding tasks
    const addTaskButtonPopup = document.getElementById("button-add-list-popup");
    const addTaskInput = document.getElementById("input-add-list-popup");
    const addTaskPopup = document.getElementById("add-task-popup");
    const cancelButton = document.getElementById("button-cancel-list-popup");
    const addTaskButton = document.getElementById("tasks-div");

    addTaskButtonPopup.addEventListener("click", () => {
      const newTaskName = addTaskInput.value.trim();

      if (newTaskName !== "") {
        // Find the currently active list
        const activeList = this.dynamicButtonsArray.find(
          (button) => button.active
        );

        // Add the new task to the currently active list
        if (activeList !== undefined) {
          activeList.addTask(newTaskName);
          this.updateTasksList(activeList);
        }

        // Clear the input
        addTaskInput.value = "";

        // Save the data
        this.saveData();
      }
    });

    // Handle the keydown event on the input
    addTaskInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        addTaskButtonPopup.click(); // Trigger the "Add" button click event
      } else if (event.key === "Escape") {
        addTaskInput.value = ""; // Clear the input
        addTaskInput.blur(); // Remove focus from the input
        addTaskPopup.classList.remove("active"); // Close the popup
        addTaskButton.classList.remove("active"); // Show the "Add Task" button
      }
    });

    cancelButton.addEventListener("click", () => {
      addTaskInput.value = ""; // Clear the input
      addTaskInput.blur(); // Remove focus from the input
      addTaskPopup.classList.remove("active"); // Close the popup
      addTaskButton.classList.remove("active"); // Show the "Add Task" button
    });
  }

  updateTasksList(list) {
    const tasksList = document.querySelector(".tasks-list");

    // Remove all existing tasks from the tasks list
    tasksList.innerHTML = "";

    // Add a new button element for each task in the list's tasks array
    if (list !== undefined) {
      list.tasks.forEach((taskName) => {
        const taskButton = document.createElement("button");
        taskButton.classList.add("task-list");

        const taskListDiv = document.createElement("div");
        taskListDiv.classList.add("task-list-div");

        const iconSvg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        iconSvg.classList.add("icon");
        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          "./images/sprite.svg#circle-regular"
        );
        iconSvg.appendChild(use);

        const span = document.createElement("span");
        span.textContent = taskName;

        taskListDiv.appendChild(iconSvg);
        taskListDiv.appendChild(span);

        const taskListDivLast = document.createElement("div");
        taskListDivLast.classList.add("task-list-div-last");

        const iconSvg2 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        iconSvg2.classList.add("icon", "icon_x");
        const use2 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        use2.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          "./images/sprite.svg#x-solid"
        );
        iconSvg2.appendChild(use2);

        // Add an event listener to the svg element to handle clicks
        iconSvg2.addEventListener("click", () => {
          // Remove the clicked task from the list's tasks array
          list.removeTask(taskName);

          // Update the displayed tasks
          this.updateTasksList(list);

          // Save the data
          this.saveData();
        });

        taskListDivLast.appendChild(iconSvg2);

        taskButton.appendChild(taskListDiv);
        taskButton.appendChild(taskListDivLast);

        tasksList.appendChild(taskButton);
      });
    }
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
          // Set the active property of all buttons except this one to false
          this.dynamicButtonsArray.forEach((button) => {
            if (button !== newButton) {
              button.active = false;
            }
          });

          // Toggle the active state of this button
          // newButton.toggleActive();

          if (newButton.active) {
            this.updateListName(newButton.name);

            this.updateTasksList(newButton);
          } else {
            this.updateListName("");
            this.updateTasksList(undefined);
          }
        });
      }

      // Save the data
      this.saveData();
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

  updateListName(name) {
    const previewHeader = document.querySelector(".preview_header");
    previewHeader.textContent = name;
  }

  // for the localStorage
  saveData() {
    // Create an array to hold the data for each list
    const listsData = this.dynamicButtonsArray.map((button) => {
      return {
        name: button.name,
        tasks: button.tasks,
      };
    });
    
    // Save the data to localStorage
    localStorage.setItem("listsData", JSON.stringify(listsData));
    console.log(`listsData ${listsData}`);
  }

  loadData() {
    // Load the data from localStorage
    const listsData = JSON.parse(localStorage.getItem("listsData"));

    // Check if there is any data to load
    if (listsData !== null) {
      // Create a new DynamicButton for each list
      listsData.forEach((listData) => {
        const newButton = new DynamicButton(listData.name, this);

        // Set the tasks of the new button
        newButton.tasks = listData.tasks;

        // Add the new button to the dynamicButtonsArray
        this.dynamicButtonsArray.push(newButton);

        // Add the new button's element to the DOM
        const navElementsDiv = document.getElementById("nav-elements");
        navElementsDiv.appendChild(newButton.element);

        // Add an event listener to handle clicks on the new button
        newButton.element.addEventListener("click", () => {
          // Set all other buttons to inactive
          this.dynamicButtonsArray.forEach((button) => {
            if (button !== newButton) {
              button.active = false;
            }
          });

          // Update the UI with the data from the clicked button
          this.updateListName(newButton.name);
          this.updateTasksList(newButton);
        });
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  ui.loadData();
});
