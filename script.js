// 1. Get DOM elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// 2. Function to add a new task
function addTask() {
    // Basic Input Validation
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create the new list item
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Create the close (X) span element
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode character for 'times' (x)
        li.appendChild(span);
    }
    
    // Clear the input box after adding the task
    inputBox.value = "";
    saveData(); // Save the updated list to Local Storage
}

// 3. Event Listener for marking complete or deleting
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        // Toggle the 'checked' class to mark as complete/incomplete
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Remove the parent <li> element (the task)
        e.target.parentElement.remove();
        saveData();
    }
}, false); // 'false' is default, can be omitted

// 4. Function to save data to the browser's Local Storage
function saveData() {
    localStorage.setItem("data", listContainer.innerText);
}

// 5. Function to show data when the app loads
function showTask() {
    // Retrieve data from Local Storage and set it as the list content
    listContainer.innerHTML = localStorage.getItem("data");
}

// Call the function on page load
showTask();