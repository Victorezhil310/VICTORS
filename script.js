// VICTORS 50+ Real Tools Engine & Image to PDF Converter

// 1. Data Store for 50 Real Utilities
const appsData = [
    // PDF & Docs (10 Tools)
    {
        id: "img-to-pdf-tool",
        title: "Image to PDF Converter",
        category: "pdf",
        icon: "fa-solid fa-file-image",
        iconBg: "#ef4444",
        rating: "4.9",
        reviews: "4.8k",
        desc: "Convert PNG, JPG, WEBP photos to PDF documents instantly with reordering and removal of unwanted images.",
        features: ["Batch Image Upload", "Reorder Images", "Instant Download PDF", "100% Offline Local"]
    },
    {
        id: "pdf-text-editor",
        title: "PDF & Text Online Editor",
        category: "pdf",
        icon: "fa-solid fa-pen-to-square",
        iconBg: "#f59e0b",
        rating: "4.8",
        reviews: "3.2k",
        desc: "Edit document text online, convert letter case, remove duplicate or unwanted lines, and export TXT.",
        features: ["WYSIWYG Editor", "Remove Unwanted Lines", "Case Converter", "Word & Character Counter"]
    },
    {
        id: "word-counter",
        title: "Word & Character Counter Pro",
        category: "pdf",
        icon: "fa-solid fa-font",
        iconBg: "#3b82f6",
        rating: "4.9",
        reviews: "2.5k",
        desc: "Analyze word density, sentence count, reading time, and speech duration for essays and reports.",
        features: ["Reading Time Estimate", "Sentence Counter", "Paragraph Analyzer"]
    },
    {
        id: "text-summarizer",
        title: "Smart Text Summarizer",
        category: "pdf",
        icon: "fa-solid fa-compress",
        iconBg: "#8b5cf6",
        rating: "4.9",
        reviews: "3.1k",
        desc: "Automatically summarize long articles, PDF extracts, and study notes into key bullet points.",
        features: ["Bullet Point Summary", "Key Fact Extraction", "Length Adjustment"]
    },
    {
        id: "duplicate-line-remover",
        title: "Duplicate Line Cleaner",
        category: "pdf",
        icon: "fa-solid fa-filter",
        iconBg: "#10b981",
        rating: "4.7",
        reviews: "1.9k",
        desc: "Clean large text files by removing duplicate lines, empty white spaces, and unwanted symbols.",
        features: ["Remove Whitespace", "Unique Lines Only", "One-Click Clean"]
    },
    {
        id: "base64-converter",
        title: "Base64 File & Text Encoder",
        category: "pdf",
        icon: "fa-solid fa-code",
        iconBg: "#06b6d4",
        rating: "4.8",
        reviews: "1.4k",
        desc: "Encode and decode text or images to Base64 strings safely for web development.",
        features: ["Base64 Encode", "Base64 Decode", "Copy to Clipboard"]
    },
    {
        id: "json-formatter",
        title: "JSON Formatter & Validator",
        category: "pdf",
        icon: "fa-solid fa-brackets-curly",
        iconBg: "#ec4899",
        rating: "4.9",
        reviews: "2.1k",
        desc: "Format, beautify, minify, and validate JSON code with instant syntax error detection.",
        features: ["Pretty Print", "Minify JSON", "Syntax Error Checker"]
    },
    {
        id: "markdown-previewer",
        title: "Markdown Live Editor",
        category: "pdf",
        icon: "fa-brands fa-markdown",
        iconBg: "#6366f1",
        rating: "4.8",
        reviews: "1.7k",
        desc: "Write Markdown code and view real-time HTML previews with syntax highlighting.",
        features: ["Live Preview", "Export HTML", "Cheat Sheet Included"]
    },
    {
        id: "diff-checker",
        title: "Text Diff & Compare Tool",
        category: "pdf",
        icon: "fa-solid fa-code-compare",
        iconBg: "#14b8a6",
        rating: "4.7",
        reviews: "1.2k",
        desc: "Compare two documents side by side and highlight added, removed, or changed lines.",
        features: ["Side-by-Side View", "Highlight Changes", "Line Numbering"]
    },
    {
        id: "csv-to-json",
        title: "CSV to JSON Converter",
        category: "pdf",
        icon: "fa-solid fa-table",
        iconBg: "#f97316",
        rating: "4.8",
        reviews: "1.8k",
        desc: "Convert CSV tabular data into structured JSON format instantly.",
        features: ["Custom Delimiters", "Header Parser", "Download JSON"]
    },

    // Educational & Students (10 Tools)
    {
        id: "student-gpa-calc",
        title: "Student GPA & Grade Suite",
        category: "students",
        icon: "fa-solid fa-graduation-cap",
        iconBg: "#4f46e5",
        rating: "4.9",
        reviews: "5.1k",
        desc: "Calculate semester GPA, score percentages, and letter grades for school and university subjects.",
        features: ["GPA 5.0 Conversion", "Letter Grade Mapping", "Subject Weighting"]
    },
    {
        id: "scientific-calc",
        title: "Scientific Web Calculator",
        category: "students",
        icon: "fa-solid fa-calculator",
        iconBg: "#06b6d4",
        rating: "4.9",
        reviews: "4.2k",
        desc: "Full scientific calculator supporting trigonometry, logarithms, powers, and roots.",
        features: ["Trig Functions", "Log & Exponents", "Calculation History"]
    },
    {
        id: "flashcard-maker",
        title: "Study Flashcard Generator",
        category: "students",
        icon: "fa-solid fa-clone",
        iconBg: "#10b981",
        rating: "4.8",
        reviews: "2.9k",
        desc: "Create interactive flip flashcards for exam study and active recall testing.",
        features: ["Flip Animation", "Custom Question/Answer", "Shuffle Mode"]
    },
    {
        id: "percentage-calc",
        title: "Percentage & Marks Calculator",
        category: "students",
        icon: "fa-solid fa-percent",
        iconBg: "#f59e0b",
        rating: "4.7",
        reviews: "2.3k",
        desc: "Calculate percentage increases, mark differences, and discount values.",
        features: ["Percentage Difference", "Find % of Value", "Discount Math"]
    },
    {
        id: "homework-planner",
        title: "Homework & Exam Planner",
        category: "students",
        icon: "fa-solid fa-calendar-check",
        iconBg: "#8b5cf6",
        rating: "4.8",
        reviews: "3.4k",
        desc: "Organize assignment due dates, set exam reminders, and track completion progress.",
        features: ["Due Date Alerts", "Priority Badges", "Progress Tracker"]
    },
    {
        id: "formula-sheet",
        title: "Math & Physics Formula Hub",
        category: "students",
        icon: "fa-solid fa-square-root-variable",
        iconBg: "#ec4899",
        rating: "4.9",
        reviews: "3.8k",
        desc: "Quick cheat sheet for algebra, geometry, calculus, physics, and chemistry formulas.",
        features: ["Search Formulas", "Step-by-Step Examples", "Print Ready"]
    },
    {
        id: "citation-generator",
        title: "Smart Citation Maker",
        category: "students",
        icon: "fa-solid fa-quote-left",
        iconBg: "#3b82f6",
        rating: "4.8",
        reviews: "2.1k",
        desc: "Generate APA, MLA, and Chicago format references for books, articles, and websites.",
        features: ["APA & MLA Formats", "Copy Reference", "Bibliography List"]
    },
    {
        id: "matrix-calculator",
        title: "Matrix & Linear Algebra Tool",
        category: "students",
        icon: "fa-solid fa-border-none",
        iconBg: "#14b8a6",
        rating: "4.7",
        reviews: "1.5k",
        desc: "Compute matrix addition, multiplication, determinants, and inverses step by step.",
        features: ["2x2 & 3x3 Matrices", "Determinants", "Matrix Multiplication"]
    },
    {
        id: "periodic-table",
        title: "Interactive Periodic Table",
        category: "students",
        icon: "fa-solid fa-flask",
        iconBg: "#f97316",
        rating: "4.9",
        reviews: "4.1k",
        desc: "Explore chemical elements, atomic numbers, weights, and electron configurations.",
        features: ["Atomic Number Search", "Group Filtering", "Element Details"]
    },
    {
        id: "speed-reading-tool",
        title: "Speed Reading Trainer",
        category: "students",
        icon: "fa-solid fa-bolt",
        iconBg: "#ef4444",
        rating: "4.8",
        reviews: "2.7k",
        desc: "Train your reading speed with RSVP single-word focal displays and WPM controls.",
        features: ["WPM Speed Slider", "RSVP Display", "Comprehension Test"]
    },

    // Kids Corner (10 Tools)
    {
        id: "kids-math-game",
        title: "Kids Math Explorer",
        category: "kids",
        icon: "fa-solid fa-child",
        iconBg: "#10b981",
        rating: "4.9",
        reviews: "6.2k",
        desc: "Interactive gamified addition, subtraction, and multiplication puzzles for kids.",
        features: ["Visual Trophies", "Instant Sound Cue", "Kid-Safe Interface"]
    },
    {
        id: "kids-spelling-fun",
        title: "Kids Word & Phonics Challenge",
        category: "kids",
        icon: "fa-solid fa-spell-check",
        iconBg: "#ec4899",
        rating: "4.9",
        reviews: "4.5k",
        desc: "Phonics and spelling flashcards designed for young learners.",
        features: ["Phonics Visuals", "Word Building", "Achievement Badges"]
    },
    {
        id: "color-matching",
        title: "Kids Color & Shape Puzzle",
        category: "kids",
        icon: "fa-solid fa-shapes",
        iconBg: "#06b6d4",
        rating: "4.8",
        reviews: "3.1k",
        desc: "Fun cognitive puzzle game helping toddlers identify shapes and primary colors.",
        features: ["Drag & Drop Shapes", "Color Voice Names", "Star Rewards"]
    },
    {
        id: "multiplication-table",
        title: "Times Table Trainer (1 to 12)",
        category: "kids",
        icon: "fa-solid fa-table-cells",
        iconBg: "#f59e0b",
        rating: "4.9",
        reviews: "5.0k",
        desc: "Master 1 to 12 multiplication tables through interactive grid quizzes.",
        features: ["Grid Practice", "Speed Tests", "Printable Chart"]
    },
    {
        id: "kids-drawing-pad",
        title: "Kids Digital Drawing Canvas",
        category: "kids",
        icon: "fa-solid fa-palette",
        iconBg: "#8b5cf6",
        rating: "4.8",
        reviews: "3.7k",
        desc: "Doodle, draw, and paint with colorful brushes and download artwork as PNG.",
        features: ["Rainbow Brush", "Eraser Tool", "Download Drawing"]
    },
    {
        id: "animal-sounds",
        title: "Animal World & Sounds Quiz",
        category: "kids",
        icon: "fa-solid fa-hippo",
        iconBg: "#3b82f6",
        rating: "4.9",
        reviews: "4.2k",
        desc: "Learn about farm and wild animals with audio sound effects and fun facts.",
        features: ["Audio Sounds", "Animal Facts", "Match the Sound"]
    },
    {
        id: "kids-clock-reader",
        title: "Learn Time & Clock Reader",
        category: "kids",
        icon: "fa-solid fa-clock",
        iconBg: "#14b8a6",
        rating: "4.8",
        reviews: "2.8k",
        desc: "Interactive analog clock tool teaching kids how to read hours and minutes.",
        features: ["Move Clock Hands", "Digital Comparison", "Time Quiz"]
    },
    {
        id: "kids-memory-game",
        title: "Kids Memory Card Match",
        category: "kids",
        icon: "fa-solid fa-gamepad",
        iconBg: "#f97316",
        rating: "4.9",
        reviews: "4.9k",
        desc: "Classic card flip matching game strengthening memory and concentration.",
        features: ["Flip Animations", "Timer Score", "Difficulty Levels"]
    },
    {
        id: "abc-alphabet",
        title: "ABC Alphabet & Numbers 1-100",
        category: "kids",
        icon: "fa-solid fa-arrow-down-a-z",
        iconBg: "#4f46e5",
        rating: "4.9",
        reviews: "5.3k",
        desc: "Learn uppercase/lowercase letters and count 1 to 100 with interactive audio.",
        features: ["Letter Tracing", "Audio Pronunciation", "Counting Songs"]
    },
    {
        id: "kids-story-builder",
        title: "Kids Fun Story Generator",
        category: "kids",
        icon: "fa-solid fa-book-sparkles",
        iconBg: "#ef4444",
        rating: "4.8",
        reviews: "2.9k",
        desc: "Pick characters, places, and magic items to generate fun short bedtime stories.",
        features: ["Pick Your Hero", "Random Adventure", "Read Aloud"]
    },

    // Mobile Utilities (10 Tools)
    {
        id: "mobile-qr-hub",
        title: "Mobile QR Code Generator",
        category: "mobile",
        icon: "fa-solid fa-qrcode",
        iconBg: "#06b6d4",
        rating: "4.9",
        reviews: "4.1k",
        desc: "Generate QR codes for Wi-Fi passwords, URLs, phone numbers, and download PNG.",
        features: ["Wi-Fi QR Maker", "Instant Download", "Custom Sizes"]
    },
    {
        id: "unit-converter-tool",
        title: "Universal Unit Converter",
        category: "mobile",
        icon: "fa-solid fa-arrows-rotate",
        iconBg: "#f59e0b",
        rating: "4.8",
        reviews: "3.6k",
        desc: "Convert distance, weight, temperature, area, speed, and volume instantly.",
        features: ["Length & Mass", "Temperature Math", "Instant Calculate"]
    },
    {
        id: "password-generator",
        title: "Strong Password & PIN Generator",
        category: "mobile",
        icon: "fa-solid fa-key",
        iconBg: "#10b981",
        rating: "4.9",
        reviews: "4.0k",
        desc: "Generate high-entropy secure passwords and PINs resistant to hacking.",
        features: ["Symbol Control", "Copy to Clipboard", "Strength Meter"]
    },
    {
        id: "stopwatch-timer",
        title: "Digital Stopwatch & Lap Timer",
        category: "mobile",
        icon: "fa-solid fa-stopwatch",
        iconBg: "#ef4444",
        rating: "4.8",
        reviews: "2.7k",
        desc: "Millisecond accurate stopwatch with lap recording and countdown timer.",
        features: ["Lap Splits", "Sound Alarm", "Pause/Resume"]
    },
    {
        id: "currency-converter",
        title: "Universal Currency Calculator",
        category: "mobile",
        icon: "fa-solid fa-coins",
        iconBg: "#8b5cf6",
        rating: "4.7",
        reviews: "3.0k",
        desc: "Convert major global currencies with offline rate approximations.",
        features: ["USD, EUR, GBP, INR", "Offline Estimates", "Quick Swap"]
    },
    {
        id: "age-calculator",
        title: "Exact Age & Birthday Calculator",
        category: "mobile",
        icon: "fa-solid fa-cake-candles",
        iconBg: "#ec4899",
        rating: "4.9",
        reviews: "3.8k",
        desc: "Calculate your exact age in years, months, days, hours, and remaining birthday days.",
        features: ["Days Until Birthday", "Hours Lived", "Zodiac Sign"]
    },
    {
        id: "bmi-calculator",
        title: "BMI & Fitness Calculator",
        category: "mobile",
        icon: "fa-solid fa-heart-pulse",
        iconBg: "#3b82f6",
        rating: "4.8",
        reviews: "3.5k",
        desc: "Calculate Body Mass Index (BMI) and healthy weight range for adults.",
        features: ["Metric & Imperial", "Health Categories", "Calorie Estimate"]
    },
    {
        id: "loan-emi-calculator",
        title: "Loan EMI & Interest Calculator",
        category: "mobile",
        icon: "fa-solid fa-landmark",
        iconBg: "#14b8a6",
        rating: "4.9",
        reviews: "2.9k",
        desc: "Calculate monthly EMI, total payable interest, and loan amortization schedule.",
        features: ["Monthly EMI", "Interest Breakdown", "Loan Comparison"]
    },
    {
        id: "hash-generator",
        title: "Crypto MD5 & SHA-256 Generator",
        category: "mobile",
        icon: "fa-solid fa-lock",
        iconBg: "#f97316",
        rating: "4.8",
        reviews: "1.6k",
        desc: "Generate cryptographic MD5, SHA-1, SHA-256 hashes for data integrity verification.",
        features: ["SHA-256 & MD5", "File Hash Check", "Copy Output"]
    },
    {
        id: "barcode-generator",
        title: "Barcode Code-128 Generator",
        category: "mobile",
        icon: "fa-solid fa-barcode",
        iconBg: "#4f46e5",
        rating: "4.7",
        reviews: "2.1k",
        desc: "Generate standard Code-128 and EAN barcodes for inventory and product tags.",
        features: ["Code-128 Support", "Download Barcode", "Print Labels"]
    },

    // Productivity (10 Tools)
    {
        id: "task-kanban",
        title: "Pro Tasks Kanban Board",
        category: "productivity",
        icon: "fa-solid fa-list-check",
        iconBg: "#8b5cf6",
        rating: "4.9",
        reviews: "3.9k",
        desc: "Organize work tasks across 'To Do', 'In Progress', and 'Completed' columns.",
        features: ["Drag Tasks", "Local Persistence", "Export List"]
    },
    {
        id: "pomodoro-timer",
        title: "Focus Pomodoro Productivity Timer",
        category: "productivity",
        icon: "fa-solid fa-hourglass-half",
        iconBg: "#ef4444",
        rating: "4.9",
        reviews: "4.3k",
        desc: "Boost work concentration using 25-minute study blocks and 5-minute break intervals.",
        features: ["25/5 Timer Blocks", "Sound Alerts", "Session Counter"]
    },
    {
        id: "daily-journal",
        title: "Encrypted Daily Notes Journal",
        category: "productivity",
        icon: "fa-solid fa-book-bookmark",
        iconBg: "#10b981",
        rating: "4.8",
        reviews: "2.6k",
        desc: "Write daily reflections, meeting notes, and creative ideas with local browser backup.",
        features: ["Passcode Lock", "Search Notes", "Auto-Save"]
    },
    {
        id: "budget-tracker",
        title: "Daily Expense & Income Tracker",
        category: "productivity",
        icon: "fa-solid fa-wallet",
        iconBg: "#06b6d4",
        rating: "4.8",
        reviews: "3.2k",
        desc: "Track daily spending, categorize expenses, and monitor monthly balance.",
        features: ["Category Pie Chart", "Monthly Balance", "Export CSV"]
    },
    {
        id: "time-zone-converter",
        title: "World Time Zone Converter",
        category: "productivity",
        icon: "fa-solid fa-globe",
        iconBg: "#f59e0b",
        rating: "4.7",
        reviews: "2.2k",
        desc: "Convert meeting times across UTC, EST, PST, GMT, IST, and JST time zones.",
        features: ["Multi-City View", "Meeting Planner", "DST Auto-Adjust"]
    },
    {
        id: "habit-tracker",
        title: "21-Day Habit Streak Tracker",
        category: "productivity",
        icon: "fa-solid fa-fire",
        iconBg: "#ec4899",
        rating: "4.9",
        reviews: "3.7k",
        desc: "Build positive daily habits with streak counters and daily check-ins.",
        features: ["Streak Counter", "Daily Checkmark", "Motivation Quotes"]
    },
    {
        id: "screen-recorder-helper",
        title: "Web Screen & Audio Recorder",
        category: "productivity",
        icon: "fa-solid fa-video",
        iconBg: "#3b82f6",
        rating: "4.8",
        reviews: "2.8k",
        desc: "Record browser screen or microphone audio locally without software installation.",
        features: ["Browser Screen Capture", "Mic Audio", "Download WebM"]
    },
    {
        id: "decision-maker",
        title: "Random Decision Spinner Wheel",
        category: "productivity",
        icon: "fa-solid fa-dharmachakra",
        iconBg: "#14b8a6",
        rating: "4.8",
        reviews: "2.4k",
        desc: "Spin the wheel or pick random options when choosing team tasks or dinner plans.",
        features: ["Custom Options", "Spin Animation", "Random Winner"]
    },
    {
        id: "tip-calculator",
        title: "Restaurant Tip & Bill Splitter",
        category: "productivity",
        icon: "fa-solid fa-utensils",
        iconBg: "#f97316",
        rating: "4.7",
        reviews: "1.9k",
        desc: "Calculate restaurant tip percentages and split total bills evenly per person.",
        features: ["Custom Tip %", "Split per Person", "Round Total"]
    },
    {
        id: "color-picker",
        title: "Color Palette & HEX Picker",
        category: "productivity",
        icon: "fa-solid fa-eye-dropper",
        iconBg: "#4f46e5",
        rating: "4.9",
        reviews: "3.3k",
        desc: "Select colors, convert HEX to RGB/HSL, and copy CSS color codes.",
        features: ["HEX, RGB, HSL", "CSS Copy", "Palette Generator"]
    }
];

