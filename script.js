// بررسی اطلاعات کاربر هنگام ورود
function checkUser(data) {
  const form = document.getElementById('login-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const fatherName = document.getElementById('father-name').value.trim();
    const caseNumber = document.getElementById('case-number').value.trim();
    const idNumber = document.getElementById('id-number').value.trim();

    const user = data.find(user =>
      user.firstName === firstName &&
      user.lastName === lastName &&
      user.fatherName === fatherName &&
      user.caseNumber === caseNumber &&
      user.idNumber === idNumber
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      showDashboard(user);
    } else {
      alert('User not found!');
    }
  });
}

// تابع نمایش داشبورد (باید در فایل تعریف شده باشد)
function showDashboard(user) {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';

  // تنظیم لینک‌ها مطابق با کاربر
  document.getElementById('result-btn').onclick = () => {
    window.location.href = user.links.result;
  };
  document.getElementById('passport-btn').onclick = () => {
    window.location.href = user.links.passport;
  };
  document.getElementById('coletter-btn').disabled = true;
  document.getElementById('meeting-btn').disabled = true;
}

// تابع خروج از سیستم
function logout() {
  localStorage.clear();
  window.location.reload();
}
