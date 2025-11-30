function CreateUser() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const name = nameInput?.value?.trim();
  const email = emailInput?.value?.trim();
  const password = passwordInput?.value?.trim();

  // Show loading state
  const submitBtn = document.querySelector("button[onclick*='CreateUser']");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Creating...";
  }

  const url = "http://localhost:3000/users";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((response) => {
      if (response.status === 201 || response.status === 200) {
        return response.json();
      } else if (response.status === 400) {
        return response.json().then((data) => {
          throw new Error(data.errors?.[0]?.message || "Invalid input");
        });
      } else {
        throw new Error(`Server error: ${response.status}`);
      }
    })
    .then((data) => {
      console.log("Success:", data);
      showSuccess("User created successfully!");
      // Reset form
      nameInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";
    })
    .catch((error) => {
      console.error("Error:", error);
      showError(error.message || "Failed to create user");
    })
    .finally(() => {
      // Restore button state
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Create User";
      }
    });
}

function showError(message) {
  const errorDiv = document.getElementById("error-message");
  if (errorDiv) {
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
    errorDiv.style.color = "red";
  } else {
    alert(message);
  }
}

function showSuccess(message) {
  const successDiv = document.getElementById("success-message");
  if (successDiv) {
    successDiv.textContent = message;
    successDiv.style.display = "block";
    successDiv.style.color = "green";
    setTimeout(() => {
      successDiv.style.display = "none";
    }, 3000);
  } else {
    console.log("Success:", message);
  }
}
