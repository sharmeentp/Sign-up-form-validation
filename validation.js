document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.needs-validation');

  form.addEventListener('submit', function (event) {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Check password match
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity('Passwords do not match');
    } else {
      confirmPassword.setCustomValidity('');
    }

    // Prevent submission if invalid
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');
  }, false);
});
