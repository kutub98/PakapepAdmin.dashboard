

const loginHandle = document.getElementById("loginHandle");
loginHandle.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = document.getElementById("username");
  const userPassword = document.getElementById("password");
  const ConfirmPassword = document.getElementById("Confirmpassword");
  // const myBtn = document.getElementById("myBtn");
  // const loginPage = document.getElementById("loginPage");
  // const dashboard = document.getElementById("dashboard");

  const username = "admin";
  const password = "123";
  const userConfirmPassword = password;
  if (userName.value === username && userPassword.value === password) {
    // myBtn.style.display = "none";
    // loginPage.style.display = "none";
    // dashboard.style.display = "block";
    window.location.href = "adminPannel.html";
  } else {
    return alert("Sorry your password is wrong");
  }
});


