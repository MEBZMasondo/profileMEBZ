// function showBlog() {
//   document.getElementById('home').style.display = 'none';
//   document.getElementById('blog').style.display = 'block';
// }

// function showHome() {
//   document.getElementById('home').style.display = 'block';
//   document.getElementById('blog').style.display = 'none';
// }

const home = document.getElementById("home");
const blog = document.getElementById("blog");

document.getElementById("blogLink").addEventListener("click", function (e) {
  e.preventDefault();
  home.style.display = "none";
  blog.style.display = "block";
});

document.getElementById("homeLink").addEventListener("click", function (e) {
  e.preventDefault();
  blog.style.display = "none";
  home.style.display = "block";
});


document.getElementById("year").textContent = new Date().getFullYear();