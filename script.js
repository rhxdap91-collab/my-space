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

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".contact-form form");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // يمنع إعادة تحميل الصفحة

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    fetch(action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert("تم إرسال الرسالة بنجاح!");
        form.reset(); // يمسح الحقول بعد الإرسال
      } else {
        response.json().then(data => {
          alert("فشل الإرسال! حاول مرة أخرى.");
        });
      }
    }).catch(error => {
      alert("حدث خطأ! حاول مرة أخرى.");
      console.error(error);
    });
  });
});