# 🚀 FocusFlow: Web Dev Capstone Project

Welcome to your Work Experience Capstone! This project is designed to test your foundational skills in **HTML5**, **CSS3**, and **Vanilla JavaScript**. By the end of this project, you will have a functional, persistent productivity dashboard to add to your portfolio.

---

## 🎯 The Mission

Build a "Personal Task Dashboard" that allows users to manage their daily goals, toggle between Light and Dark modes, and see a personalized greeting based on the time of day.

### ⏱️ Time Allocation

- **Total Duration:** 8–16 Hours
- **Breakdown:** \* 25% Structure (HTML)
  - 25% Design (CSS/Flexbox)
  - 50% Logic (JS/DOM Manipulation)

---

## 🛠️ Features to Implement

### 1. The "Greeting" Logic

- [ ] Use the JavaScript `Date()` object to get the current hour.
- [ ] Display "Good Morning" (0-11), "Good Afternoon" (12-17), or "Good Evening" (18-23).

### 2. Task Management (CRUD)

- [ ] **Create:** Input field that adds a new `<li>` to the list.
- [ ] **Read:** Display all active tasks clearly.
- [ ] **Delete:** A button on each task to remove it from the list.

### 3. The "Dark Mode" Toggle

- [ ] Implement CSS Variables (`:root`) for colors.
- [ ] Use a JavaScript Event Listener to toggle a `data-theme="dark"` attribute on the body.

### 4. External Data (API Integration)

- [ ] **Fetch Motivation:** Use the `fetch` API to retrieve a random quote on page load.
- [ ] **Async/Await:** Practice using `async/await` and handling potential network errors with `try/catch`.

### 5. 🚀 Stretch Goals (The "Level Up")

- [ ] **Persistence:** Use `localStorage` to save tasks so they remain after a page refresh.
- [ ] **Completion:** Click a task to toggle a "strike-through" style.
- [ ] **Validation:** Prevent adding empty tasks (show an alert or red border).

---

## 📁 File Structure

```text
.
├── index.html       # Structure & Semantic Tags
├── style.css        # Layout (Flexbox/Grid) & Themes
├── script.js        # Logic & Event Listeners
└── README.md        # Documentation (This file!)
```
