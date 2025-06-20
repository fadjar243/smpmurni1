const toggles = document.querySelectorAll(".toggle-submenu");

toggles.forEach(toggle => {
    toggle.addEventListener("click", function (e) {
        e.preventDefault();

        const parent = this.parentElement;

        // Tutup semua dropdown lain
        document.querySelectorAll(".dropdown").forEach(item => {
            if (item !== parent) {
                item.classList.remove("open");
            }
        });

        // Toggle dropdown yang diklik
        parent.classList.toggle("open");
    });
});

// Klik di luar navbar menutup semua dropdown
document.addEventListener("click", function (e) {
    if (!e.target.closest(".ul-navbar")) {
        document.querySelectorAll(".dropdown").forEach(item => {
            item.classList.remove("open");
        });
    }
});
