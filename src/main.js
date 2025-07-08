const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

// Create an array to store leads
let myLeads = [];

// Add an event listener to the button so when the button is clicked,
// the value from the input field is added to the array and the list is re-rendered
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = ""; // Clear the input field after adding the lead
  renderLeads();
});

//
function renderLeads() {
  // Create a string to hold the list items
  let listItems = "";

  // Loop through the myLeads array and create a list item for each lead
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
        <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
      </li>`;
  }

  // Add the list items to the ul element
  ulEl.innerHTML = listItems;
}
