"strict";

class UI {
  static loadHomePage() {
    UI.initAddProjectButtons();
    UI.initAddTasksButtons();
  }

  static initAddProjectButtons() {
    const addProjectButton = document.getElementById("add-projects-button");
    const addProjectPopup = document.getElementById("add-project-popup");
    const addList = document.getElementById("add-list");
    const cancelProjectButton = document.getElementById(
      "button-cancel-project-popup"
    );

    // Add Project button
    addProjectButton.addEventListener("click", () => {
      addList.classList.remove("active");
      addProjectPopup.classList.add("active");
    });

    // Cancel button
    cancelProjectButton.addEventListener("click", () => {
      addList.classList.add("active");
      addProjectPopup.classList.remove("active");
    });
  }

  static initAddTasksButtons() {
    const addTaskButton = document.getElementById("add-tasks-button");
    const addTask = document.getElementById("tasks-div");
    const addTasksPopup = document.getElementById("add-task-popup");
    const cancelListButton = document.getElementById(
      "button-cancel-list-popup"
    );

    // Add Project button
    addTaskButton.addEventListener("click", () => {
      addTask.classList.add("active");
      addTasksPopup.classList.add("active");
    });

    // Cancel button
    cancelListButton.addEventListener("click", () => {
      addTasksPopup.classList.remove("active");

      addTask.classList.remove("active");
    });
  }
}

document.addEventListener("DOMContentLoaded", UI.loadHomePage);
