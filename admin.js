const form = document.getElementById('cvForm');
const nameInput = document.getElementById('nameInput');
const skillsInput = document.getElementById('skillsInput');

// تحميل البيانات عند فتح الصفحة
window.addEventListener('DOMContentLoaded', () => {
    nameInput.value = localStorage.getItem('cvName') || '';
    skillsInput.value = localStorage.getItem('cvSkills') || '';
});

// حفظ البيانات
form.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('cvName', nameInput.value);
    localStorage.setItem('cvSkills', skillsInput.value);
    alert('تم حفظ التعديلات!');
});
