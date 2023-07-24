"strict";

class UI {
  static initAddProjectButtons() {
    const addProjectButton = document.getElementById("add-projects-button");
    const addProjectPopup = document.getElementById("add-project-popup");
    const addList = document.getElementById("add-list");
    const cancelProjectButton = document.getElementById("button-cancel-project-popup");

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
}

document.addEventListener("DOMContentLoaded", UI.initAddProjectButtons);
