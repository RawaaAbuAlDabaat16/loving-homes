'use strict';

document.addEventListener('DOMContentLoaded', function() {
    console.log('LOVING HOMES - الموقع جاهز');
    setActiveLink();
    initForm();
    initMobileMenu();
});

// تفعيل الرابط النشط
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// قائمة الهاتف المحمول
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav'); // استخدم querySelector بدلاً من getElementById
    
    // التأكد من وجود العناصر
    if (!menuToggle || !nav) {
        console.log('❌ عناصر القائمة غير موجودة');
        console.log('menuToggle:', menuToggle);
        console.log('nav:', nav);
        return;
    }
    
    console.log('✅ عناصر القائمة موجودة');
    
    // عند النقر على زر القائمة
    menuToggle.addEventListener('click', function() {
        console.log('🖱️ تم النقر على زر القائمة');
        
        // تبديل ظهور القائمة
        nav.classList.toggle('active');
        
        // تغيير شكل الزر (☰ ➔ ✕)
        const icon = this.querySelector('i');
        if (icon) {
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                console.log('🍔 فتح القائمة');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                console.log('🍔 إغلاق القائمة');
            }
        }
    });
    
    // إغلاق القائمة عند النقر على أي رابط
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// نموذج الاتصال
function initForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const phone = document.getElementById('phone')?.value.trim();
        const message = document.getElementById('message')?.value.trim();

        if (!name || name.length < 3) {
            alert('الاسم يجب أن يكون 3 أحرف على الأقل');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            alert('البريد الإلكتروني غير صحيح');
            return;
        }

        const phoneRegex = /^\+852[0-9]{8}$/;
        if (!phone || !phoneRegex.test(phone.replace(/\s/g, ''))) {
            alert('رقم الهاتف يجب أن يبدأ بـ +852');
            return;
        }

        if (!message || message.length < 10) {
            alert('الرسالة قصيرة جداً');
            return;
        }

        alert('تم الإرسال بنجاح!');
        form.reset();
    });
}