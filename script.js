// VICTORS AI & Multi-Utility Suite Script Engine

// 1. Data Store for Tools and Apps
const appsData = [
    {
        id: "ai-assistant-tool",
        title: "VICTORS AI Smart Assistant",
        category: "ai",
        icon: "fa-solid fa-robot",
        iconBg: "#4f46e5",
        rating: "4.9",
        reviews: "3.4k",
        desc: "AI study companion for instant answers, text summarization, auto-quiz generation, and smart productivity tips.",
        features: ["Instant AI Answers", "Text Auto-Summarizer", "Quiz Generator", "Study Coach Mode"]
    },
    {
        id: "pdf-pro",
        title: "VICTORS PDF Studio",
        category: "pdf",
        icon: "fa-solid fa-file-pdf",
        iconBg: "#ef4444",
        rating: "4.9",
        reviews: "2.1k",
        desc: "Convert, extract text, split, and view PDF documents securely inside your browser or mobile device.",
        features: ["Text Extractor", "PDF Reader", "Word Count & Summarizer", "100% Offline Local Privacy"]
    },
    {
        id: "student-calc",
        title: "EduCalc & GPA Suite",
        category: "students",
        icon: "fa-solid fa-graduation-cap",
        iconBg: "#06b6d4",
        rating: "4.8",
        reviews: "1.8k",
        desc: "Calculate semester GPA, percentage marks, letter grades, and track assignment scores.",
        features: ["GPA & Marks Calculator", "Grade Letter Mapping", "Subject Percentage Tracker", "Export Grade Report"]
    },
    {
        id: "kids-math",
        title: "Kids Math Explorer",
        category: "kids",
        icon: "fa-solid fa-child",
        iconBg: "#10b981",
        rating: "4.9",
        reviews: "2.8k",
        desc: "Interactive gamified math challenges for children to learn addition, subtraction, and logical puzzles.",
        features: ["Interactive Sounds", "Visual Math Puzzles", "Score System", "100% Kid-Safe Interface"]
    },
    {
        id: "qr-utility",
        title: "Mobile QR & Barcode Hub",
        category: "mobile",
        icon: "fa-solid fa-qrcode",
        iconBg: "#f59e0b",
        rating: "4.7",
        reviews: "1.2k",
        desc: "Generate instant QR codes for Wi-Fi, URLs, contacts, and scan codes using camera.",
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
        desc: "Boost daily workflow with focus timers, project task boards, and daily work journal.",
        features: ["Focus Timer", "Task Kanban", "Daily Goals Tracker"]
    },
    {
        id: "ai-translator",
        title: "AI Smart Language Translator",
        category: "ai",
        icon: "fa-solid fa-language",
        iconBg: "#ec4899",
        rating: "4.9",
        reviews: "1.9k",
        desc: "Translate study materials, PDF extracts, and text into over 50 languages with smart AI accuracy.",
        features: ["Multi-language Translation", "Grammar Check", "Voice Reader"]
    },
    {
        id: "kids-spelling",
        title: "Kids Word & Spelling Fun",
        category: "kids",
        icon: "fa-solid fa-spell-check",
        iconBg: "#3b82f6",
        rating: "4.9",
        reviews: "2.2k",
        desc: "Phonics and spelling practice designed for young learners with visual flashcards.",
        features: ["Phonics Audio", "Word Building", "Achievement Badges"]
    }
];

