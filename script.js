// VICTORS 100 Real Tools Engine & Audio Synthesis Platform

// 1. Data Store for 100 Real Utilities
const appsData = [
    // --- PDF & DOCS (20 Tools) ---
    { id: "img-to-pdf-tool", title: "Image to PDF Converter", category: "pdf", icon: "fa-solid fa-file-image", iconBg: "#ef4444", rating: "4.9", reviews: "4.8k", desc: "Convert PNG, JPG, WEBP photos to PDF documents instantly.", features: ["Batch Image Upload", "Instant Download PDF", "Offline Privacy"] },
    { id: "pdf-text-editor", title: "PDF & Text Online Editor", category: "pdf", icon: "fa-solid fa-pen-to-square", iconBg: "#f59e0b", rating: "4.8", reviews: "3.2k", desc: "Edit document text online, convert case, remove duplicate lines.", features: ["WYSIWYG Editor", "Remove Unwanted Lines", "Download .txt"] },
    { id: "word-counter", title: "Word & Character Counter Pro", category: "pdf", icon: "fa-solid fa-font", iconBg: "#3b82f6", rating: "4.9", reviews: "2.5k", desc: "Analyze word density, sentence count, and reading time.", features: ["Reading Time Estimate", "Sentence Counter"] },
    { id: "text-summarizer", title: "Smart Text Summarizer", category: "pdf", icon: "fa-solid fa-compress", iconBg: "#8b5cf6", rating: "4.9", reviews: "3.1k", desc: "Summarize long articles into key bullet points.", features: ["Bullet Point Summary", "Key Fact Extraction"] },
    { id: "duplicate-line-remover", title: "Duplicate Line Cleaner", category: "pdf", icon: "fa-solid fa-filter", iconBg: "#10b981", rating: "4.7", reviews: "1.9k", desc: "Clean text files by removing duplicate lines.", features: ["Remove Whitespace", "Unique Lines Only"] },
    { id: "base64-converter", title: "Base64 Encoder & Decoder", category: "pdf", icon: "fa-solid fa-code", iconBg: "#06b6d4", rating: "4.8", reviews: "1.4k", desc: "Encode and decode text or images to Base64 strings.", features: ["Base64 Encode", "Base64 Decode"] },
    { id: "json-formatter", title: "JSON Formatter & Validator", category: "pdf", icon: "fa-solid fa-brackets-curly", iconBg: "#ec4899", rating: "4.9", reviews: "2.1k", desc: "Format, beautify, and minify JSON code.", features: ["Pretty Print", "Minify JSON"] },
    { id: "markdown-previewer", title: "Markdown Live Editor", category: "pdf", icon: "fa-brands fa-markdown", iconBg: "#6366f1", rating: "4.8", reviews: "1.7k", desc: "Write Markdown code and view real-time HTML previews.", features: ["Live Preview", "Export HTML"] },
    { id: "diff-checker", title: "Text Diff & Compare Tool", category: "pdf", icon: "fa-solid fa-code-compare", iconBg: "#14b8a6", rating: "4.7", reviews: "1.2k", desc: "Compare two documents side by side.", features: ["Side-by-Side View", "Highlight Changes"] },
    { id: "csv-to-json", title: "CSV to JSON Converter", category: "pdf", icon: "fa-solid fa-table", iconBg: "#f97316", rating: "4.8", reviews: "1.8k", desc: "Convert CSV tabular data into structured JSON format.", features: ["Header Parser", "Download JSON"] },
    { id: "html-encoder", title: "HTML Entity Encoder", category: "pdf", icon: "fa-solid fa-file-code", iconBg: "#3b82f6", rating: "4.7", reviews: "1.1k", desc: "Convert HTML characters to safe entities.", features: ["Encode Special Chars", "Copy Output"] },
    { id: "url-encoder", title: "URL Encoder & Decoder", category: "pdf", icon: "fa-solid fa-link", iconBg: "#10b981", rating: "4.8", reviews: "1.3k", desc: "Encode and decode web URLs safely.", features: ["URI Component Encode", "URL Decode"] },
    { id: "line-sorter", title: "Alphabetical Line Sorter", category: "pdf", icon: "fa-solid fa-arrow-down-a-z", iconBg: "#8b5cf6", rating: "4.7", reviews: "900", desc: "Sort text lines alphabetically A-Z or Z-A.", features: ["A-Z Sort", "Z-A Reverse Sort"] },
    { id: "regex-tester", title: "Regular Expression Tester", category: "pdf", icon: "fa-solid fa-vial", iconBg: "#ec4899", rating: "4.8", reviews: "1.5k", desc: "Test Regex patterns against sample text.", features: ["Match Highlighting", "Flags Toggle"] },
    { id: "lorem-ipsum", title: "Lorem Ipsum Text Generator", category: "pdf", icon: "fa-solid fa-paragraph", iconBg: "#06b6d4", rating: "4.9", reviews: "2.3k", desc: "Generate dummy placeholder paragraphs.", features: ["Custom Paragraph Count", "Copy Text"] },
    { id: "word-frequency", title: "Word Frequency Counter", category: "pdf", icon: "fa-solid fa-chart-simple", iconBg: "#f59e0b", rating: "4.8", reviews: "1.2k", desc: "Find most frequent words in a document.", features: ["Top 10 Words", "Frequency Table"] },
    { id: "string-length", title: "String & Character Measurer", category: "pdf", icon: "fa-solid fa-ruler-horizontal", iconBg: "#6366f1", rating: "4.7", reviews: "850", desc: "Measure exact string length and byte size.", features: ["Byte Size", "Character Count"] },
    { id: "slug-generator", title: "SEO URL Slug Generator", category: "pdf", icon: "fa-solid fa-hashtag", iconBg: "#14b8a6", rating: "4.8", reviews: "1.6k", desc: "Convert article titles into clean SEO URL slugs.", features: ["Lowercase Clean", "Hyphenated Slugs"] },
    { id: "text-case-converter", title: "Title Case & Swap Case Converter", category: "pdf", icon: "fa-solid fa-text-height", iconBg: "#f97316", rating: "4.9", reviews: "2.1k", desc: "Convert text to Title Case, Capitalized, or Swap Case.", features: ["Title Case", "Capitalized Words"] },
    { id: "space-remover", title: "Extra Whitespace Cleaner", category: "pdf", icon: "fa-solid fa-broom", iconBg: "#ef4444", rating: "4.8", reviews: "1.4k", desc: "Remove double spaces and extra line breaks.", features: ["Single Space Clean", "Trim Endings"] },

    // --- EDUCATIONAL & STUDENTS (20 Tools) ---
    { id: "student-gpa-calc", title: "Student GPA & Grade Suite", category: "students", icon: "fa-solid fa-graduation-cap", iconBg: "#4f46e5", rating: "4.9", reviews: "5.1k", desc: "Calculate semester GPA and letter grades.", features: ["GPA 5.0 Scale", "Letter Grade Mapping"] },
    { id: "scientific-calc", title: "Scientific Web Calculator", category: "students", icon: "fa-solid fa-calculator", iconBg: "#06b6d4", rating: "4.9", reviews: "4.2k", desc: "Full scientific calculator supporting trig and log.", features: ["Trig Functions", "Logarithms"] },
    { id: "flashcard-maker", title: "Study Flashcard Generator", category: "students", icon: "fa-solid fa-clone", iconBg: "#10b981", rating: "4.8", reviews: "2.9k", desc: "Create interactive flip flashcards for exam study.", features: ["Flip Card", "Active Recall"] },
    { id: "percentage-calc", title: "Percentage & Marks Calculator", category: "students", icon: "fa-solid fa-percent", iconBg: "#f59e0b", rating: "4.7", reviews: "2.3k", desc: "Calculate percentage increases and mark differences.", features: ["Percentage Math", "Mark Difference"] },
    { id: "homework-planner", title: "Homework & Exam Planner", category: "students", icon: "fa-solid fa-calendar-check", iconBg: "#8b5cf6", rating: "4.8", reviews: "3.4k", desc: "Organize assignment due dates and set exam reminders.", features: ["Due Date Alerts", "Priority Badges"] },
    { id: "formula-sheet", title: "Math & Physics Formula Hub", category: "students", icon: "fa-solid fa-square-root-variable", iconBg: "#ec4899", rating: "4.9", reviews: "3.8k", desc: "Cheat sheet for algebra, physics, and chemistry.", features: ["Search Formulas", "Step-by-Step"] },
    { id: "citation-generator", title: "Smart Citation Maker", category: "students", icon: "fa-solid fa-quote-left", iconBg: "#3b82f6", rating: "4.8", reviews: "2.1k", desc: "Generate APA and MLA citations.", features: ["APA & MLA", "Copy Citation"] },
    { id: "matrix-calculator", title: "Matrix & Linear Algebra Tool", category: "students", icon: "fa-solid fa-border-none", iconBg: "#14b8a6", rating: "4.7", reviews: "1.5k", desc: "Compute matrix determinants and multiplication.", features: ["2x2 & 3x3 Matrices", "Determinants"] },
    { id: "periodic-table", title: "Interactive Periodic Table", category: "students", icon: "fa-solid fa-flask", iconBg: "#f97316", rating: "4.9", reviews: "4.1k", desc: "Explore chemical elements and atomic weights.", features: ["Atomic Numbers", "Group Search"] },
    { id: "speed-reading-tool", title: "Speed Reading Trainer", category: "students", icon: "fa-solid fa-bolt", iconBg: "#ef4444", rating: "4.8", reviews: "2.7k", desc: "Train your reading speed with RSVP focal displays.", features: ["WPM Control", "RSVP Display"] },
    { id: "algebra-solver", title: "Linear Equation Solver", category: "students", icon: "fa-solid fa-xmark", iconBg: "#4f46e5", rating: "4.8", reviews: "2.0k", desc: "Solve single variable linear equations ax + b = c.", features: ["Step-by-Step", "Instant Solution"] },
    { id: "triangle-solver", title: "Right Triangle Trigonometry Solver", category: "students", icon: "fa-solid fa-play", iconBg: "#06b6d4", rating: "4.7", reviews: "1.6k", desc: "Calculate Pythagorean theorem hypotenuse and angles.", features: ["Hypotenuse Math", "Angles Calculation"] },
    { id: "grade-predictor", title: "Final Exam Grade Predictor", category: "students", icon: "fa-solid fa-bullseye", iconBg: "#10b981", rating: "4.9", reviews: "2.8k", desc: "Calculate score needed on final exam to reach target grade.", features: ["Target Score", "Required %"] },
    { id: "class-timetable", title: "Weekly Class Schedule Planner", category: "students", icon: "fa-solid fa-clock-rotate-left", iconBg: "#f59e0b", rating: "4.8", reviews: "2.2k", desc: "Organize Monday to Friday school class schedules.", features: ["Color Timetable", "Class Room Notes"] },
    { id: "fraction-calculator", title: "Fraction Addition & Reducer", category: "students", icon: "fa-solid fa-divide", iconBg: "#8b5cf6", rating: "4.8", reviews: "1.9k", desc: "Add, subtract, and simplify fractions to lowest terms.", features: ["Fraction Simplify", "Mixed Numbers"] },
    { id: "percentile-calc", title: "Standard Deviation & Percentile Tool", category: "students", icon: "fa-solid fa-chart-line", iconBg: "#ec4899", rating: "4.7", reviews: "1.4k", desc: "Compute mean, variance, and standard deviation.", features: ["Mean & Variance", "Standard Deviation"] },
    { id: "compound-interest-calc", title: "Compound Interest Calculator", category: "students", icon: "fa-solid fa-piggy-bank", iconBg: "#3b82f6", rating: "4.9", reviews: "3.2k", desc: "Calculate interest growth over time.", features: ["Annual Growth", "Investment Graph"] },
    { id: "vocab-builder", title: "GRE & SAT Vocabulary Builder", category: "students", icon: "fa-solid fa-book-open", iconBg: "#14b8a6", rating: "4.9", reviews: "3.5k", desc: "Learn advanced academic vocabulary with definitions.", features: ["Daily Word", "Synonyms & Antonyms"] },
    { id: "unit-weighting", title: "Weighted Grade Calculator", category: "students", icon: "fa-solid fa-weight-hanging", iconBg: "#f97316", rating: "4.8", reviews: "1.8k", desc: "Calculate course grade using assignment weights.", features: ["Category Weight %", "Final Grade"] },
    { id: "physics-kinematics", title: "Physics Motion & Velocity Solver", category: "students", icon: "fa-solid fa-gauge-high", iconBg: "#ef4444", rating: "4.8", reviews: "2.1k", desc: "Solve v = u + at velocity and acceleration problems.", features: ["Distance & Time", "Acceleration Math"] },

    // --- KIDS CORNER (20 Tools) ---
    { id: "kids-math-game", title: "Kids Math Explorer", category: "kids", icon: "fa-solid fa-child", iconBg: "#10b981", rating: "4.9", reviews: "6.2k", desc: "Interactive gamified addition and subtraction puzzles.", features: ["Visual Trophies", "Kid-Safe Interface"] },
    { id: "kids-spelling-fun", title: "Kids Word & Phonics Challenge", category: "kids", icon: "fa-solid fa-spell-check", iconBg: "#ec4899", rating: "4.9", reviews: "4.5k", desc: "Phonics and spelling flashcards designed for kids.", features: ["Phonics Visuals", "Achievement Badges"] },
    { id: "color-matching", title: "Kids Color & Shape Puzzle", category: "kids", icon: "fa-solid fa-shapes", iconBg: "#06b6d4", rating: "4.8", reviews: "3.1k", desc: "Identify shapes and primary colors.", features: ["Shapes Match", "Star Rewards"] },
    { id: "multiplication-table", title: "Times Table Trainer (1 to 12)", category: "kids", icon: "fa-solid fa-table-cells", iconBg: "#f59e0b", rating: "4.9", reviews: "5.0k", desc: "Master 1 to 12 multiplication tables.", features: ["Grid Practice", "Speed Tests"] },
    { id: "kids-drawing-pad", title: "Kids Digital Drawing Canvas", category: "kids", icon: "fa-solid fa-palette", iconBg: "#8b5cf6", rating: "4.8", reviews: "3.7k", desc: "Doodle and paint with colorful brushes.", features: ["Rainbow Brush", "Download PNG"] },
    { id: "animal-sounds", title: "Animal World & Sounds Quiz", category: "kids", icon: "fa-solid fa-hippo", iconBg: "#3b82f6", rating: "4.9", reviews: "4.2k", desc: "Learn farm and wild animals with audio facts.", features: ["Audio Sounds", "Animal Facts"] },
    { id: "kids-clock-reader", title: "Learn Time & Clock Reader", category: "kids", icon: "fa-solid fa-clock", iconBg: "#14b8a6", rating: "4.8", reviews: "2.8k", desc: "Interactive clock teaching kids how to read time.", features: ["Move Clock Hands", "Time Quiz"] },
    { id: "kids-memory-game", title: "Kids Memory Card Match", category: "kids", icon: "fa-solid fa-gamepad", iconBg: "#f97316", rating: "4.9", reviews: "4.9k", desc: "Classic card flip matching game.", features: ["Card Flip", "Memory Score"] },
    { id: "abc-alphabet", title: "ABC Alphabet & Numbers 1-100", category: "kids", icon: "fa-solid fa-arrow-down-a-z", iconBg: "#4f46e5", rating: "4.9", reviews: "5.3k", desc: "Learn letters and count 1 to 100.", features: ["Letter Phonics", "Counting Songs"] },
    { id: "kids-story-builder", title: "Kids Fun Story Generator", category: "kids", icon: "fa-solid fa-book-sparkles", iconBg: "#ef4444", rating: "4.8", reviews: "2.9k", desc: "Generate fun short bedtime stories.", features: ["Bedtime Stories", "Random Adventure"] },
    { id: "fruit-quiz", title: "Fruits & Vegetables Quiz", category: "kids", icon: "fa-solid fa-apple-whole", iconBg: "#10b981", rating: "4.9", reviews: "3.1k", desc: "Learn healthy fruits and veggies through picture cards.", features: ["Fruit Names", "Health Facts"] },
    { id: "kids-counting", title: "Count Objects 1 to 20", category: "kids", icon: "fa-solid fa-cubes", iconBg: "#ec4899", rating: "4.9", reviews: "4.0k", desc: "Count colorful stars, balloons, and apples.", features: ["Visual Counting", "Number Matching"] },
    { id: "solar-system-kids", title: "Kids Planets & Solar System", category: "kids", icon: "fa-solid fa-earth-americas", iconBg: "#06b6d4", rating: "4.9", reviews: "3.6k", desc: "Explore the 8 planets in our solar system.", features: ["Planet Facts", "3D Solar View"] },
    { id: "dino-quiz", title: "Dinosaur Explorer & Quiz", category: "kids", icon: "fa-solid fa-dragon", iconBg: "#f59e0b", rating: "4.8", reviews: "2.9k", desc: "Discover T-Rex, Triceratops, and pre-historic dinos.", features: ["Dino Sounds", "Fossil Cards"] },
    { id: "rhyming-words", title: "Fun Rhyming Words Game", category: "kids", icon: "fa-solid fa-music", iconBg: "#8b5cf6", rating: "4.8", reviews: "2.4k", desc: "Match rhyming words like Cat/Hat, Dog/Frog.", features: ["Rhyme Match", "Audio Cue"] },
    { id: "sight-words", title: "Kindergarten Sight Words", category: "kids", icon: "fa-solid fa-eye", iconBg: "#3b82f6", rating: "4.9", reviews: "4.1k", desc: "Master top 50 high-frequency reading sight words.", features: ["Flash Cards", "Audio Reader"] },
    { id: "odd-even-game", title: "Odd & Even Numbers Game", category: "kids", icon: "fa-solid fa-hashtag", iconBg: "#14b8a6", rating: "4.7", reviews: "1.8k", desc: "Classify numbers as Odd or Even in a fast quiz.", features: ["Odd/Even Sort", "High Score"] },
    { id: "fraction-visualizer", title: "Kids Fraction Pizza Visualizer", category: "kids", icon: "fa-solid fa-pizza-slice", iconBg: "#f97316", rating: "4.9", reviews: "3.3k", desc: "Learn fractions 1/2, 1/4, 3/4 using pizza slices.", features: ["Pizza Slices", "Visual Fractions"] },
    { id: "spelling-bee-kids", title: "Kids Spelling Bee Challenge", category: "kids", icon: "fa-solid fa-bounce", iconBg: "#ef4444", rating: "4.8", reviews: "2.7k", desc: "Listen to audio words and spell them correctly.", features: ["Audio Prompt", "Spelling Badges"] },
    { id: "kids-piano", title: "Kids Sound Piano Keys", category: "kids", icon: "fa-solid fa-piano", iconBg: "#4f46e5", rating: "4.9", reviews: "5.0k", desc: "Play piano notes Do-Re-Mi-Fa-So on colorful keys.", features: ["Web Audio Synthesizer", "Key Animations"] },

    // --- MOBILE UTILITIES (20 Tools) ---
    { id: "mobile-qr-hub", title: "Mobile QR Code Generator", category: "mobile", icon: "fa-solid fa-qrcode", iconBg: "#06b6d4", rating: "4.9", reviews: "4.1k", desc: "Generate QR codes for Wi-Fi, URLs, and phone numbers.", features: ["Wi-Fi QR", "Download PNG"] },
    { id: "unit-converter-tool", title: "Universal Unit Converter", category: "mobile", icon: "fa-solid fa-arrows-rotate", iconBg: "#f59e0b", rating: "4.8", reviews: "3.6k", desc: "Convert distance, weight, temperature, and speed.", features: ["Length & Mass", "Temperature"] },
    { id: "password-generator", title: "Strong Password Generator", category: "mobile", icon: "fa-solid fa-key", iconBg: "#10b981", rating: "4.9", reviews: "4.0k", desc: "Generate secure passwords and PINs.", features: ["Symbol Control", "Copy Password"] },
    { id: "stopwatch-timer", title: "Digital Stopwatch & Lap Timer", category: "mobile", icon: "fa-solid fa-stopwatch", iconBg: "#ef4444", rating: "4.8", reviews: "2.7k", desc: "Millisecond accurate stopwatch with lap splits.", features: ["Lap Splits", "Pause/Resume"] },
    { id: "currency-converter", title: "Universal Currency Calculator", category: "mobile", icon: "fa-solid fa-coins", iconBg: "#8b5cf6", rating: "4.7", reviews: "3.0k", desc: "Convert global currencies USD, EUR, GBP, INR.", features: ["USD, EUR, GBP, INR", "Quick Swap"] },
    { id: "age-calculator", title: "Exact Age & Birthday Calculator", category: "mobile", icon: "fa-solid fa-cake-candles", iconBg: "#ec4899", rating: "4.9", reviews: "3.8k", desc: "Calculate exact age in years, months, and days.", features: ["Days Lived", "Birthday Countdown"] },
    { id: "bmi-calculator", title: "BMI & Fitness Calculator", category: "mobile", icon: "fa-solid fa-heart-pulse", iconBg: "#3b82f6", rating: "4.8", reviews: "3.5k", desc: "Calculate Body Mass Index (BMI) and health range.", features: ["Metric & Imperial", "BMI Category"] },
    { id: "loan-emi-calculator", title: "Loan EMI & Interest Calculator", category: "mobile", icon: "fa-solid fa-landmark", iconBg: "#14b8a6", rating: "4.9", reviews: "2.9k", desc: "Calculate monthly EMI and payable interest.", features: ["Monthly EMI", "Interest Breakdown"] },
    { id: "hash-generator", title: "Crypto MD5 & SHA-256 Generator", category: "mobile", icon: "fa-solid fa-lock", iconBg: "#f97316", rating: "4.8", reviews: "1.6k", desc: "Generate cryptographic MD5 and SHA-256 hashes.", features: ["SHA-256 Hash", "MD5 Hash"] },
    { id: "barcode-generator", title: "Barcode Code-128 Generator", category: "mobile", icon: "fa-solid fa-barcode", iconBg: "#4f46e5", rating: "4.7", reviews: "2.1k", desc: "Generate Code-128 barcodes for tags.", features: ["Code-128 Support", "Download Barcode"] },
    { id: "tip-splitter", title: "Restaurant Tip & Splitter", category: "mobile", icon: "fa-solid fa-utensils", iconBg: "#10b981", rating: "4.8", reviews: "2.0k", desc: "Split restaurant bills and calculate tip per person.", features: ["Tip %", "Split per Person"] },
    { id: "discount-calc", title: "Shopping Discount Calculator", category: "mobile", icon: "fa-solid fa-tag", iconBg: "#ec4899", rating: "4.9", reviews: "3.1k", desc: "Calculate savings and final price after percentage discounts.", features: ["Savings Amount", "Final Price"] },
    { id: "sales-tax-calc", title: "Sales Tax & VAT Calculator", category: "mobile", icon: "fa-solid fa-receipt", iconBg: "#06b6d4", rating: "4.8", reviews: "1.9k", desc: "Add or remove VAT/Sales tax from prices.", features: ["Include/Exclude Tax", "Tax Total"] },
    { id: "date-difference", title: "Date Duration & Interval Calculator", category: "mobile", icon: "fa-solid fa-calendar-days", iconBg: "#f59e0b", rating: "4.8", reviews: "2.4k", desc: "Calculate exact number of days between two dates.", features: ["Total Days", "Weeks & Months"] },
    { id: "time-until-event", title: "Event Countdown Clock", category: "mobile", icon: "fa-solid fa-hourglass-start", iconBg: "#8b5cf6", rating: "4.9", reviews: "2.8k", desc: "Countdown timer until holidays, exams, or events.", features: ["Live Countdown", "Days/Hours/Sec"] },
    { id: "battery-tips", title: "Mobile Battery Health & Tips", category: "mobile", icon: "fa-solid fa-battery-three-quarters", iconBg: "#3b82f6", rating: "4.7", reviews: "1.5k", desc: "Optimized guidelines for prolonging mobile battery life.", features: ["Battery Savings", "Charge Cycles"] },
    { id: "network-speed-calc", title: "Download Time & Speed Calculator", category: "mobile", icon: "fa-solid fa-wifi", iconBg: "#14b8a6", rating: "4.8", reviews: "2.3k", desc: "Estimate how long a file download takes based on internet speed.", features: ["Download ETA", "MB/s to Mbps"] },
    { id: "compass-heading", title: "Digital Compass & Orientation", category: "mobile", icon: "fa-solid fa-compass", iconBg: "#f97316", rating: "4.8", reviews: "1.7k", desc: "Determine direction and cardinal heading degrees.", features: ["Heading Degrees", "Cardinal Direction"] },
    { id: "screen-flashlight", title: "Screen Flashlight & Torch", category: "mobile", icon: "fa-solid fa-lightbulb", iconBg: "#ef4444", rating: "4.9", reviews: "3.0k", desc: "Turn display screen into a bright white emergency flashlight.", features: ["Max Brightness", "Color Light"] },
    { id: "sound-level-meter", title: "Web Sound & Noise Meter", category: "mobile", icon: "fa-solid fa-microphone-lines", iconBg: "#4f46e5", rating: "4.7", reviews: "1.6k", desc: "Estimate ambient decibels (dB) via microphone input.", features: ["Microphone dB", "Noise Warning"] },

    // --- PRODUCTIVITY & BUSINESS (20 Tools) ---
    { id: "task-kanban", title: "Pro Tasks Kanban Board", category: "productivity", icon: "fa-solid fa-list-check", iconBg: "#8b5cf6", rating: "4.9", reviews: "3.9k", desc: "Organize work tasks across 'To Do' and 'Completed' columns.", features: ["Task List", "Local Persistence"] },
    { id: "pomodoro-timer", title: "Focus Pomodoro Productivity Timer", category: "productivity", icon: "fa-solid fa-hourglass-half", iconBg: "#ef4444", rating: "4.9", reviews: "4.3k", desc: "Boost concentration with 25-minute work blocks.", features: ["25/5 Timer", "Sound Alert"] },
    { id: "daily-journal", title: "Encrypted Daily Notes Journal", category: "productivity", icon: "fa-solid fa-book-bookmark", iconBg: "#10b981", rating: "4.8", reviews: "2.6k", desc: "Write daily reflections and meeting notes.", features: ["Passcode Lock", "Auto-Save"] },
    { id: "budget-tracker", title: "Daily Expense & Income Tracker", category: "productivity", icon: "fa-solid fa-wallet", iconBg: "#06b6d4", rating: "4.8", reviews: "3.2k", desc: "Track spending and monthly balance.", features: ["Expense List", "Monthly Balance"] },
    { id: "time-zone-converter", title: "World Time Zone Converter", category: "productivity", icon: "fa-solid fa-globe", iconBg: "#f59e0b", rating: "4.7", reviews: "2.2k", desc: "Convert meeting times across global time zones.", features: ["UTC, EST, PST, GMT", "Meeting Planner"] },
    { id: "habit-tracker", title: "21-Day Habit Streak Tracker", category: "productivity", icon: "fa-solid fa-fire", iconBg: "#ec4899", rating: "4.9", reviews: "3.7k", desc: "Build daily habits with streak counters.", features: ["Streak Counter", "Daily Check-in"] },
    { id: "screen-recorder-helper", title: "Web Screen & Audio Recorder", category: "productivity", icon: "fa-solid fa-video", iconBg: "#3b82f6", rating: "4.8", reviews: "2.8k", desc: "Record browser screen locally without software.", features: ["Screen Capture", "Download Video"] },
    { id: "decision-maker", title: "Random Decision Spinner Wheel", category: "productivity", icon: "fa-solid fa-dharmachakra", iconBg: "#14b8a6", rating: "4.8", reviews: "2.4k", desc: "Pick random choices when deciding plans.", features: ["Spin Wheel", "Random Choice"] },
    { id: "color-picker", title: "Color Palette & HEX Picker", category: "productivity", icon: "fa-solid fa-eye-dropper", iconBg: "#4f46e5", rating: "4.9", reviews: "3.3k", desc: "Select colors, convert HEX to RGB, and copy codes.", features: ["HEX & RGB", "Copy Code"] },
    { id: "invoice-generator", title: "Simple Invoice Generator", category: "productivity", icon: "fa-solid fa-file-invoice-dollar", iconBg: "#10b981", rating: "4.9", reviews: "3.1k", desc: "Create professional client invoices and export PDF/print.", features: ["Item Breakdown", "Total Tax & Print"] },
    { id: "meeting-notes", title: "Meeting Notes & Action Items", category: "productivity", icon: "fa-solid fa-users-rectangle", iconBg: "#ec4899", rating: "4.8", reviews: "2.1k", desc: "Template for recording attendees, agenda, and action items.", features: ["Action Items", "Export Notes"] },
    { id: "goal-tracker", title: "OKRs & Quarterly Goal Tracker", category: "productivity", icon: "fa-solid fa-bullseye", iconBg: "#06b6d4", rating: "4.8", reviews: "2.5k", desc: "Track quarterly key results and achievement %.", features: ["Target Key Results", "Progress Bar"] },
    { id: "resume-helper", title: "Resume & CV Outline Builder", category: "productivity", icon: "fa-solid fa-file-user", iconBg: "#f59e0b", rating: "4.9", reviews: "3.8k", desc: "Build structured resume bullet points and summary.", features: ["Section Template", "Copy Resume Text"] },
    { id: "word-wrapper", title: "Text Word Wrapper & Line Breaker", category: "productivity", icon: "fa-solid fa-align-left", iconBg: "#8b5cf6", rating: "4.7", reviews: "1.2k", desc: "Wrap long text at specific column character counts.", features: ["Wrap Column Limit", "Clean Break"] },
    { id: "meta-tag-gen", title: "SEO Meta Tag Generator", category: "productivity", icon: "fa-solid fa-tags", iconBg: "#3b82f6", rating: "4.8", reviews: "2.0k", desc: "Generate OpenGraph and Twitter card meta tags.", features: ["Title & Description", "Copy HTML Meta"] },
    { id: "robots-txt-gen", title: "Robots.txt Generator", category: "productivity", icon: "fa-solid fa-robot", iconBg: "#14b8a6", rating: "4.9", reviews: "2.7k", desc: "Generate search crawler directives and sitemap links.", features: ["Allow/Disallow Rules", "Sitemap Link"] },
    { id: "sitemap-helper", title: "XML Sitemap Tag Builder", category: "productivity", icon: "fa-solid fa-sitemap", iconBg: "#f97316", rating: "4.8", reviews: "1.9k", desc: "Build XML sitemap tags for search engines.", features: ["URL List", "Export XML"] },
    { id: "email-signature", title: "Professional Email Signature Maker", category: "productivity", icon: "fa-solid fa-signature", iconBg: "#ef4444", rating: "4.8", reviews: "2.6k", desc: "Design HTML email signatures with contact details.", features: ["Copy HTML Signature", "Job Title & Phone"] },
    { id: "terms-generator", title: "Terms of Service Outline Maker", category: "productivity", icon: "fa-solid fa-file-contract", iconBg: "#4f46e5", rating: "4.8", reviews: "2.2k", desc: "Generate standard terms of service clauses.", features: ["Standard License", "Liability Clause"] },
    { id: "privacy-policy-helper", title: "Privacy Policy Clause Maker", category: "productivity", icon: "fa-solid fa-user-shield", iconBg: "#10b981", rating: "4.9", reviews: "3.0k", desc: "Build standard website privacy policy sections.", features: ["Cookie Disclosure", "Data Protection"] }
];

