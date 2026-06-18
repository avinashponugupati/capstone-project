// 1. SELECT ELEMENTS
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const themeBtn = document.getElementById("theme-toggle");

// 2. THEME TOGGLE LOGIC
themeBtn.addEventListener("click", () => {
  // TASK: Check if the body has the 'dark' theme.
  // If it does, remove it. If it doesn't, add it.
  // Hint: document.body.setAttribute('data-theme', 'dark')
});

// 3. ADD TASK FUNCTION
function addTask() {
  const taskText = taskInput.value;

  if (taskText === "") return; // Don't add empty tasks

  // TASK: Create a new <li> element
  // TASK: Set the innerHTML to include the taskText and a "Delete" button
  // TASK: Append the <li> to the taskList

  taskInput.value = ""; // Clear input after adding
}

// 4. EVENT LISTENERS
addBtn.addEventListener("click", addTask);

// 5. BONUS: GREETING LOGIC
function setGreeting() {
  const hour = new Date().getHours();
  const greetingEl = document.getElementById("greeting");
  // TASK: If hour < 12 "Good Morning", if < 18 "Good Afternoon", else "Good Evening"
}

// 6. API CHALLENGE: FETCH DAILY MOTIVATION
async function fetchQuote() {
  try {
    // TASK: Use fetch() to get a random quote from 'https://dummyjson.com/quotes/random'
    // TASK: Convert the response to JSON
    // TASK: Select the #quote-text and #quote-author elements and update their innerText
  } catch (error) {
    console.error("Could not fetch quote", error);
    document.getElementById("quote-text").innerText =
      "Power through your day with focus!";
  }
}

setGreeting();
fetchQuote();
