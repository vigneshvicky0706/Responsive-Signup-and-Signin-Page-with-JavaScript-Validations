/* ================= LOADER ================= */

function showLoader() {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "block";
}

function hideLoader() {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
}
const video = document.getElementById("bgVideo");

if (video && video.tagName === "VIDEO") {

  const form = document.getElementById("formBox");
  const overlay = document.getElementById("overlay");

  video.addEventListener("ended", () => {
    overlay.classList.add("active");
    form.classList.add("show");
  });

}


/* ================= VIDEO POPUP ================= */

window.addEventListener("DOMContentLoaded", () => {

  const video = document.getElementById("bgVideo");
  const form = document.getElementById("formBox");
  const overlay = document.getElementById("overlay");

  if (video && form && overlay) {

    video.addEventListener("ended", () => {
      overlay.classList.add("active");
      form.classList.add("show");
    });

    setTimeout(() => {
      overlay.classList.add("active");
      form.classList.add("show");
    }, 5000);

  }

});


/* ================= SIGNUP ================= */

const signup = document.getElementById("signupForm");

if (signup) {

  signup.addEventListener("submit", function (e) {

    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirm = document.getElementById("confirm").value.trim();

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    showLoader();

    setTimeout(() => {

      localStorage.setItem("user", JSON.stringify({ email, password }));

      hideLoader();

      alert("Signup Successful!");

      window.location.href = "login.html";

    }, 1000);

  });

}


/* ================= LOGIN ================= */

function togglePassword(id) {
  let input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

const loader = document.getElementById("loader");

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}


/* LOGIN */

const signin = document.getElementById("signinForm");

if (signin) {

  signin.addEventListener("submit", function (e) {

    e.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    let stored = JSON.parse(localStorage.getItem("user"));

    showLoader();

    setTimeout(()=>{

      if (stored && email === stored.email && password === stored.password) {

        localStorage.setItem("loggedIn","true");

        window.location.href =
        "https://vigneshvicky0706.github.io/module-proj-1/";

      } else {
        alert("Invalid Credentials");
      }

      hideLoader();

    },1500);

  });

}
video.playbackRate = 2.0;
video.currentTime = 1;