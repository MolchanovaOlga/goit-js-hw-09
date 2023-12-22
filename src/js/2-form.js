const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const email = form.elements.email;
const message = form.elements.message;

let objFromLocalStorage = {};
if (localStorage.getItem(localStorageKey)) {
    objFromLocalStorage = JSON.parse(localStorage.getItem(localStorageKey));
    email.value =objFromLocalStorage.email;
    message.value = objFromLocalStorage.message;
}

form.addEventListener('input', addFeedbackToLocalStorage);

function addFeedbackToLocalStorage() { 
    const feedbackObj = {
        'email': email.value.trim(),
        'message': message.value.trim()
    }
    localStorage.setItem(localStorageKey, JSON.stringify(feedbackObj));
}

form.addEventListener('submit', getFeedback);

function getFeedback(event) {
    event.preventDefault();
    if (email.value.trim() !== '' && message.value.trim() !== '') {
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    localStorage.removeItem(localStorageKey);
    }
      form.reset();
}

