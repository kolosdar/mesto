const popupPhoto = document.querySelector('.popup_type_photo');
const popupImg = popupPhoto.querySelector('.popup__img');
const popupCaption = popupPhoto.querySelector('.popup__caption');

function openPopup(popup) {
  popup.classList.remove('fade-out');
  popup.classList.add('fade-in');
  document.addEventListener('keydown', closePopupEscapeKeydown);
}

function closePopupEscapeKeydown(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.fade-in');
    closePopup(openedPopup);
  }
}

export default class Card {
  constructor(data, cardSelector) {
    this._image = data.image;
    this._text = data.text;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const element = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._removeCard();
    });
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._likeCard();
    });
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._openModal();
    })
  }

  _removeCard() {
    this._element.querySelector('.element__trash').closest('.element').remove();
  }

  _likeCard() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _openModal() {
    popupImg.src = this._image;
    popupCaption.textContent = this._text;
    popupImg.alt = this._text;
    openPopup(popupPhoto);
  }


  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').src = this._image;
    this._element.querySelector('.element__title').textContent = this._text;

    return this._element;
  }

}
