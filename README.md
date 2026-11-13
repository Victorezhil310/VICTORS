# VICTORS - Universal Multi-Utility, Kids, Education & PDF Suite

![VICTORS Banner](https://img.shields.io/badge/VICTORS-v1.0.0-indigo?style=for-the-badge&logo=android)
![Platforms](https://img.shields.io/badge/Platforms-Phone%20%7C%20Tablet%20%7C%20Desktop%20%7C%20Android%20XR-cyan?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**VICTORS** is a next-generation universal digital store platform and Android application suite designed for students, children, adult professionals, and mobile power users. It combines PDF tools, grade calculators, kids math challenges, mobile QR utilities, and task boards into a unified responsive interface.

---

## 🌟 Key Features Across Devices

- 📱 **Mobile Phones & Tablets:** Touch-first interface, swipe navigation, offline local asset fallback.
- 💻 **Desktop & Chromebooks:** Responsive widescreen layout with keyboard shortcuts and drag-and-drop file support.
- 🥽 **Android XR (Spatial Computing):** Multi-window resizable spatial launcher ready for immersive headsets.
- 📄 **PDF & Document Tools:** In-browser text extractor, word counter, and document analyzer with 100% local privacy.
- 🎓 **Student & Education:** GPA, marks percentage calculator, and smart note system.
- 👶 **Kids Corner:** Safe math quiz game with zero ads, voice-ready visual cues, and instant feedback.
- 🔒 **Google Play Store Compliant:** Complete `/privacy`, `/terms`, `/ratings`, and `sitemap.xml`.

---

## 📂 Project Structure

```text
VICTORS/
├── index.html            # Main Web Portal & Live Tools Sandbox
├── styles.css            # Dark/Light Mode Responsive Styling
├── script.js             # App Store Engine & Tool Logic
├── privacy.html          # Google Play Compliant Privacy Policy (/privacy)
├── terms.html            # Terms of Service (/terms)
├── ratings.html          # Community Reviews & Rating System (/ratings)
├── sitemap.xml           # Search Engine Optimized Sitemap
├── robots.txt            # Crawler Configuration
├── build.gradle.kts      # Android Root Gradle Build
├── settings.gradle.kts   # Project Module Settings
├── gradle.properties     # Android Build Configuration
└── app/                  # Android Native App Module
    ├── build.gradle.kts
    └── src/
        └── main/
            ├── AndroidManifest.xml (Phone, Tablet, Desktop, XR declared)
            ├── java/com/victors/app/MainActivity.kt
            ├── assets/   # Offline Web Engine Fallback
            └── res/      # Android App Themes, Values & Icons
```

---

## 🚀 Step 1: Push Code to GitHub Repository

To push all changes to your official GitHub repository (`https://github.com/Victorezhil310/VICTORS.git`), execute the following terminal commands inside your project root directory:

```bash
# Initialize Git repository (if not initialized)
git init

# Add the remote repository
git remote add origin https://github.com/Victorezhil310/VICTORS.git

# Stage all files
git add .

# Commit changes
git commit -m "Initial Release: VICTORS Multi-Utility Suite with Web Engine & Android Native Module"

# Rename branch to main & push
git branch -M main
git push -u origin main --force
```

---

## 📦 Step 2: Build APK and AAB Files for Google Play Console

### Option A: Using Android Studio GUI
1. Open **Android Studio**.
2. Open the project folder `C:/Users/TAJ PC/Downloads/VICTORS`.
3. Wait for Gradle Sync to complete.
4. **Generate Release APK:**
   - Click `Build` -> `Build Bundle(s) / APK(s)` -> `Build APK(s)`.
   - The file will be saved in `app/build/outputs/apk/debug/app-debug.apk` or `app/build/outputs/apk/release/app-release.apk`.
5. **Generate Signed Android App Bundle (.aab) for Play Store:**
   - Click `Build` -> `Generate Signed Bundle / APK...`.
   - Select **Android App Bundle (.aab)** and click `Next`.
   - Create or select your keystore file (`.jks`).
   - Select `release` build variant and click `Create`.
   - Your `.aab` file will be created in `app/release/app-release.aab`.

### Option B: Using Gradle Command Line
From the terminal, run:

```powershell
# Build Universal APK File
.\gradlew assembleRelease

# Build Android App Bundle (.aab) File for Google Play Console
.\gradlew bundleRelease
```

The output files will be located at:
- **APK File:** `app/build/outputs/apk/release/app-release.apk`
- **AAB File:** `app/build/outputs/bundle/release/app-release.aab`

---

## 🎨 Step 3: Google Play Store Assets Guide (Logo & 4 Screenshots)

When creating your store listing in Google Play Console, use the following blueprints:

### 1. App Logo Specifications
- **Dimensions:** 512px × 512px (PNG, up to 1024KB).
- **Design Concept:** Gradient Rocket icon (`#4F46E5` indigo to `#06B6D4` cyan) on dark blue background (`#0F172A`) with rounded corners.

### 2. Required 4 Screenshots Blueprint
1. **Screenshot 1 - Main Store & Multi-Device Hub:**
   - *Title:* "All-In-One Digital Tools Suite"
   - *Visual:* Dashboard showing categories (PDF, Kids, Education, Mobile Utilities) on Phone & Tablet.
2. **Screenshot 2 - Live PDF Studio & Extractor:**
   - *Title:* "Fast In-Browser & Local PDF Processing"
   - *Visual:* PDF text extractor analyzing document with word counter.
3. **Screenshot 3 - Student & Educational Calculators:**
   - *Title:* "GPA & Grade Percentage Tracker"
   - *Visual:* Student calculating GPA scores with letter grade outputs.
4. **Screenshot 4 - Kids Corner & Interactive Games:**
   - *Title:* "Safe Gamified Learning for Kids"
   - *Visual:* Kids Math Challenge screen with score counters.

---

## 🌐 Step 4: Web Deployment (GitHub Pages)

Enable GitHub Pages to host your live web platform:
1. Go to `https://github.com/Victorezhil310/VICTORS/settings/pages`.
2. Under **Source**, select `main` branch and `/ (root)` folder.
3. Click **Save**.
4. Your website will be live at: **`https://victorezhil310.github.io/VICTORS/`**.

---

## 🛡️ License
Copyright © 2025 VICTORS. All rights reserved.
