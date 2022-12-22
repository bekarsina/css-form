let emailInput = document.querySelector(".email-input");
let submitBTN = document.querySelector(".submit-btn");
let userName = document.querySelector(".user-name");
let error = document.querySelector(".error");

let en = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

let isEn = null;

userName.addEventListener("keypress", (event) => {
  let eventKey = event.key;
  isEn = en.includes(eventKey)
  if (isEn) {
    error.innerHTML = "! نام و نام خانوادگی خود را به فارسی وارد کنید";
    error.classList.remove("invisible");
  } else {
    error.classList.add("invisible");
  }
});

submitBTN.addEventListener("click", () => {
  if (emailInput.value.length == 11 && !isEn) {
    error.innerHTML = "";
    submitBTN.innerHTML = "!درخواست شما با موفقیت ثبت شد";
    submitBTN.classList.add("bg-[#158C13]");
  }
  if (emailInput.value.length < 11) {
    error.classList.remove("invisible");
  }
  if (userName.value.length == 0) {
    error.innerHTML = "! نام و نام خانوادگی خود را وارد کنید";
  }
});

