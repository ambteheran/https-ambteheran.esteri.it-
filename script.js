// فرضاً تابع بررسی کاربر
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

// تابع لاگ اوت که اضافه کردی
function logout() {
  localStorage.clear();
  window.location.reload();
}
