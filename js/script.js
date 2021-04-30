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

const initialCards = [
  {
    name: 'Castel San Pietro',
    link: './images/element-castel-san-pietro.jpeg'
  },
  {
    name: 'Giardino Bardini',
    link: './images/element-giardino-bardini.jpeg'
  },
  {
    name: 'Manarola',
    link: './images/element-manarola.jpeg'
  },
  {
    name: 'Naples',
    link: './images/element-naples.jpeg'
  },
  {
    name: 'Rialto Bridge',
    link: './images/element-rialto-bridge.jpeg'
  },
  {
    name: 'Piazza Pretoria',
    link: './images/element-piazza-pretoria.jpeg'
  }
];

function getCard(cardSrc, cardName) {
  const elementElement = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = elementElement.querySelector('.element__image');
  const elementTitle = elementElement.querySelector('.element__title');
  const trashButton = elementElement.querySelector('.element__trash');
  const likeButton = elementElement.querySelector('.element__like');
  elementImage.src = cardSrc;
  elementTitle.textContent = cardName;
  trashButton.addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  } );
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  elementImage.addEventListener('click', function() {
    popupPhotoElement.querySelector('.popup__img').src = cardSrc;
    popupPhotoElement.querySelector('.popup__caption').textContent = cardName;
    popupPhotoElement.querySelector('.popup__img').alt = cardName;
    container.append(popupPhotoElement);
    popupOpen(popupPhotoElement);
  });
  return elementElement;
}

//Рендеринг массива из 6-ти карточек
initialCards.forEach((item) => {
  elementContainer.append(getCard(item.link, item.name));
});

function addFormSubmitHandler(evt) {  //Добавление новой карточки
  evt.preventDefault();
  popupClose(popupAdd);
  elementContainer.prepend(getCard(popupAdd.querySelector('input[name="link"]').value, popupAdd.querySelector('input[name="place-name"]').value));
}

popupAddForm.addEventListener('submit', addFormSubmitHandler); //Обработчик клика при добавлении новой карточки


function popupFormOpen() {
  popupName.value = profileName.textContent;
  popupHobby.value = profileHobby.textContent;
}

function popupOpen(popup) {
  popup.classList.remove('fade-out');
  popup.classList.add('fade-in');
}

function popupClose(popup) {
  popup.classList.remove('fade-in');
  popup.classList.add('fade-out')
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  popupClose(popupEdit);
  profileName.textContent = popupName.value;
  profileHobby.textContent = popupHobby.value;
}

addButton.addEventListener('click', function () {  //Обработчик открытия попапа для добавления карточки
  popupOpen(popupAdd);
});

popupAddBtnClose.addEventListener('click', function () { //Обработчик закрытия попапа для добавления карточки
  popupClose(popupAdd);
});

editButton.addEventListener('click', function () {
  popupFormOpen();
  popupOpen(popupEdit);
});

popupEditBtnClose.addEventListener('click', function () {
  popupClose(popupEdit);
});

popupEditForm.addEventListener('submit', editFormSubmitHandler);


popupPhotoBtnClose.addEventListener('click', function () {
  popupClose(popupPhotoElement);
});