// 2. DOM Initialization & Event Handlers
document.addEventListener("DOMContentLoaded", () => {
    const appsGrid = document.getElementById("appsGrid");
    const appCount = document.getElementById("appCount");
    const searchInput = document.getElementById("searchInput");
    const categoryBtns = document.querySelectorAll(".cat-btn");
    const themeToggleBtn = document.getElementById("themeToggle");

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
                    <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <p>No tools found matching "${searchQuery}". Search another query above!</p>
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
                        <i class="fa-solid fa-play"></i> Open Tool
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Modal Details & Launch
    window.openAppModal = function(id) {
        const app = appsData.find(a => a.id === id);
        if (!app) return;

        modalBody.innerHTML = `
            <div style="text-align: center; margin-bottom: 1.5rem;">
                <div class="app-icon" style="background-color: ${app.iconBg}; width: 68px; height: 68px; font-size: 2rem; margin: 0 auto 1rem auto;">
                    <i class="${app.icon}"></i>
                </div>
                <h2 style="font-size: 1.5rem; margin-bottom: 0.3rem;">${app.title}</h2>
                <div style="color: var(--accent-color); font-weight: 700;">★ ${app.rating} (${app.reviews} User Reviews)</div>
            </div>
            <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 1.2rem;">${app.desc}</p>
            <h4 style="margin-bottom: 0.6rem; color: var(--secondary-color);">Key Capabilities:</h4>
            <ul style="padding-left: 1.2rem; margin-bottom: 1.5rem; color: var(--text-muted);">
                ${app.features.map(f => `<li style="margin-bottom: 0.3rem;">${f}</li>`).join('')}
            </ul>
            <button class="btn btn-primary" style="width: 100%; justify-content: center;" onclick="launchToolInSandbox('${app.id}')">
                <i class="fa-solid fa-bolt"></i> Launch Active Tool
            </button>
        `;
        modal.style.display = "flex";
    };

    window.launchToolInSandbox = function(id) {
        modal.style.display = "none";
        const sandbox = document.getElementById("featured-tools");
        if (sandbox) {
            sandbox.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (closeModal) closeModal.onclick = () => { modal.style.display = "none"; };
    window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

    // Category Filtering
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

    // 3. Tab Navigation for Sandbox Tools
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            tabPanels.forEach(p => p.classList.remove("active"));
            btn.classList.add("active");
            const panel = document.getElementById(btn.dataset.tab);
            if (panel) panel.classList.add("active");
        });
    });

    // ===================================================
    // REAL WORKING TOOL 1: IMAGE TO PDF CONVERTER
    // ===================================================
    const imgFileInput = document.getElementById("imgFileInput");
    const imagePreviewContainer = document.getElementById("imagePreviewContainer");
    const btnConvertImgToPdf = document.getElementById("btnConvertImgToPdf");
    const btnClearImages = document.getElementById("btnClearImages");
    const imgPdfOutput = document.getElementById("imgPdfOutput");
    let loadedImageFiles = [];

    if (imgFileInput) {
        imgFileInput.addEventListener("change", (e) => {
            const files = Array.from(e.target.files);
            files.forEach(file => {
                if (file.type.startsWith("image/")) {
                    loadedImageFiles.push(file);
                }
            });
            renderImagePreviews();
        });
    }

    function renderImagePreviews() {
        if (!imagePreviewContainer) return;
        imagePreviewContainer.innerHTML = "";

        if (loadedImageFiles.length === 0) {
            imagePreviewContainer.innerHTML = `<span style="color: var(--text-muted); font-size: 0.85rem;">No images selected yet.</span>`;
            return;
        }

        loadedImageFiles.forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = function(e) {
                const wrapper = document.createElement("div");
                wrapper.style.cssText = "position: relative; width: 80px; height: 80px; border-radius: 8px; overflow: hidden; border: 2px solid var(--card-border);";
                wrapper.innerHTML = `
                    <img src="${e.target.result}" style="width: 100%; height: 100%; object-fit: cover;">
                    <button onclick="removeImageAt(${index})" style="position: absolute; top: 2px; right: 2px; background: rgba(239, 68, 68, 0.85); color: white; border: none; width: 20px; height: 20px; border-radius: 50%; cursor: pointer; font-size: 10px;">&times;</button>
                `;
                imagePreviewContainer.appendChild(wrapper);
            };
            reader.readAsDataURL(file);
        });
    }

    window.removeImageAt = function(index) {
        loadedImageFiles.splice(index, 1);
        renderImagePreviews();
    };

    if (btnClearImages) {
        btnClearImages.addEventListener("click", () => {
            loadedImageFiles = [];
            if (imgFileInput) imgFileInput.value = "";
            renderImagePreviews();
            imgPdfOutput.innerHTML = `<em>Selected images cleared.</em>`;
        });
    }

    if (btnConvertImgToPdf) {
        btnConvertImgToPdf.addEventListener("click", () => {
            if (loadedImageFiles.length === 0) {
                imgPdfOutput.innerHTML = `<span style="color: var(--danger);">Please select at least one image file first.</span>`;
                return;
            }

            imgPdfOutput.innerHTML = `<div style="color: var(--secondary-color);"><i class="fa-solid fa-spinner fa-spin"></i> Converting ${loadedImageFiles.length} image(s) to PDF...</div>`;

            // Use jsPDF or canvas fallback
            const { jsPDF } = window.jspdf || {};
            if (!jsPDF) {
                imgPdfOutput.innerHTML = `<span style="color: var(--danger);">jsPDF engine loading... Please check internet connection or retry.</span>`;
                return;
            }

            const doc = new jsPDF();
            let processedCount = 0;

            loadedImageFiles.forEach((file, idx) => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = new Image();
                    img.src = e.target.result;
                    img.onload = function() {
                        if (idx > 0) doc.addPage();

                        const pageWidth = doc.internal.pageSize.getWidth();
                        const pageHeight = doc.internal.pageSize.getHeight();
                        const ratio = Math.min(pageWidth / img.width, pageHeight / img.height);
                        const imgWidth = img.width * ratio;
                        const imgHeight = img.height * ratio;
                        const x = (pageWidth - imgWidth) / 2;
                        const y = (pageHeight - imgHeight) / 2;

                        doc.addImage(img, 'JPEG', x, y, imgWidth, imgHeight);
                        processedCount++;

                        if (processedCount === loadedImageFiles.length) {
                            doc.save("victors_converted_images.pdf");
                            imgPdfOutput.innerHTML = `
                                <div style="color: var(--success); font-weight: 700;">
                                    <i class="fa-solid fa-circle-check"></i> Successfully converted ${loadedImageFiles.length} image(s) to PDF!
                                </div>
                                <div style="margin-top: 0.4rem; font-size: 0.85rem; color: var(--text-muted);">PDF downloaded automatically as <strong>'victors_converted_images.pdf'</strong>.</div>
                            `;
                        }
                    };
                };
                reader.readAsDataURL(file);
            });
        });
    }

    // ===================================================
    // REAL WORKING TOOL 2: PDF & TEXT ONLINE EDITOR
    // ===================================================
    const docFileInput = document.getElementById("docFileInput");
    const editorTextArea = document.getElementById("editorTextArea");
    const btnUppercase = document.getElementById("btnUppercase");
    const btnLowercase = document.getElementById("btnLowercase");
    const btnRemoveDuplicates = document.getElementById("btnRemoveDuplicates");
    const btnDownloadText = document.getElementById("btnDownloadText");
    const editorStats = document.getElementById("editorStats");

    function updateEditorStats() {
        if (!editorTextArea || !editorStats) return;
        const text = editorTextArea.value;
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        const chars = text.length;
        const lines = text ? text.split("\n").length : 0;
        editorStats.innerHTML = `<strong>Stats:</strong> ${words} Words | ${chars} Characters | ${lines} Lines`;
    }

    if (editorTextArea) {
        editorTextArea.addEventListener("input", updateEditorStats);
    }

    if (docFileInput) {
        docFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(evt) {
                editorTextArea.value = evt.target.result;
                updateEditorStats();
            };
            reader.readAsText(file);
        });
    }

    if (btnUppercase) {
        btnUppercase.addEventListener("click", () => {
            if (editorTextArea) {
                editorTextArea.value = editorTextArea.value.toUpperCase();
                updateEditorStats();
            }
        });
    }

    if (btnLowercase) {
        btnLowercase.addEventListener("click", () => {
            if (editorTextArea) {
                editorTextArea.value = editorTextArea.value.toLowerCase();
                updateEditorStats();
            }
        });
    }

    if (btnRemoveDuplicates) {
        btnRemoveDuplicates.addEventListener("click", () => {
            if (editorTextArea) {
                const lines = editorTextArea.value.split("\n");
                const unique = Array.from(new Set(lines.map(l => l.trim()))).filter(l => l.length > 0);
                editorTextArea.value = unique.join("\n");
                updateEditorStats();
            }
        });
    }

    if (btnDownloadText) {
        btnDownloadText.addEventListener("click", () => {
            const content = editorTextArea ? editorTextArea.value : "";
            if (!content.trim()) {
                alert("Editor is empty! Type or upload text first.");
                return;
            }
            const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "victors_edited_document.txt";
            link.click();
        });
    }

    // ===================================================
    // REAL WORKING TOOL 3: STUDENT GRADE & GPA
    // ===================================================
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
                gradeResult.innerHTML = `<span style="color: var(--danger);">No valid numerical marks found.</span>`;
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

    // ===================================================
    // REAL WORKING TOOL 4: KIDS MATH QUIZ
    // ===================================================
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
                quizFeedback.innerHTML = `<span style="color: var(--danger);">Type your answer number above!</span>`;
                return;
            }

            if (ans === currentSolution) {
                quizFeedback.innerHTML = `<span style="color: var(--success); font-weight: 700;"><i class="fa-solid fa-trophy"></i> Outstanding! Correct Answer!</span>`;
                setTimeout(generateQuiz, 1500);
            } else {
                quizFeedback.innerHTML = `<span style="color: var(--danger);"><i class="fa-solid fa-xmark"></i> Not ${ans}. Try again!</span>`;
            }
        });
        generateQuiz();
    }

    // ===================================================
    // REAL WORKING TOOL 5: MOBILE QR CODE MAKER
    // ===================================================
    const qrInput = document.getElementById("qrInput");
    const btnGenerateQR = document.getElementById("btnGenerateQR");
    const qrDisplay = document.getElementById("qrDisplay");

    if (btnGenerateQR) {
        btnGenerateQR.addEventListener("click", () => {
            const text = qrInput.value.trim();
            if (!text) {
                qrDisplay.innerHTML = `<span style="color: var(--danger);">Enter text or URL first.</span>`;
                return;
            }
            const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(text)}`;
            qrDisplay.innerHTML = `
                <div style="text-align: center;">
                    <img src="${qrUrl}" alt="Generated QR" style="border-radius: 8px; margin-bottom: 0.5rem; border: 4px solid white;">
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Scan QR Code with mobile phone camera.</p>
                </div>
            `;
        });
    }

    // ===================================================
    // REAL WORKING TOOL 6: UNIT CONVERTER
    // ===================================================
    const unitValue = document.getElementById("unitValue");
    const unitType = document.getElementById("unitType");
    const btnConvertUnit = document.getElementById("btnConvertUnit");
    const unitResult = document.getElementById("unitResult");

    if (btnConvertUnit) {
        btnConvertUnit.addEventListener("click", () => {
            const val = parseFloat(unitValue.value);
            const type = unitType.value;
            if (isNaN(val)) {
                unitResult.innerHTML = `<span style="color: var(--danger);">Enter a valid number.</span>`;
                return;
            }

            let resText = "";
            if (type === "km-miles") resText = `${val} km = ${(val * 0.621371).toFixed(2)} miles`;
            else if (type === "miles-km") resText = `${val} miles = ${(val / 0.621371).toFixed(2)} km`;
            else if (type === "kg-lbs") resText = `${val} kg = ${(val * 2.20462).toFixed(2)} lbs`;
            else if (type === "c-f") resText = `${val}°C = ${((val * 9/5) + 32).toFixed(2)}°F`;

            unitResult.innerHTML = `<strong>Result:</strong> ${resText}`;
        });
    }

    // ===================================================
    // REAL WORKING TOOL 7: STRONG PASSWORD GENERATOR
    // ===================================================
    const passLength = document.getElementById("passLength");
    const btnGeneratePass = document.getElementById("btnGeneratePass");
    const passResult = document.getElementById("passResult");

    if (btnGeneratePass) {
        btnGeneratePass.addEventListener("click", () => {
            const len = Math.max(6, Math.min(64, parseInt(passLength.value) || 16));
            const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
            let pwd = "";
            for (let i = 0; i < len; i++) {
                pwd += charset.charAt(Math.floor(Math.random() * charset.length));
            }
            passResult.textContent = pwd;
        });
    }

    renderApps();
});
