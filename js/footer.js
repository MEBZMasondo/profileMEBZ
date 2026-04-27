// for the shared footer
document.addEventListener("DOMContentLoaded", () => {
  fetch("../components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;

      // Set current year after footer loads
      document.getElementById("year").textContent =
        new Date().getFullYear();
    })
    .catch(error => console.error("Footer loading failed:", error));
});