// Dark / Light Mode Toggle
consttoggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");
toggleBtn.innerHTML = document.body.classList.contains("dark")
    ? "<i class='bxbx-sun'></i>"
    : "<i class='bxbx-moon'></i>";
});
