function toggleMode() {
  const body = document.body;
  const button = document.querySelector(".button_mode");

  // Bật / Tắt class dark-mode
  body.classList.toggle("dark-mode");

  // Đổi icon của nút
  if (body.classList.contains("dark-mode")) {
    button.textContent = "☀️";
    button.title = "Chuyển sang Chế độ Sáng";
    // Lưu trạng thái vào localStorage
    localStorage.setItem("theme", "dark");
  } else {
    button.textContent = "🌙";
    button.title = "Chuyển sang Chế độ Tối";
    // Lưu lại là chế độ sáng
    localStorage.setItem("theme", "light");
  }
}


window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const button = document.querySelector(".button_mode");

  // Nếu từng lưu "dark" thì bật lại dark mode
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    button.textContent = "☀️";
    button.title = "Chuyển sang Chế độ Sáng";
  } else {
    button.textContent = "🌙";
    button.title = "Chuyển sang Chế độ Tối";
  }
});