// Map tool ID to standalone HTML page URL
const pageMapping = {
    "img-to-pdf-tool": "image-to-pdf.html",
    "pdf-text-editor": "pdf-editor.html",
    "student-gpa-calc": "gpa-calculator.html",
    "mobile-qr-hub": "qr-generator.html",
    "word-counter": "word-counter.html",
    "kids-math-game": "kids-math.html",
    "unit-converter-tool": "unit-converter.html",
    "password-generator": "password-generator.html",
    "scientific-calc": "scientific-calculator.html",
    "bmi-calculator": "bmi-calculator.html",
    "loan-emi-calculator": "loan-calculator.html",
    "age-calculator": "age-calculator.html",
    "json-formatter": "json-formatter.html",
    "pomodoro-timer": "pomodoro-timer.html",
    "color-picker": "color-picker.html",
    "base64-converter": "base64-encoder.html",
    "stopwatch-timer": "stopwatch.html",
    "currency-converter": "currency-converter.html",
    "markdown-previewer": "markdown-editor.html",
    "task-kanban": "task-kanban.html",
    "habit-tracker": "habit-tracker.html",
    "flashcard-maker": "flashcard-maker.html",
    "diff-checker": "diff-checker.html",
    "csv-to-json": "csv-to-json.html",
    "text-summarizer": "text-summarizer.html"
};

