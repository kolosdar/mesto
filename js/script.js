const editButton = document.querySelector('.profile__button_type_edit');
const popupEdit = document.querySelector('.popup_type_edit');
const popupEditBtnClose = popupEdit.querySelector('.popup__btn-close');
const popupName = popupEdit.querySelector('input[name="profile-name"]');
const popupHobby = popupEdit.querySelector('input[name="profile-hobby"]');
const popupEditForm = popupEdit.querySelector('.popup__form');
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileHobby = profile.querySelector('.profile__hobby');
const container = document.querySelector('.container');
const popupPhoto = document.querySelector('.popup_type_photo');
const popupPhotoBtnClose = popupPhoto.querySelector('.popup__btn-close');

const popupImg = popupPhoto.querySelector('.popup__img');
const popupCaption = popupPhoto.querySelector('.popup__caption');

const placeLink = popupAdd.querySelector('input[name="place-link"]');
const placeName = popupAdd.querySelector('input[name="place-name"]');

const addButton = document.querySelector('.profile__button_type_add');
const popupAdd = document.querySelector('.popup_type_add');
const popupAddBtnClose = popupAdd.querySelector('.popup__btn-close');
const popupAddForm = popupAdd.querySelector('.popup__form');
const submitButton = popupAddForm.querySelector('.popup__btn-save');

const elementTemplate = document.querySelector('#element').content;
const elementContainer = document.querySelector('.elements__list');

function getCard(card) {
  const elementElement = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = elementElement.querySelector('.element__image');
  const elementTitle = elementElement.querySelector('.element__title');
  const trashButton = elementElement.querySelector('.element__trash');
  const likeButton = elementElement.querySelector('.element__like');
  elementImage.src = card.link;
  elementImage.alt = card.name;
  elementTitle.textContent = card.name;
  trashButton.addEventListener('click', removeCard);
  likeButton.addEventListener('click', likeCard);
  elementImage.addEventListener('click', () => openModal(card));
  return elementElement;
}

function removeCard(evt) {
  evt.target.closest('.element').remove();
}

function likeCard(evt) {
  evt.target.classList.toggle('element__like_active');
}

function openModal(card) {
  popupImg.src = card.link;
  popupCaption.textContent = card.name;
  popupImg.alt = card.name;
  openPopup(popupPhoto);
}

//Рендеринг массива из 6-ти карточек
initialCards.forEach((item) => {
  elementContainer.append(getCard(item));
});

function addFormSubmitHandler(evt) {  //Добавление новой карточки
  const card = {
    link: placeLink.value,
    name: placeName.value
  }
  evt.preventDefault();
  closePopup(popupAdd);
  elementContainer.prepend(getCard(card));
  popupAddForm.reset();
  submitButton.classList.add('popup__btn-save_inactive');
  submitButton.setAttribute('disabled', 'disabled');
}

popupAddForm.addEventListener('submit', addFormSubmitHandler); //Обработчик клика при добавлении новой карточки


function fillInput() {
  popupName.value = profileName.textContent;
  popupHobby.value = profileHobby.textContent;
}

function openPopup(popup) {
  popup.classList.remove('fade-out');
  popup.classList.add('fade-in');
  document.addEventListener('keydown', closePopupEscapeKeydown);
}

function closePopup(popup) {
  popup.classList.remove('fade-in');
  popup.classList.add('fade-out');
  document.removeEventListener('keydown', closePopupEscapeKeydown);
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  closePopup(popupEdit);
  profileName.textContent = popupName.value;
  profileHobby.textContent = popupHobby.value;
}

function closePopupOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

function closePopupEscapeKeydown(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.fade-in');
    closePopup(openedPopup);
  }
}

addButton.addEventListener('click', () => openPopup(popupAdd));

popupAddBtnClose.addEventListener('click', () =>  closePopup(popupAdd));

popupAdd.addEventListener('click', closePopupOverlayClick);


editButton.addEventListener('click', () => {
  fillInput();
  openPopup(popupEdit);
});

popupEditBtnClose.addEventListener('click', () => closePopup(popupEdit));

popupEditForm.addEventListener('submit', editFormSubmitHandler);

popupEdit.addEventListener('click', closePopupOverlayClick);

popupPhotoBtnClose.addEventListener('click', () => closePopup(popupPhoto));

popupPhoto.addEventListener('click', closePopupOverlayClick);