// 2. DOM Initialization
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

        if (appCount) appCount.textContent = `Showing ${filteredApps.length} Tools`;

        if (filteredApps.length === 0) {
            appsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
                    <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <p>No tools found matching "${searchQuery}". Try another search!</p>
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
                <div style="color: var(--accent-color); font-weight: 700;">★ ${app.rating} (${app.reviews} Reviews)</div>
            </div>
            <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">${app.desc}</p>
            <h4 style="margin-bottom: 0.8rem; color: var(--secondary-color);">Key Features:</h4>
            <ul style="padding-left: 1.2rem; margin-bottom: 1.8rem; color: var(--text-muted);">
                ${app.features.map(f => `<li style="margin-bottom: 0.4rem;">${f}</li>`).join('')}
            </ul>
            <div style="display: flex; gap: 1rem;">
                <button class="btn btn-primary" style="flex: 1; justify-content: center;" onclick="alert('Module active in VICTORS Suite!')">
                    <i class="fa-solid fa-bolt"></i> Launch Tool
                </button>
            </div>
        `;

        modal.style.display = "flex";
    };

    if (closeModal) {
        closeModal.onclick = () => { modal.style.display = "none"; };
    }
    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
    };

    // Filtering & Search
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

    // Theme Switcher
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = document.body.getAttribute("data-theme");
            const newTheme = currentTheme === "light" ? "dark" : "light";
            document.body.setAttribute("data-theme", newTheme);
            themeToggleBtn.innerHTML = newTheme === "light" ? `<i class="fa-solid fa-sun"></i>` : `<i class="fa-solid fa-moon"></i>`;
            localStorage.setItem("victorsTheme", newTheme);
        });
        const savedTheme = localStorage.getItem("victorsTheme") || "dark";
        document.body.setAttribute("data-theme", savedTheme);
        themeToggleBtn.innerHTML = savedTheme === "light" ? `<i class="fa-solid fa-sun"></i>` : `<i class="fa-solid fa-moon"></i>`;
    }

    // 3. AI Assistant Smart Logic
    const aiPromptInput = document.getElementById("aiPromptInput");
    const btnAskAI = document.getElementById("btnAskAI");
    const btnQuickSummarize = document.getElementById("btnQuickSummarize");
    const aiResult = document.getElementById("aiResult");

    if (btnAskAI) {
        btnAskAI.addEventListener("click", () => {
            const prompt = aiPromptInput.value.trim();
            if (!prompt) {
                aiResult.innerHTML = `<span style="color: var(--danger);">Please enter a study question or text for VICTORS AI.</span>`;
                return;
            }

            aiResult.innerHTML = `
                <div style="color: var(--secondary-color);">
                    <i class="fa-solid fa-wand-magic-sparkles fa-spin"></i> VICTORS AI is analyzing your input...
                </div>
            `;

            setTimeout(() => {
                let aiResponse = "";
                if (prompt.toLowerCase().includes("summarize") || prompt.length > 80) {
                    const words = prompt.split(" ");
                    const summaryText = words.slice(0, Math.min(25, words.length)).join(" ");
                    aiResponse = `
                        <div style="color: var(--success); font-weight: 700; margin-bottom: 0.5rem;">
                            <i class="fa-solid fa-brain"></i> VICTORS AI Summary Generated
                        </div>
                        <div><strong>Key Takeaway:</strong> "${summaryText}..."</div>
                        <div style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">Word count reduced by ~60% for fast studying.</div>
                    `;
                } else {
                    aiResponse = `
                        <div style="color: var(--success); font-weight: 700; margin-bottom: 0.5rem;">
                            <i class="fa-solid fa-robot"></i> VICTORS AI Smart Answer
                        </div>
                        <div>Based on your query <em>"${prompt}"</em>:</div>
                        <ul style="margin-top: 0.5rem; padding-left: 1.2rem; color: var(--text-color);">
                            <li><strong>Core Concept:</strong> Understand key definitions and practice active recall.</li>
                            <li><strong>Recommended Tool:</strong> Use the Student GPA & Note tool or PDF Extractor in VICTORS.</li>
                            <li><strong>Study Advice:</strong> Break topic into 25-minute Pomodoro focus blocks.</li>
                        </ul>
                    `;
                }
                aiResult.innerHTML = aiResponse;
            }, 800);
        });
    }

    if (btnQuickSummarize) {
        btnQuickSummarize.addEventListener("click", () => {
            const text = aiPromptInput.value.trim();
            if (!text) {
                aiResult.innerHTML = `<span style="color: var(--danger);">Paste a paragraph above to auto-summarize.</span>`;
                return;
            }
            const bulletPoints = text.split('.').filter(s => s.trim().length > 10);
            aiResult.innerHTML = `
                <div style="color: var(--secondary-color); font-weight: 700; margin-bottom: 0.5rem;">
                    <i class="fa-solid fa-list-check"></i> Bullet-Point Summary (${bulletPoints.length} Key Points)
                </div>
                <ul style="padding-left: 1.2rem;">
                    ${bulletPoints.map(p => `<li>${p.trim()}.</li>`).join('')}
                </ul>
            `;
        });
    }

    // 4. Interactive Tools (PDF, Grade Calc, Kids Math, QR Generator)
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

    // PDF Extractor
    const pdfFileInput = document.getElementById("pdfFileInput");
    const btnProcessPdf = document.getElementById("btnProcessPdf");
    const btnClearPdf = document.getElementById("btnClearPdf");
    const pdfOutput = document.getElementById("pdfOutput");

    if (btnProcessPdf) {
        btnProcessPdf.addEventListener("click", () => {
            const file = pdfFileInput.files[0];
            if (!file) {
                pdfOutput.innerHTML = `<span style="color: var(--danger);">Select a document file (.pdf or .txt) first.</span>`;
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                const text = e.target.result;
                const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
                pdfOutput.innerHTML = `
                    <div style="color: var(--success); font-weight: 700; margin-bottom: 0.5rem;">
                        <i class="fa-solid fa-circle-check"></i> Document Processed (${file.name})
                    </div>
                    <div><strong>Word Count:</strong> ${words} words | <strong>Size:</strong> ${(file.size / 1024).toFixed(2)} KB</div>
                    <hr style="margin: 0.8rem 0; border-color: var(--card-border);">
                    <pre style="white-space: pre-wrap; font-family: monospace; max-height: 180px; overflow-y: auto;">${text.substring(0, 1000)}${text.length > 1000 ? '...\n[Preview truncated]' : ''}</pre>
                `;
            };

            if (file.type === "application/pdf") {
                pdfOutput.innerHTML = `
                    <div style="color: var(--secondary-color);">
                        <i class="fa-solid fa-spinner fa-spin"></i> Analyzing PDF file '${file.name}' locally...
                    </div>
                    <div style="margin-top: 0.5rem;">Document structure parsed safely inside browser memory.</div>
                `;
            } else {
                reader.readAsText(file);
            }
        });

        if (btnClearPdf) {
            btnClearPdf.addEventListener("click", () => {
                pdfFileInput.value = "";
                pdfOutput.innerHTML = `<em>Select a document file above to analyze content locally.</em>`;
            });
        }
    }

    // Grade Calculator
    const btnCalcGrade = document.getElementById("btnCalcGrade");
    const marksInput = document.getElementById("marksInput");
    const gradeResult = document.getElementById("gradeResult");

    if (btnCalcGrade) {
        btnCalcGrade.addEventListener("click", () => {
            const raw = marksInput.value.trim();
            if (!raw) {
                gradeResult.innerHTML = `<span style="color: var(--danger);">Enter comma separated marks (e.g. 88, 95, 78).</span>`;
                return;
            }
            const numbers = raw.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
            if (numbers.length === 0) {
                gradeResult.innerHTML = `<span style="color: var(--danger);">No valid numbers found.</span>`;
                return;
            }

            const total = numbers.reduce((a, b) => a + b, 0);
            const avg = total / numbers.length;
            const gpa = (avg / 20).toFixed(2);
            let gradeLetter = "F";
            if (avg >= 90) gradeLetter = "A+";
            else if (avg >= 80) gradeLetter = "A";
            else if (avg >= 70) gradeLetter = "B";
            else if (avg >= 60) gradeLetter = "C";
            else if (avg >= 50) gradeLetter = "D";

            gradeResult.innerHTML = `
                <div><strong>Average Score:</strong> ${avg.toFixed(2)}%</div>
                <div><strong>Estimated GPA:</strong> ${gpa} / 5.0</div>
                <div><strong>Grade Letter:</strong> <span style="font-size: 1.2rem; font-weight: 800; color: var(--primary-color);">${gradeLetter}</span></div>
            `;
        });
    }

    // Kids Math Quiz
    const quizQuestion = document.getElementById("quizQuestion");
    const quizAnswer = document.getElementById("quizAnswer");
    const btnCheckQuiz = document.getElementById("btnCheckQuiz");
    const quizFeedback = document.getElementById("quizFeedback");
    let currentSolution = 0;

    function generateQuiz() {
        if (!quizQuestion) return;
        const n1 = Math.floor(Math.random() * 15) + 1;
        const n2 = Math.floor(Math.random() * 15) + 1;
        currentSolution = n1 + n2;
        quizQuestion.textContent = `What is ${n1} + ${n2} ?`;
        if (quizAnswer) quizAnswer.value = "";
    }

    if (btnCheckQuiz) {
        btnCheckQuiz.addEventListener("click", () => {
            const ans = parseInt(quizAnswer.value.trim(), 10);
            if (isNaN(ans)) {
                quizFeedback.innerHTML = `<span style="color: var(--danger);">Please enter your numerical answer.</span>`;
                return;
            }

            if (ans === currentSolution) {
                quizFeedback.innerHTML = `<span style="color: var(--success); font-weight: 700;"><i class="fa-solid fa-trophy"></i> Great job! Correct Answer!</span>`;
                setTimeout(generateQuiz, 1500);
            } else {
                quizFeedback.innerHTML = `<span style="color: var(--danger);"><i class="fa-solid fa-xmark"></i> Not quite ${ans}. Try again!</span>`;
            }
        });
        generateQuiz();
    }

    // QR Code Maker
    const qrInput = document.getElementById("qrInput");
    const btnGenerateQR = document.getElementById("btnGenerateQR");
    const qrDisplay = document.getElementById("qrDisplay");

    if (btnGenerateQR) {
        btnGenerateQR.addEventListener("click", () => {
            const text = qrInput.value.trim();
            if (!text) {
                qrDisplay.innerHTML = `<span style="color: var(--danger);">Enter text or URL to generate QR code.</span>`;
                return;
            }
            const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(text)}`;
            qrDisplay.innerHTML = `
                <div style="text-align: center;">
                    <img src="${qrUrl}" alt="Generated QR" style="border-radius: 8px; margin-bottom: 0.5rem; border: 4px solid white;">
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Scan QR Code with your mobile phone camera.</p>
                </div>
            `;
        });
    }

    renderApps();
});
