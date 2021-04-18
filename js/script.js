let editButton = document.querySelector('.profile__button_type_edit');
let popup = document.querySelector('.popup');
let popupBtnClose = popup.querySelector('.popup__btn-close');
let popupName = popup.querySelectorAll('.popup__input')[0];
let popupHobby = popup.querySelectorAll('.popup__input')[1];
let popupForm = popup.querySelector('.popup__container');
let profile = document.querySelector('.profile');
let profileName = profile.querySelector('.profile__name');
let profileHobby = profile.querySelector('.profile__hobby');

let elementLikes = document.querySelectorAll('.element__like');

function popupClose() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  popupClose();
  profileName.textContent = popupName.value;
  profileHobby.textContent = popupHobby.value;
}

editButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  popupName.value = profileName.textContent;
  popupHobby.value = profileHobby.textContent;
});

popupBtnClose.addEventListener('click', function () {
  popupClose();
});

popupForm.addEventListener('submit', formSubmitHandler);

for (let i = 0; i < elementLikes.length; i++) {
  elementLikes[i].addEventListener('click', function () {
    elementLikes[i].classList.toggle('element__like_active');
  });
}
