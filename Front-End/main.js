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


const data = [
  { name: "MCK", link: "MCK/MCK.html" },
  { name: "MCK -Chìm Sâu", link: "MCK/MCK.html" },
  { name: "MCK -Tối Nay Ta Đi Đâu Nhờ", link: "MCK/MCK.html" },
  { name: "MCK -Chỉ Một Đêm Nữa Thôi", link: "MCK/MCK.html" },
  { name: "MCK -Thôi Em Đừng Đi", link: "MCK/MCK.html" },
  { name: "MCK -50/50", link: "MCK/MCK.html" },
  { name: "MCK -Show Me Love", link: "MCK/MCK.html" },
  { name: "MCK -Tại Vì Sao", link: "MCK/MCK.html" },
  { name: "MCK -Anh Đã Ổn Hơn", link: "MCK/MCK.html" },
  { name: "MCK -Badtrip", link: "MCK/MCK.html" },
  { name: "MCK -99", link: "MCK/MCK.html" },
  { name: "MCK - Chìm Sâu", page: "MCK/MCK.html" },
  { name: "MCK - Va Vào Giai Điệu Này", page: "MCK/MCK.html" },
  { name: "Tlinh - Tình Yêu Có Nghĩa Là Gì?", page: "Tlinh/tlinh.html" },
  { name: "Tlinh - Người Đẹp Ngủ", page: "Tlinh/tlinh.html" },
  { name: "Wxrdie - Lặng Thầm", page: "WXRDIE/WXRDIE.html" },
  { name: "Wxrdie - Say Goodbye", page: "WXRDIE/WXRDIE.html" },
  { name: "Obito - Ai Biết", page: "OBITOO/obito.html" },
  { name: "Obito - Đêm Mưa", page: "OBITOO/obito.html" },
  { name: "Obito - Đánh Đổi", page: "OBITOO/obito.html" },
  { name: "Obito", link: "OBITOO/obito.html" },
  { name: "Wxrdie", link: "WXRDIE/WXRDIE.html" },
  { name: "Tlinh", link: "Tlinh/tlinh.html" },
];

const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();
  results.innerHTML = "";

  if (!query) return;

  const filtered = data.filter(item => item.name.toLowerCase().includes(query));

  filtered.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    li.onclick = () => (window.location.href = item.link);
    results.appendChild(li);
  });
});
