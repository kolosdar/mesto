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
const popupPhotoTemplate = document.querySelector('#popup_type_photo').content;
const popupPhotoElement = popupPhotoTemplate.querySelector('.popup_type_photo').cloneNode(true);
const popupPhotoBtnClose = popupPhotoElement.querySelector('.popup__btn-close');


const addButton = document.querySelector('.profile__button_type_add');
const popupAdd = document.querySelector('.popup_type_add');
const popupAddBtnClose = popupAdd.querySelector('.popup__btn-close');
const popupAddForm = popupAdd.querySelector('.popup__form');

const elementTemplate = document.querySelector('#element').content;
const elementContainer = document.querySelector('.elements__list');

function getCard(cardSrc, cardName) {
  const elementElement = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = elementElement.querySelector('.element__image');
  const elementTitle = elementElement.querySelector('.element__title');
  const trashButton = elementElement.querySelector('.element__trash');
  const likeButton = elementElement.querySelector('.element__like');
  elementImage.src = cardSrc;
  elementImage.alt = cardName;
  elementTitle.textContent = cardName;
  trashButton.addEventListener('click', removeCard);
  likeButton.addEventListener('click', likeCard);
  elementImage.addEventListener('click', () => openModal(cardSrc, cardName));
  return elementElement;
}

function removeCard(evt) {
  evt.target.closest('.element').remove();
}

function likeCard(evt) {
  evt.target.classList.toggle('element__like_active');
}

function openModal(cardSrc, cardName) {
  popupPhotoElement.querySelector('.popup__img').src = cardSrc;
  popupPhotoElement.querySelector('.popup__caption').textContent = cardName;
  popupPhotoElement.querySelector('.popup__img').alt = cardName;
  container.append(popupPhotoElement);
  openPopup(popupPhotoElement);
}

//Рендеринг массива из 6-ти карточек
initialCards.forEach((item) => {
  elementContainer.append(getCard(item.link, item.name));
});

function addFormSubmitHandler(evt) {  //Добавление новой карточки
  const cardLink = popupAdd.querySelector('input[name="link"]').value;
  const cardName = popupAdd.querySelector('input[name="place-name"]').value;
  evt.preventDefault();
  closePopup(popupAdd);
  elementContainer.prepend(getCard(cardLink, cardName));
  popupAddForm.reset();
}

popupAddForm.addEventListener('submit', addFormSubmitHandler); //Обработчик клика при добавлении новой карточки


function openPopupForm() {
  popupName.value = profileName.textContent;
  popupHobby.value = profileHobby.textContent;
}

function openPopup(popup) {
  popup.classList.remove('fade-out');
  popup.classList.add('fade-in');
}

function closePopup(popup) {
  popup.classList.remove('fade-in');
  popup.classList.add('fade-out')
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  closePopup(popupEdit);
  profileName.textContent = popupName.value;
  profileHobby.textContent = popupHobby.value;
}

addButton.addEventListener('click', () => openPopup(popupAdd));

popupAddBtnClose.addEventListener('click', () =>  closePopup(popupAdd));

editButton.addEventListener('click', () => {
  openPopupForm();
  openPopup(popupEdit);
});

popupEditBtnClose.addEventListener('click', () => closePopup(popupEdit));

popupEditForm.addEventListener('submit', editFormSubmitHandler);


popupPhotoBtnClose.addEventListener('click', () => closePopup(popupPhotoElement));




