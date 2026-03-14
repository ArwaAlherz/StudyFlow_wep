const savedTheme = localStorage.getItem("studyflow-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}