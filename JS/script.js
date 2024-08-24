// تفعيل الدارك مود
const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// تغيير اللغة
const toggleLanguageBtn = document.getElementById('toggle-language');
if (toggleLanguageBtn) {
    toggleLanguageBtn.addEventListener('click', () => {
        // التبديل بين الصفحات بناءً على اللغة الحالية
        if (document.body.classList.contains('rtl')) {
            window.location.href = 'index-en.html'; // توجيه إلى النسخة الإنجليزية
        } else {
            window.location.href = 'index-ar.html'; // توجيه إلى النسخة العربية
        }
    });
}

