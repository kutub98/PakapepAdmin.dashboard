// //  modal
// const modal = document.getElementById("myModal");

// // modal button
// const btn = document.getElementById("myBtn");

// const span = document.getElementsByClassName("close")[0];

// btn.onclick = function () {
//   modal.style.display = "block";
// };

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

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
  const password = "@adMinPa1]";
  const userConfirmPassword = password;
  if (userName.value === username && userPassword.value === password && ConfirmPassword.value === userConfirmPassword) {
    // myBtn.style.display = "none";
    // loginPage.style.display = "none";
    // dashboard.style.display = "block";
    window.location.href = "adminPannel.html";
  } else {
    return alert("Sorry your password is wrong");
  }
});
const welcomeMessage = document.getElementById("welcomeMessage");
const welcome = document.getElementById("welcomeBtn");
welcome.addEventListener("click", () => {
  const welcomeInput = document.getElementById("welcomeInput").value;
  welcomeMessage.innerText = welcomeInput;

  console.log(welcomeMessage.innerText);
  // return welcomeMessage.innerText= " "
});

// Disable right-click
document.addEventListener("contextmenu", (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, "I") ||
    ctrlShiftKey(e, "J") ||
    ctrlShiftKey(e, "C") ||
    (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
  )
    return false;
};
