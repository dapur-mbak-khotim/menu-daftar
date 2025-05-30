document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu-container");
  const toggleButton = document.getElementById("toggle-menu-btn");

  // Sembunyikan menu awalnya
  menuContainer.style.display = "none";

  // Toggle daftar menu saat tombol diklik
  toggleButton.addEventListener("click", () => {
    if (menuContainer.style.display === "none") {
      menuContainer.style.display = "flex";
    } else {
      menuContainer.style.display = "none";
    }
  });

  // Ambil data dari JSON dan buat elemen menu
  fetch("menu.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(menu => {
        const item = document.createElement("div");
        item.className = "menu-item";

        item.innerHTML = `
          <img src="images/${menu.image}" alt="Menu">
          <div class="menu-content" style="display:none;">
            <h3>${menu.price}</h3>
            <p>${menu.items}</p>
          </div>
        `;

        // Saat gambar diklik, toggle deskripsi
        const img = item.querySelector("img");
        const content = item.querySelector(".menu-content");

        img.addEventListener("click", () => {
          content.style.display = content.style.display === "none" ? "block" : "none";
        });

        menuContainer.appendChild(item);
      });
    })
    .catch(error => {
      console.error("Gagal memuat menu:", error);
    });
});
