function toggleMode() {
  const body = document.body;
  const button = document.querySelector(".button_mode");

  body.classList.toggle("dark-mode");

  // Đổi biểu tượng khi chuyển chế độ
  if (body.classList.contains("dark-mode")) {
    button.textContent = "☀️";
  } else {
    button.textContent = "🌙";
  }
}