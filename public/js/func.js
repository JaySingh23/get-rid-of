var today = new Date();
var hour = today.getHours();
var text = document.getElementById("text");

if (hour < 12) {
  console.log("Good morning!");
  text.textContent = "Good Morning! 👋";
} else if (hour < 18) {
  console.log("Good afternoon!");
  text.textContent = "Good Afternoon! 👋";
} else {
  console.log("Good evening!");
  text.textContent = "Good Evening! 👋";
}

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//function to create a calendar
function createCalendar() {
    // Create the calendar container
    var calendar = document.createElement("div");
    calendar.setAttribute("id", "calendar");
  
    // Create the table rows and cells
    for (var i = 0; i < 5; i++) {
      var row = document.createElement("div");
      row.setAttribute("class", "row");
      for (var j = 0; j < 7; j++) {
        var cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        row.appendChild(cell);
      }
      calendar.appendChild(row);
    }
  
    // Add the calendar to the page
    document.body.appendChild(calendar);
  }
  
  function updateCalendar() {
    // Get the current date
    var today = new Date();
    var currentMonth = today.getMonth();
    var currentYear = today.getFullYear();
  
    // Get the first day of the month
    var firstDay = new Date(currentYear, currentMonth, 1);
    var firstDayOfWeek = firstDay.getDay();
  
    // Get the number of days in the month
    var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    // Get a reference to the calendar container
    var calendar = document.getElementById("calendar");
  
    // Get the table cells
    var cells = calendar.getElementsByClassName("cell");
    var c = 1;
  
    // Set the values of the cells
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
  
      // Reset the cell
      cell.innerText = "";
      cell.classList.remove("today");
      cell.classList.remove("streak");
  
      // Calculate the day number
      var dayNumber = i - firstDayOfWeek + 1;
  
      // If the day number is within the range of the month, set the value of the cell
      if (dayNumber > 0 && dayNumber <= daysInMonth) {
        cell.innerText = dayNumber;

        
  
        // If the day is today, add the "today" class to the cell
        if (dayNumber === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
          cell.classList.add("streak");
        }
      }
    }
  }
  
  var successCount = 0, failureCount = 0;
  
  document.getElementById("smoke").addEventListener("click", () => {
    successCount++;
    createCalendar();
    updateCalendar();
  });

    

  document.querySelector("span").addEventListener("click", () => {
    console.log("failureCount");
  } )