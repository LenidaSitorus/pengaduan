document.addEventListener("DOMContentLoaded", function () {
  fetch("components/sidebar.html") // Panggil sidebar dari folder components/
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sidebar-container").innerHTML = data;
    })
    .catch((error) => console.error("Gagal memuat sidebar:", error));
});
