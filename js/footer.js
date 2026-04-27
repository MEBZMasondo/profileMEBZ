// for the shared footer
// document.addEventListener("DOMContentLoaded", () => {
//   fetch("../components/footer.html")
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById("footer-placeholder").innerHTML = data;

//       // Set current year after footer loads
//       document.getElementById("year").textContent =
//         new Date().getFullYear();
//     })
//     .catch(error => console.error("Footer loading failed:", error));
// });

// document.addEventListener("DOMContentLoaded", () => {
//   fetch("/profileMEBZ/components/footer.html")
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById("footer-placeholder").innerHTML = data;

//       // Set current year after footer loads
//       document.getElementById("year").textContent =
//         new Date().getFullYear();
//     })
//     .catch(error => console.error("Footer loading failed:", error));
// });

document.addEventListener("DOMContentLoaded", () => {

  const isGitHubPages = window.location.hostname.includes("github.io");

  const BASE_PATH = isGitHubPages
    ? "/profileMEBZ/"
    : "/";

  fetch(BASE_PATH + "components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;

      // Set current year after footer loads
      document.getElementById("year").textContent =
        new Date().getFullYear();
    })
    .catch(error => console.error("Footer loading failed:", error));

});