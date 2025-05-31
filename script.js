document.getElementById('login-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = {
    firstName: document.getElementById('firstName').value.trim(),
    lastName: document.getElementById('lastName').value.trim(),
    fatherName: document.getElementById('fatherName').value.trim(),
    caseNumber: document.getElementById('caseNumber').value.trim(),
    idNumber: document.getElementById('idNumber').value.trim()
  };

  const res = await fetch('data.json');
  const users = await res.json();

  const matchedUser = users.find(user =>
    user.firstName === formData.firstName &&
    user.lastName === formData.lastName &&
    user.fatherName === formData.fatherName &&
    user.caseNumber === formData.caseNumber &&
    user.idNumber === formData.idNumber
  );

  if (matchedUser) {
    localStorage.setItem('userLinks', JSON.stringify(matchedUser.links));
    window.location.href = 'dashboard.html';
  } else {
    alert("اطلاعات شما در سیستم پیدا نشد.");
  }
});