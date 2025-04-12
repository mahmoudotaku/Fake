
document.addEventListener('DOMContentLoaded', function() {
    // الاستماع لحدث النقر على زر تسجيل الدخول
    const loginForm = document.querySelector('.login-form form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        
        if(email && password) {
            alert('تم إرسال بيانات تسجيل الدخول. في التطبيق الحقيقي، سيتم التحقق من البيانات ومعالجتها على الخادم.');
        } else {
            alert('يرجى ملء جميع الحقول المطلوبة.');
        }
    });

    // الاستماع لحدث النقر على زر إنشاء حساب جديد
    const createAccountButton = document.querySelector('.create-account-button');
    createAccountButton.addEventListener('click', function() {
        alert('سيتم توجيهك إلى صفحة إنشاء حساب جديد في التطبيق الحقيقي.');
    });
});