// Web Audio API Sound Synthesizer for Kids Piano & Quiz Sound Effects
function playBeep(freq = 440, type = 'sine', duration = 0.2) {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + duration);
        osc.stop(ctx.currentTime + duration);
    } catch(e) {}
}

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

        const targetPage = pageMapping[id];
        const pageLinkHtml = targetPage ? `
            <a href="${targetPage}" class="btn btn-secondary" style="flex: 1; justify-content: center; text-decoration: none;">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Dedicated Tool Page
            </a>
        ` : '';

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
            <div style="display: flex; gap: 0.8rem; flex-wrap: wrap;">
                <button class="btn btn-primary" style="flex: 1; justify-content: center;" onclick="launchToolInSandbox('${app.id}')">
                    <i class="fa-solid fa-bolt"></i> Launch Active Tool
                </button>
                ${pageLinkHtml}
            </div>
        `;
        modal.style.display = "flex";
    };

    window.launchToolInSandbox = function(id) {
        modal.style.display = "none";
        const sandbox = document.getElementById("featured-tools");
        if (sandbox) sandbox.scrollIntoView({ behavior: 'smooth' });
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

    // Tab Navigation for Sandbox Tools
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

    // --- REAL WORKING TOOL 1: IMAGE TO PDF CONVERTER ---
    const imgFileInput = document.getElementById("imgFileInput");
    const imagePreviewContainer = document.getElementById("imagePreviewContainer");
    const btnConvertImgToPdf = document.getElementById("btnConvertImgToPdf");
    const btnClearImages = document.getElementById("btnClearImages");
    const imgPdfOutput = document.getElementById("imgPdfOutput");
    let loadedImageFiles = [];

    if (imgFileInput) {
        imgFileInput.addEventListener("change", (e) => {
            const files = Array.from(e.target.files);
            files.forEach(file => { if (file.type.startsWith("image/")) loadedImageFiles.push(file); });
            renderImagePreviews();
        });
    }

    function renderImagePreviews() {
        if (!imagePreviewContainer) return;
        imagePreviewContainer.innerHTML = "";
        if (loadedImageFiles.length === 0) {
            imagePreviewContainer.innerHTML = `<span style="color: var(--text-muted); font-size: 0.85rem;">No files uploaded. Convert will generate a sample document!</span>`;
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
            const { jsPDF } = window.jspdf || {};
            if (!jsPDF) {
                imgPdfOutput.innerHTML = `<span style="color: var(--danger);">jsPDF engine loading... Please retry.</span>`;
                return;
            }

            const doc = new jsPDF();
            if (loadedImageFiles.length === 0) {
                doc.setFontSize(22);
                doc.text("VICTORS PDF Document Sample", 20, 30);
                doc.setFontSize(12);
                doc.text("This PDF document was generated instantly by VICTORS.", 20, 45);
                doc.text("Features: 100+ Real Tools, PDF Editor, GPA Calculator, QR Code Maker.", 20, 55);
                doc.save("victors_sample_document.pdf");
                imgPdfOutput.innerHTML = `<div style="color: var(--success); font-weight: 700;"><i class="fa-solid fa-circle-check"></i> Sample PDF generated and downloaded as 'victors_sample_document.pdf'!</div>`;
                playBeep(523, 'sine', 0.15);
                return;
            }

            imgPdfOutput.innerHTML = `<div style="color: var(--secondary-color);"><i class="fa-solid fa-spinner fa-spin"></i> Converting ${loadedImageFiles.length} image(s)...</div>`;
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
                            imgPdfOutput.innerHTML = `<div style="color: var(--success); font-weight: 700;"><i class="fa-solid fa-circle-check"></i> Converted and downloaded 'victors_converted_images.pdf'!</div>`;
                            playBeep(659, 'sine', 0.2);
                        }
                    };
                };
                reader.readAsDataURL(file);
            });
        });
    }

    // --- REAL WORKING TOOL 2: PDF & TEXT EDITOR ---
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

    if (editorTextArea) editorTextArea.addEventListener("input", updateEditorStats);

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

    if (btnUppercase) btnUppercase.addEventListener("click", () => { editorTextArea.value = editorTextArea.value.toUpperCase(); updateEditorStats(); });
    if (btnLowercase) btnLowercase.addEventListener("click", () => { editorTextArea.value = editorTextArea.value.toLowerCase(); updateEditorStats(); });
    if (btnRemoveDuplicates) {
        btnRemoveDuplicates.addEventListener("click", () => {
            const lines = editorTextArea.value.split("\n");
            const unique = Array.from(new Set(lines.map(l => l.trim()))).filter(l => l.length > 0);
            editorTextArea.value = unique.join("\n");
            updateEditorStats();
        });
    }

    if (btnDownloadText) {
        btnDownloadText.addEventListener("click", () => {
            const content = editorTextArea ? editorTextArea.value : "";
            if (!content.trim()) return alert("Editor is empty!");
            const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "victors_edited_document.txt";
            link.click();
        });
    }

    // --- REAL WORKING TOOL 3: STUDENT GRADE & GPA ---
    const btnCalcGrade = document.getElementById("btnCalcGrade");
    const marksInput = document.getElementById("marksInput");
    const gradeResult = document.getElementById("gradeResult");

    if (btnCalcGrade) {
        btnCalcGrade.addEventListener("click", () => {
            const raw = marksInput.value.trim();
            if (!raw) { gradeResult.innerHTML = `<span style="color: var(--danger);">Enter comma separated marks.</span>`; return; }
            const numbers = raw.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
            if (numbers.length === 0) { gradeResult.innerHTML = `<span style="color: var(--danger);">No valid numerical marks found.</span>`; return; }

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
            playBeep(587, 'sine', 0.15);
        });
    }

    // --- REAL WORKING TOOL 4: KIDS MATH QUIZ ---
    const quizQuestion = document.getElementById("quizQuestion");
    const quizAnswer = document.getElementById("quizAnswer");
    const btnCheckQuiz = document.getElementById("btnCheckQuiz");
    const quizFeedback = document.getElementById("quizFeedback");
    let currentSolution = 15;

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
            if (isNaN(ans)) { quizFeedback.innerHTML = `<span style="color: var(--danger);">Please enter your answer.</span>`; return; }

            if (ans === currentSolution) {
                quizFeedback.innerHTML = `<span style="color: var(--success); font-weight: 700;"><i class="fa-solid fa-trophy"></i> Great job! Correct Answer!</span>`;
                playBeep(880, 'triangle', 0.2);
                setTimeout(generateQuiz, 1500);
            } else {
                quizFeedback.innerHTML = `<span style="color: var(--danger);"><i class="fa-solid fa-xmark"></i> Not ${ans}. Try again!</span>`;
                playBeep(220, 'sawtooth', 0.25);
            }
        });
    }

    // --- REAL WORKING TOOL 5: MOBILE QR MAKER ---
    const qrInput = document.getElementById("qrInput");
    const btnGenerateQR = document.getElementById("btnGenerateQR");
    const qrDisplay = document.getElementById("qrDisplay");

    if (btnGenerateQR) {
        btnGenerateQR.addEventListener("click", () => {
            const text = qrInput.value.trim();
            if (!text) return;
            const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(text)}`;
            qrDisplay.innerHTML = `
                <div style="text-align: center;">
                    <img src="${qrUrl}" alt="Generated QR" style="border-radius: 8px; margin-bottom: 0.5rem; border: 4px solid white;">
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Scan QR Code with mobile phone camera.</p>
                </div>
            `;
            playBeep(440, 'sine', 0.1);
        });
    }

    // --- REAL WORKING TOOL 6: UNIT CONVERTER ---
    const unitValue = document.getElementById("unitValue");
    const unitType = document.getElementById("unitType");
    const btnConvertUnit = document.getElementById("btnConvertUnit");
    const unitResult = document.getElementById("unitResult");

    if (btnConvertUnit) {
        btnConvertUnit.addEventListener("click", () => {
            const val = parseFloat(unitValue.value);
            const type = unitType.value;
            if (isNaN(val)) return;

            let resText = "";
            if (type === "km-miles") resText = `${val} km = ${(val * 0.621371).toFixed(2)} miles`;
            else if (type === "miles-km") resText = `${val} miles = ${(val / 0.621371).toFixed(2)} km`;
            else if (type === "kg-lbs") resText = `${val} kg = ${(val * 2.20462).toFixed(2)} lbs`;
            else if (type === "c-f") resText = `${val}°C = ${((val * 9/5) + 32).toFixed(2)}°F`;

            unitResult.innerHTML = `<strong>Result:</strong> ${resText}`;
            playBeep(523, 'sine', 0.1);
        });
    }

    // --- REAL WORKING TOOL 7: STRONG PASSWORD GENERATOR ---
    const passLength = document.getElementById("passLength");
    const btnGeneratePass = document.getElementById("btnGeneratePass");
    const passResult = document.getElementById("passResult");

    if (btnGeneratePass) {
        btnGeneratePass.addEventListener("click", () => {
            const len = Math.max(6, Math.min(64, parseInt(passLength.value) || 16));
            const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
            let pwd = "";
            for (let i = 0; i < len; i++) pwd += charset.charAt(Math.floor(Math.random() * charset.length));
            passResult.textContent = pwd;
            playBeep(698, 'sine', 0.1);
        });
    }

    renderApps();
});
