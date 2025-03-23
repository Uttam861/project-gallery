function displayGreeting() {
    const inputField = document.getElementById("username");
    const name = inputField.value.trim();
  
    if (name) {
      alert(`Welcome to JavaScript, ${name}!`);
      inputField.value = "";
    } else {
      alert("Please enter your name before proceeding.");
    }
  }
  
  document.getElementById("username").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      displayGreeting();
    }
  });