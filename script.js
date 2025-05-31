fetch('data.json')
  .then(res => res.json())
  .then(users => {
    const loginForm = document.getElementById("loginForm");
    const dashboard = document.getElementById("dashboard");
    const errorEl = document.getElementById("error");
    const loginSection = document.getElementById("login-section");

    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const fatherName = document.getElementById("fatherName").value.trim();
      const caseNumber = document.getElementById("caseNumber").value.trim();
      const idNumber = document.getElementById("idNumber").value.trim();

      const user = users.find(u =>
        u.firstName === firstName &&
        u.lastName === lastName &&
        u.fatherName === fatherName &&
        u.caseNumber === caseNumber &&
        u.idNumber === idNumber
      );

      if (user) {
        loginSection.style.display = "none";
        dashboard.style.display = "block";

        // Assign button links
        document.getElementById("btnResult").onclick = () => {
          window.location.href = user.links.result;
        };
        document.getElementById("btnPassport").onclick = () => {
          window.location.href = user.links.passport;
        };
        document.getElementById("btnCO").onclick = () => {
          window.location.href = user.links.coLetter;
        };
        document.getElementById("btnMeeting").onclick = () => {
          window.location.href = user.links.meeting;
        };
      } else {
        errorEl.textContent = "No matching user found. Please check your information.";
      }
    });
  });
