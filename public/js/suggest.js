const submitForm = async (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input values from the form
  const suggestion = document.getElementById("suggestion").value;
  const description = document.getElementById("description").value;
  const name = document.getElementById("name").value;

  // Create a new FormData object and append the input values
  const formData = {
    suggestion: suggestion,
    description: description,
    username: name
  }

  console.log(formData);
  try {
    // Send a POST request with the form data to the backend endpoint
    const response = await fetch("/api/suggestions/whipple", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Handle the response from the backend
    const data = await response.json();
    console.log(data); 
    alert('Thank you!')
  } catch (error) {
    console.error(error);
  }
};

// Listen for the form submission event and call the submitForm function
document.querySelector("form").addEventListener("submit", submitForm);

const suggestionsButton = document.getElementById("toTask");

  suggestionsButton.addEventListener("click", () => {
    window.location.href = "/";
  });