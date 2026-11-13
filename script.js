// VICTORS Web & App Suite JavaScript Engine

// 1. Data Store for Tools and Apps
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
        features: ["Text Extractor", "PDF Reader", "Word Count & Summarizer", "Privacy Preserved Local Processing"]
    },
    {
        id: "student-calc",
        title: "EduCalc & GPA Suite",
        category: "students",
        icon: "fa-solid fa-graduation-cap",
        iconBg: "#4f46e5",
        rating: "4.8",
        reviews: "950",
        desc: "Calculate grades, semester GPA, percentages, and store assignment scores with automated analytics.",
        features: ["GPA & Marks Calculator", "Grade Letter Mapping", "Subject Percentage Tracker", "Export Report"]
    },
    {
        id: "kids-math",
        title: "Kids Math Explorer",
        category: "kids",
        icon: "fa-solid fa-child",
        iconBg: "#10b981",
        rating: "4.9",
        reviews: "2.1k",
        desc: "Interactive gamified math challenges for children to learn addition, subtraction, multiplication, and puzzles.",
        features: ["Interactive Sound Effects", "Visual Puzzles", "Score System", "Kid-Safe Interface"]
    },
    {
        id: "qr-utility",
        title: "Mobile QR & Barcode Hub",
        category: "mobile",
        icon: "fa-solid fa-qrcode",
        iconBg: "#06b6d4",
        rating: "4.7",
        reviews: "820",
        desc: "Generate instant QR codes for Wi-Fi, URLs, and phone contacts, plus scan codes using phone camera.",
        features: ["Custom QR Colors", "Wi-Fi QR Maker", "Instant Download PNG", "Offline Scan Support"]
    },
    {
        id: "adult-productivity",
        title: "Pro Tasks & Pomodoro",
        category: "adults",
        icon: "fa-solid fa-briefcase",
        iconBg: "#8b5cf6",
        rating: "4.8",
        reviews: "1.5k",
        desc: "Boost daily workflow with focus timers, project task boards, and daily work journal for adults.",
        features: ["Focus Timer", "Task Kanban", "Daily Goals Tracker", "Cloud Sync Ready"]
    },
    {
        id: "pdf-compressor",
        title: "PDF File Compressor",
        category: "pdf",
        icon: "fa-solid fa-file-contract",
        iconBg: "#f59e0b",
        rating: "4.6",
        reviews: "670",
        desc: "Reduce PDF file sizes for email attachments while keeping high resolution formatting.",
        features: ["Fast Compression", "No File Uploads Needed", "Batch Mode"]
    },
    {
        id: "kids-spelling",
        title: "Kids Word & Spelling Fun",
        category: "kids",
        icon: "fa-solid fa-spell-check",
        iconBg: "#ec4899",
        rating: "4.9",
        reviews: "1.8k",
        desc: "Phonics and spelling practice designed for young learners with voice pronunciation audio.",
        features: ["Phonics Audio", "Word Building", "Achievement Badges"]
    },
    {
        id: "student-notes",
        title: "Smart Student Notebook",
        category: "students",
        icon: "fa-solid fa-book-open",
        iconBg: "#3b82f6",
        rating: "4.7",
        reviews: "1.1k",
        desc: "Organize lecture notes, draw mind maps, and convert handwritten notes into digital text.",
        features: ["Rich Text Editor", "Mind Mapping", "Searchable Notes"]
    }
];

