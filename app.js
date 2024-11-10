document.addEventListener("DOMContentLoaded", () => {
    const skillsList = document.getElementById("info1");
    const button = document.getElementById("btn");

    button.addEventListener("click", () => {
        if (skillsList.style.display === "none" || skillsList.style.display === "") {
            skillsList.style.display = "block"; // Show skills
            button.textContent = "Hide Skill";   // Change button text
        } else {
            skillsList.style.display = "none";   // Hide skills
            button.textContent = "Show Skill";   // Change button text back
        }
    });
});
