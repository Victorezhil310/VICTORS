const appsData = [
    {
        id: "pdf-pro",
        title: "VICTORS PDF Studio",
        category: "pdf",
        icon: "fa-solid fa-file-pdf",
        iconBg: "#ef4444",
        rating: "4.9",
        reviews: "1.2k",
        desc: "Convert, merge, extract text, split, and view PDF documents securely inside your browser or mobile device.",
        features: ["Text Extractor", "PDF Reader", "Word Count & Summarizer"]
    },
    {
        id: "student-calc",
        title: "EduCalc & GPA Suite",
        category: "students",
        icon: "fa-solid fa-graduation-cap",
        iconBg: "#4f46e5",
        rating: "4.8",
        reviews: "950",
        desc: "Calculate grades, semester GPA, percentages, and store assignment scores.",
        features: ["GPA & Marks Calculator", "Grade Letter Mapping"]
    },
    {
        id: "kids-math",
        title: "Kids Math Explorer",
        category: "kids",
        icon: "fa-solid fa-child",
        iconBg: "#10b981",
        rating: "4.9",
        reviews: "2.1k",
        desc: "Interactive gamified math challenges for children to learn addition and puzzles.",
        features: ["Visual Puzzles", "Score System"]
    },
    {
        id: "qr-utility",
        title: "Mobile QR & Barcode Hub",
        category: "mobile",
        icon: "fa-solid fa-qrcode",
        iconBg: "#06b6d4",
        rating: "4.7",
        reviews: "820",
        desc: "Generate instant QR codes for Wi-Fi, URLs, and phone contacts.",
        features: ["Instant Download PNG", "Scan Support"]
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
                    <button class="btn btn-primary btn-sm" onclick="alert('Module Enabled')">
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
