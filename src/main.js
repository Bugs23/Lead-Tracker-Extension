const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn");

let myLeads = [];

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// Check if there are leads stored in local storage and assign them to myLeads
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

// Add click event to input button so when it's clicked,
// the value from the input is added to the array and the list is re-rendered
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);

  console.log(localStorage.getItem("myLeads"));
});

// Add dblclick event to delete button so when it's clicked,
// the leads are cleared from local storage and the list is re-rendered
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

// Render the array that's passed in the ul element
function render(leads) {
  let listItems = "";

  // Create a list item for each lead
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
        <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
      </li>`;
  }

  ulEl.innerHTML = listItems;
}
