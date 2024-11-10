// Function to toggle skill visibility and button text
function toggleSkills(): void {
    const skillsList = document.getElementById("info1") as HTMLElement;
    const button = document.getElementById("btn") as HTMLButtonElement;

    if (skillsList.style.display === "none") {
        skillsList.style.display = "block";  // Show skills
        button.textContent = "Hide Skill";   // Change button text
    } else {
        skillsList.style.display = "none";   // Hide skills
        button.textContent = "Show Skill";   // Change button text back
    }
}

// Attach the event listener
document.getElementById("btn")?.addEventListener("click", toggleSkills);
