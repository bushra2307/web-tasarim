document.addEventListener('DOMContentLoaded', function() {
    // Select the submit button
    const submitButton = document.querySelector('.submit-button');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');
  
    submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Clear previous error messages
      clearErrors();
  
      // Check if the name field is empty
      if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required.');
      }
  
      // Check if the email field is empty or doesn't contain @
      if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required.');
      } else if (!emailInput.value.includes('@')) {
        showError(emailInput, 'Invalid email format.');
      }
  
      // Check if the password field is empty
      if (passwordInput.value.trim() === '') {
        showError(passwordInput, 'Password is required.');
      }
  
      // Check if the confirm password field is empty or doesn't match the password
      if (confirmPasswordInput.value.trim() === '') {
        showError(confirmPasswordInput, 'Please confirm your password.');
      } else if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, 'Passwords do not match.');
      }
    });
  
    function showError(inputElement, errorMessage) {
      // Add the error class to the input element
      inputElement.classList.add('error');
  
      // Create the error message element
      const errorElement = document.createElement('p');
      errorElement.className = 'error-message';
      errorElement.textContent = errorMessage;
  
      // Insert the error message after the input element
      inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
    }
  
    function clearErrors() {
      // Remove the error class from all input elements
      const inputElements = document.querySelectorAll('.error');
      inputElements.forEach(function(inputElement) {
        inputElement.classList.remove('error');
      });
  
      // Remove all error message elements
      const errorElements = document.querySelectorAll('.error-message');
      errorElements.forEach(function(errorElement) {
        errorElement.parentNode.removeChild(errorElement);
      });
    }
  });
  