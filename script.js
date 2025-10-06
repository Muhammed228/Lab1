document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault(); // не відправляємо форму одразу

  let valid = true;

  // очищаємо попередні повідомлення
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Ім’я
  let name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Введіть ім’я.";
    valid = false;
  }

  // Email
  let email = document.getElementById("email").value.trim();
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Невірний формат email.";
    valid = false;
  }

  // Пароль
  let password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Пароль має містити мінімум 6 символів.";
    valid = false;
  }

  // Повтор пароля
  let confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent = "Паролі не співпадають.";
    valid = false;
  }

  // Якщо все добре
  if (valid) {
    alert("Форма успішно відправлена!");
    document.getElementById("registerForm").reset();
  }
});
