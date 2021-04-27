let editButton = document.querySelector('.profile__button_type_edit');
let popup = document.querySelector('.popup');
let popupBtnClose = popup.querySelector('.popup__btn-close');
let popupName = popup.querySelector('input[name="profile-name"]');
let popupHobby = popup.querySelector('input[name="profile-hobby"]');
let popupForm = popup.querySelector('.popup__form');
let profile = document.querySelector('.profile');
let profileName = profile.querySelector('.profile__name');
let profileHobby = profile.querySelector('.profile__hobby');

const likeElementButtons = document.querySelectorAll('.element__like');

function popupFormOpen() {
  console.log('fdfd');
  popup.classList.add('popup_opened');
  popupName.value = profileName.textContent;
  popupHobby.value = profileHobby.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  popupClose();
  profileName.textContent = popupName.value;
  profileHobby.textContent = popupHobby.value;
}

function addLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

editButton.addEventListener('click', popupFormOpen);

popupBtnClose.addEventListener('click', popupClose);

popupForm.addEventListener('submit', formSubmitHandler);

likeElementButtons.forEach((item) => {
  item.addEventListener('click', addLike);
});
