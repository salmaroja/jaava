
function validateForm() {
  
    document.querySelectorAll('.text-danger').forEach(function(el) {
      el.innerHTML = '';
    });
  
    let isValid = true;
  
  
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (nameInput.value.trim() === '') {
      nameError.innerHTML = 'Name is required';
      isValid = false;
    } else if (nameInput.value.trim().length > 20) {
      nameError.innerHTML = 'Name should not exceed 20 characters';
      isValid = false;
    }
  
  
    const addressInput = document.getElementById('address');
    const addressError = document.getElementById('addressError');
    if (addressInput.value.trim() === '') {
      addressError.innerHTML = 'Address is required';
      isValid = false;
    }
  
    const zipCode = document.getElementById('zipCode');
    const zipError = document.getElementById('zipError');
    if (zipCode.value.trim() === '') {
      zipError.innerHTML = 'Zip code is required';
      isValid = false;
    }
  
    const preferencesError = document.getElementById('preferencesError');
    const color1 = document.getElementById('color1').checked;
    const color2 = document.getElementById('color2').checked;
    const color3 = document.getElementById('color3').checked;
    if (!color1 && !color2 && !color3) {
      preferencesError.innerHTML = 'Select at least two colors';
      isValid = false;
    }
  
  
    const passwordInput = document.getElementById('password');
    const verifyPasswordInput = document.getElementById('verifyPassword');
    const passwordError = document.getElementById('passwordError');
    const verifyPasswordError = document.getElementById('verifyPasswordError');
    if (passwordInput.value === '') {
      passwordError.innerHTML = 'Password is required';
      isValid = false;
    }
  
    if (verifyPasswordInput.value === '') {
      verifyPasswordError.innerHTML = 'Verify Password is required';
      isValid = false;
    }
  
    if (passwordInput.value !== verifyPasswordInput.value) {
      verifyPasswordError.innerHTML = 'Passwords do not match';
      isValid = false;
    }
  
  
    if (isValid) {
      document.getElementById('myForm').submit();
    }
  }
  