var registerBtn = document.querySelector('.js-register-btn');
var loginBtn = document.querySelector('.js-login-btn');
var showModal = document.querySelector('.js-modal');
var hideModals = document.querySelectorAll('.js-modal__body');
var modalRegister = document.getElementById('modal__register');
var modalLogin = document.getElementById('modal__login');
var switchLogin = document.querySelector('.js-switch-login');
var switchRegister = document.querySelector('.js-switch-register');
var notifyViews = document.querySelectorAll('.js-notify-item');
var searchBarInput = document.querySelector('.js-searchbar-input');
var searchBarPopover = document.querySelector('.js-searchbar-popover');

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
