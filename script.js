// تعريف الوظيفة التي تقوم بتبديل ظهور القائمة الجانبية
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active'); // إضافة/إزالة الفئة "active"
}

// التأكد من أن القائمة تغلق إذا ضغط المستخدم خارجها
document.addEventListener('click', (event) => {
    const sidebar = document.querySelector('.sidebar');
    const openMenu = document.querySelector('.open-menu');
    const clickedInsideSidebar = sidebar.contains(event.target);
    const clickedOpenMenu = openMenu.contains(event.target);

    // إغلاق القائمة إذا كانت مفتوحة والنقر حدث خارجها
    if (!clickedInsideSidebar && !clickedOpenMenu && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

// إضافة تأثير التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        const targetSection = document.querySelector(targetID);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});