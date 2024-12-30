document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");
  
    // Basic validation
    if (username === "" || password === "") {
      errorMessage.textContent = "All fields are required.";
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
      alert("Login successful!"); // Replace this with actual login logic
    }
  });
  