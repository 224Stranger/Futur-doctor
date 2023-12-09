function changePlaceholderColor(inputField) {
    inputField.setAttribute('data-placeholder', inputField.getAttribute('placeholder'));
    inputField.setAttribute('placeholder', ''); // Clear the placeholder temporarily
  
    inputField.style.color = '#ffffff'; // Change the placeholder color
  
    // Listen for the focusout event to revert the placeholder back if the input field is empty
    inputField.addEventListener('focusout', function () {
      if (inputField.value === '') {
        inputField.setAttribute('placeholder', inputField.getAttribute('data-placeholder'));
        inputField.style.color = ''; // Reset to the default color
      }
    });
//   }
  
  