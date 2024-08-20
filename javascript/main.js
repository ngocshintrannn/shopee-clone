const registerBtn = document.querySelector('.js-register-btn');
const loginBtn = document.querySelector('.js-login-btn');
const showModal = document.querySelector('.js-modal');
const hideModals = document.querySelectorAll('.js-modal__body');
const modalRegister = document.getElementById('modal__register');
const modalLogin = document.getElementById('modal__login');
const switchLogin = document.querySelector('.js-switch-login');
const switchRegister = document.querySelector('.js-switch-register');
const notifyViews = document.querySelectorAll('.js-notify-item');
const searchBarInputInput = document.querySelector('.js-searchbar-input_input');
const searchBarPopover = document.querySelector('.js-searchbar-popover');
const searchBarInput = document.querySelector('.js-searchbar-input');

// Show modal register
registerBtn.onclick = function () {
  showModal.classList.add('modal--open');
  modalRegister.style.display = 'block';
  modalLogin.style.display = 'none';
}

// Show modal login
loginBtn.onclick = function () {
  showModal.classList.add('modal--open');
  modalRegister.style.display = 'none';
  modalLogin.style.display = 'block';
}

// Hide modal and stop propagation when click around
showModal.onclick = function () {
  showModal.classList.remove('modal--open');
  modalRegister.style.display = null;
  modalLogin.style.display = null;
}

for (var hideModal of hideModals) {
  hideModal.onclick = function (e) {
    e.stopPropagation();
  }
}

// Change form login/register
switchLogin.onclick = function () {
  modalLogin.style.display = 'block';
  modalRegister.style.display = 'none';
}

switchRegister.onclick = function () {
  modalRegister.style.display = 'block';
  modalLogin.style.display = 'none';
}

// Notify viewed
for (var notifyViewed of notifyViews) {
  notifyViewed.onclick = function () {
    // window.open('https://shopee.vn/buyer/signup');
    alert("you are viewed")
    this.classList.add('notify-item--viewed');
  };
}

// Show history search
searchBarInputInput.addEventListener("focus", () => {
  searchBarPopover.style.display = "block";
  searchBarInput.classList.add('searchbar-outline');
});

document.addEventListener("click", (event) => {
  if (
    !searchBarInputInput.contains(event.target) &&
    !searchBarPopover.contains(event.target)
  ) {
    searchBarPopover.style.display = "none";
    searchBarInput.classList.remove('searchbar-outline');
  }
});