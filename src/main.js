const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

let myLeads = []; // Create an array to store leads

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")); // Retrieve leads from local storage and parse them into an array

// Check if there are leads stored in local storage
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage; // If there are leads, assign them to myLeads
  renderLeads(); // Render the leads if there are any in local storage
}

// Add click event to input button so when it's clicked, the value from the input is added to the array and the list is re-rendered
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value); // Add the value from the input field to the myLeads array
  inputEl.value = ""; // Clear the input field after adding the lead
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); // Save the leads to local storage
  renderLeads();

  console.log(localStorage.getItem("myLeads"));
});

// Add dblclick event to delete button so when it's clicked, the leads are cleared from local storage and the list is re-rendered
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear(); // Clear the leads from local storage
  myLeads = []; // Reset the myLeads to an empty array
  renderLeads();
});

// Render the leads in the ul element
function renderLeads() {
  let listItems = ""; // Create a string to hold the list items

  // Loop through the myLeads array and create a list item for each lead
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
        <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
      </li>`;
  }

  ulEl.innerHTML = listItems; // Add the list items to the ul element
}
