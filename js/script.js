const editButton = document.querySelector('.profile__button_type_edit');
const popupEdit = document.querySelector('.popup_type_edit');
const popupEditBtnClose = popupEdit.querySelector('.popup__btn-close');
const popupName = popupEdit.querySelector('input[name="profile-name"]');
const popupHobby = popupEdit.querySelector('input[name="profile-hobby"]');
const popupForm = popupEdit.querySelector('.popup__form');
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileHobby = profile.querySelector('.profile__hobby');
const container = document.querySelector('.container');
const popupPhotoTemplate = document.querySelector('#popup_type_photo').content;
const popupPhotoElement = popupPhotoTemplate.querySelector('.popup_type_photo').cloneNode(true);
const popupPhotoBtnClose = popupPhotoElement.querySelector('.popup__btn-close');

const elementImages = document.querySelectorAll('.element__image');
const likeElementButtons = document.querySelectorAll('.element__like');

function popupFormOpen() {
  popupName.value = profileName.textContent;
  popupHobby.value = profileHobby.textContent;
}

function popupOpenClose(popup) {
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  popupOpenClose(popupEdit);
  profileName.textContent = popupName.value;
  profileHobby.textContent = popupHobby.value;
}

function addLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

editButton.addEventListener('click', function () {
  popupFormOpen();
  popupOpenClose(popupEdit);
});

popupEditBtnClose.addEventListener('click', function () {
  popupOpenClose(popupEdit);
});



popupForm.addEventListener('submit', formSubmitHandler);

likeElementButtons.forEach((item) => {
  item.addEventListener('click', addLike);
});

elementImages.forEach((item) => {
  item.addEventListener('click', function () {
    popupPhotoElement.querySelector('.popup__img').src = item.src;
    popupPhotoElement.querySelector('.popup__img').alt = item.alt;
    popupPhotoElement.querySelector('.popup__caption').textContent = item.nextSibling.nextSibling.textContent;
    container.append(popupPhotoElement);
    popupOpenClose(popupPhotoElement);
  });
});

popupPhotoBtnClose.addEventListener('click', function () {
  popupOpenClose(popupPhotoElement);
})
