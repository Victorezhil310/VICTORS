const appsData = [
    {
        id: "img-to-pdf-tool",
        title: "Image to PDF Converter",
        category: "pdf",
        icon: "fa-solid fa-file-image",
        iconBg: "#ef4444",
        rating: "4.9",
        reviews: "4.8k",
        desc: "Convert PNG, JPG, WEBP photos to PDF documents instantly.",
        features: ["Batch Image Upload", "Reorder Images", "Instant Download PDF"]
    },
    {
        id: "pdf-text-editor",
        title: "PDF & Text Online Editor",
        category: "pdf",
        icon: "fa-solid fa-pen-to-square",
        iconBg: "#f59e0b",
        rating: "4.8",
        reviews: "3.2k",
        desc: "Edit document text online, convert letter case, remove duplicate lines.",
        features: ["WYSIWYG Editor", "Remove Unwanted Lines"]
    },
    {
        id: "student-gpa-calc",
        title: "Student GPA & Grade Suite",
        category: "students",
        icon: "fa-solid fa-graduation-cap",
        iconBg: "#4f46e5",
        rating: "4.9",
        reviews: "5.1k",
        desc: "Calculate semester GPA, score percentages, and letter grades.",
        features: ["GPA 5.0 Conversion", "Letter Grade Mapping"]
    },
    {
        id: "kids-math-game",
        title: "Kids Math Explorer",
        category: "kids",
        icon: "fa-solid fa-child",
        iconBg: "#10b981",
        rating: "4.9",
        reviews: "6.2k",
        desc: "Interactive gamified addition, subtraction, and multiplication puzzles.",
        features: ["Visual Trophies", "Kid-Safe Interface"]
    },
    {
        id: "mobile-qr-hub",
        title: "Mobile QR Code Generator",
        category: "mobile",
        icon: "fa-solid fa-qrcode",
        iconBg: "#06b6d4",
        rating: "4.9",
        reviews: "4.1k",
        desc: "Generate QR codes for Wi-Fi passwords, URLs, and phone numbers.",
        features: ["Wi-Fi QR Maker", "Instant Download"]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const appsGrid = document.getElementById("appsGrid");
    const appCount = document.getElementById("appCount");
    const searchInput = document.getElementById("searchInput");
    const categoryBtns = document.querySelectorAll(".cat-btn");
    let currentCategory = "all";
    let searchQuery = "";

    function renderApps() {
        if (!appsGrid) return;
        const filteredApps = appsData.filter(app => {
            const matchesCategory = currentCategory === "all" || app.category === currentCategory;
            const matchesSearch = app.title.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        if (appCount) appCount.textContent = `Showing ${filteredApps.length} Tools`;

        appsGrid.innerHTML = filteredApps.map(app => `
            <div class="app-card">
                <div class="app-header">
                    <div class="app-icon" style="background-color: ${app.iconBg};">
                        <i class="${app.icon}"></i>
                    </div>
                    <div class="app-title-group">
                        <h3>${app.title}</h3>
                        <span class="app-category">${app.category}</span>
                    </div>
                </div>
                <p class="app-desc">${app.desc}</p>
                <div class="app-footer">
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <span>${app.rating}</span>
                    </div>
                    <button class="btn btn-primary btn-sm" onclick="alert('Module Active')">
                        Launch
                    </button>
                </div>
            </div>
        `).join('');
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category;
            renderApps();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            renderApps();
        });
    }

    renderApps();
});
