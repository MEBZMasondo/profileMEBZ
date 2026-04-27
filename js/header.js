// document.addEventListener("DOMContentLoaded", () => {
//   fetch("../components/header.html")
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById("header-placeholder").innerHTML = data;
//     })
//     .catch(error => console.error("Header loading failed:", error));
// });

// document.addEventListener("DOMContentLoaded", () => {
//   fetch("/profileMEBZ/components/header.html")
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById("header-placeholder").innerHTML = data;
//     })
//     .catch(error => console.error("Header loading failed:", error));
// });

document.addEventListener("DOMContentLoaded", () => {

  const isGitHubPages = window.location.hostname.includes("github.io");

  const BASE_PATH = isGitHubPages
    ? "/profileMEBZ/"
    : "/";

  fetch(BASE_PATH + "components/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Header loading failed:", error));

});