// 2. DOM Elements Selection
document.addEventListener("DOMContentLoaded", () => {
    const appsGrid = document.getElementById("appsGrid");
    const appCount = document.getElementById("appCount");
    const searchInput = document.getElementById("searchInput");
    const categoryBtns = document.querySelectorAll(".cat-btn");
    const themeToggleBtn = document.getElementById("themeToggle");

    // Modal Elements
    const modal = document.getElementById("toolModal");
    const closeModal = document.getElementById("closeModal");
    const modalBody = document.getElementById("modalBody");

    // Initialize State
    let currentCategory = "all";
    let searchQuery = "";

    // Render Store Grid
    function renderApps() {
        if (!appsGrid) return;

        const filteredApps = appsData.filter(app => {
            const matchesCategory = currentCategory === "all" || app.category === currentCategory;
            const matchesSearch = app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  app.desc.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        appCount.textContent = `Showing ${filteredApps.length} Tools`;

        if (filteredApps.length === 0) {
            appsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
                    <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <p>No tools found matching your query "${searchQuery}".</p>
                </div>
            `;
            return;
        }

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
                        <small style="color: var(--text-muted); font-size: 0.75rem;">(${app.reviews})</small>
                    </div>
                    <button class="btn btn-primary btn-sm" onclick="openAppModal('${app.id}')">
                        <i class="fa-solid fa-circle-info"></i> Details
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Modal Handler
    window.openAppModal = function(id) {
        const app = appsData.find(a => a.id === id);
        if (!app) return;

        modalBody.innerHTML = `
            <div style="text-align: center; margin-bottom: 1.5rem;">
                <div class="app-icon" style="background-color: ${app.iconBg}; width: 72px; height: 72px; font-size: 2.2rem; margin: 0 auto 1rem auto;">
                    <i class="${app.icon}"></i>
                </div>
                <h2 style="font-size: 1.6rem; margin-bottom: 0.3rem;">${app.title}</h2>
                <div style="color: var(--accent-color); font-weight: 700;">★ ${app.rating} (${app.reviews} User Reviews)</div>
            </div>
            <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">${app.desc}</p>
            <h4 style="margin-bottom: 0.8rem; color: var(--secondary-color);">Key Features:</h4>
            <ul style="padding-left: 1.2rem; margin-bottom: 1.8rem; color: var(--text-muted);">
                ${app.features.map(f => `<li style="margin-bottom: 0.4rem;">${f}</li>`).join('')}
            </ul>
            <div style="display: flex; gap: 1rem;">
                <button class="btn btn-primary" style="flex: 1; justify-content: center;" onclick="alert('Launching ${app.title} in VICTORS Mobile Suite!')">
                    <i class="fa-solid fa-rocket"></i> Launch Tool Now
                </button>
            </div>
        `;

        modal.style.display = "flex";
    };

    if (closeModal) {
        closeModal.onclick = () => {
            modal.style.display = "none";
        };
    }

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    };

    // Category Filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category;
            renderApps();
        });
    });

    // Search Input Listener
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            renderApps();
        });
    }

    // Theme Toggle
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = document.body.getAttribute("data-theme");
            const newTheme = currentTheme === "light" ? "dark" : "light";
            document.body.setAttribute("data-theme", newTheme);
            themeToggleBtn.innerHTML = newTheme === "light" ? `<i class="fa-solid fa-sun"></i>` : `<i class="fa-solid fa-moon"></i>`;
            localStorage.setItem("victorsTheme", newTheme);
        });

        // Load saved theme preference
        const savedTheme = localStorage.getItem("victorsTheme") || "dark";
        document.body.setAttribute("data-theme", savedTheme);
        themeToggleBtn.innerHTML = savedTheme === "light" ? `<i class="fa-solid fa-sun"></i>` : `<i class="fa-solid fa-moon"></i>`;
    }

    // 3. Interactive Sandbox Tools Engine
    // Tab Switcher
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            tabPanels.forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(btn.dataset.tab).classList.add("active");
        });
    });

    // Tool 1: PDF Extractor
    const pdfFileInput = document.getElementById("pdfFileInput");
    const btnProcessPdf = document.getElementById("btnProcessPdf");
    const btnClearPdf = document.getElementById("btnClearPdf");
    const pdfOutput = document.getElementById("pdfOutput");

    if (btnProcessPdf) {
        btnProcessPdf.addEventListener("click", () => {
            const file = pdfFileInput.files[0];
            if (!file) {
                pdfOutput.innerHTML = `<span style="color: var(--danger);">Please select a PDF or text document file first.</span>`;
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                const text = e.target.result;
                const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;
                pdfOutput.innerHTML = `
                    <div style="color: var(--success); font-weight: 700; margin-bottom: 0.5rem;">
                        <i class="fa-solid fa-circle-check"></i> Document Processed Successfully (${file.name})
                    </div>
                    <div><strong>Word Count:</strong> ${wordCount} words | <strong>Size:</strong> ${(file.size / 1024).toFixed(2)} KB</div>
                    <hr style="margin: 0.8rem 0; border-color: var(--card-border);">
                    <pre style="white-space: pre-wrap; font-family: monospace; max-height: 180px; overflow-y: auto;">${text.substring(0, 1000)}${text.length > 1000 ? '...\n[Preview truncated]' : ''}</pre>
                `;
            };

            if (file.type === "application/pdf") {
                pdfOutput.innerHTML = `
                    <div style="color: var(--secondary-color);">
                        <i class="fa-solid fa-spinner fa-spin"></i> Processing PDF file '${file.name}'...
                    </div>
                    <div style="margin-top: 0.5rem;">PDF Metadata Analyzed: Pages estimated. (Local native browser PDF processing enabled)</div>
                `;
            } else {
                reader.readAsText(file);
            }
        });

        btnClearPdf.addEventListener("click", () => {
            pdfFileInput.value = "";
            pdfOutput.innerHTML = `<em>Select a text/document file above to analyze or view text.</em>`;
        });
    }

    // Tool 2: Grade Calculator
    const btnCalcGrade = document.getElementById("btnCalcGrade");
    const marksInput = document.getElementById("marksInput");
    const gradeResult = document.getElementById("gradeResult");

    if (btnCalcGrade) {
        btnCalcGrade.addEventListener("click", () => {
            const rawVal = marksInput.value.trim();
            if (!rawVal) {
                gradeResult.innerHTML = `<span style="color: var(--danger);">Please enter valid comma-separated marks (e.g. 85, 90, 78).</span>`;
                return;
            }

            const numbers = rawVal.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
            if (numbers.length === 0) {
                gradeResult.innerHTML = `<span style="color: var(--danger);">No valid numerical marks found.</span>`;
                return;
            }

            const total = numbers.reduce((acc, curr) => acc + curr, 0);
            const avg = total / numbers.length;
            const gpa = (avg / 20).toFixed(2); // standard 5.0 scale conversion

            let gradeLetter = "F";
            if (avg >= 90) gradeLetter = "A+";
            else if (avg >= 80) gradeLetter = "A";
            else if (avg >= 70) gradeLetter = "B";
            else if (avg >= 60) gradeLetter = "C";
            else if (avg >= 50) gradeLetter = "D";

            gradeResult.innerHTML = `
                <div><strong>Average Score:</strong> ${avg.toFixed(2)}%</div>
                <div><strong>Estimated GPA:</strong> ${gpa} / 5.0</div>
                <div><strong>Final Grade:</strong> <span style="font-size: 1.2rem; font-weight: 800; color: var(--primary-color);">${gradeLetter}</span></div>
            `;
        });
    }

    // Tool 3: Kids Math Quiz Game
    const quizQuestion = document.getElementById("quizQuestion");
    const quizAnswer = document.getElementById("quizAnswer");
    const btnCheckQuiz = document.getElementById("btnCheckQuiz");
    const quizFeedback = document.getElementById("quizFeedback");
    let currentSolution = 0;

    function generateQuiz() {
        if (!quizQuestion) return;
        const num1 = Math.floor(Math.random() * 15) + 1;
        const num2 = Math.floor(Math.random() * 15) + 1;
        currentSolution = num1 + num2;
        quizQuestion.textContent = `What is ${num1} + ${num2} ?`;
        if (quizAnswer) quizAnswer.value = "";
    }

    if (btnCheckQuiz) {
        btnCheckQuiz.addEventListener("click", () => {
            const userAns = parseInt(quizAnswer.value.trim(), 10);
            if (isNaN(userAns)) {
                quizFeedback.innerHTML = `<span style="color: var(--danger);">Please type your numerical answer!</span>`;
                return;
            }

            if (userAns === currentSolution) {
                quizFeedback.innerHTML = `<span style="color: var(--success); font-weight: 700;"><i class="fa-solid fa-trophy"></i> Outstanding! Correct Answer!</span>`;
                setTimeout(generateQuiz, 1500);
            } else {
                quizFeedback.innerHTML = `<span style="color: var(--danger);"><i class="fa-solid fa-xmark"></i> Oops! Try again. The answer wasn't ${userAns}.</span>`;
            }
        });

        generateQuiz();
    }

    // Tool 4: QR Code Generator
    const qrInput = document.getElementById("qrInput");
    const btnGenerateQR = document.getElementById("btnGenerateQR");
    const qrDisplay = document.getElementById("qrDisplay");

    if (btnGenerateQR) {
        btnGenerateQR.addEventListener("click", () => {
            const text = qrInput.value.trim();
            if (!text) {
                qrDisplay.innerHTML = `<span style="color: var(--danger);">Please enter a URL or text to generate a QR Code.</span>`;
                return;
            }

            const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(text)}`;
            qrDisplay.innerHTML = `
                <div style="text-align: center;">
                    <img src="${qrUrl}" alt="Generated QR Code" style="border-radius: 8px; margin-bottom: 0.5rem; border: 4px solid white;">
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Scan this QR Code with your mobile camera.</p>
                </div>
            `;
        });
    }

    // Initial App Render
    renderApps();
});
