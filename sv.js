


const modal = document.getElementById('bookingModal');

const openModalButtons = document.querySelectorAll('.open-modal-button');
const closeModalButton = document.querySelector('.close');
const submitButton = document.getElementById('submitButton');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    openModal();
  });
});

closeModalButton.addEventListener('click', () => {
  closeModal();
});

submitButton.addEventListener('click', () => {
  submitBooking();
});


function openModal() {
  modal.style.display = 'block';
}


function closeModal() {
  modal.style.display = 'none';
}


function submitBooking() {
  
  const tripName = document.querySelector('.p-tag').textContent;
  const firstName = document.getElementById('firstNameInput').value;
  const lastName = document.getElementById('lastNameInput').value;
  const phoneNumber = document.getElementById('phoneInput').value;


  const cartItem = document.createElement('li');
  cartItem.classList.add('cart-item');
  cartItem.textContent = tripName + ' - ' + firstName + ' ' + lastName + ' (' + phoneNumber + ')';

 
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.appendChild(cartItem);

 
  closeModal();
}