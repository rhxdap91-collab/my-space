// script.js
document.addEventListener("DOMContentLoaded", async () => {
  // لو الشريط غير موجود أضفه من الملف
  if (!document.querySelector(".navbar")) {
    const html = await fetch("navbar.html").then(r => r.text());
    document.body.insertAdjacentHTML("afterbegin", html);
  }

  // بعد إضافته، فعّل الروابط
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      // يسمح بالانتقال الطبيعي بين الصفحات
      window.location.href = link.getAttribute("href");
    });
  });
});