const formData = {
  email: '',
  message: '',
};

const LS_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailForm = form.querySelector('input[name="email"]');
const textarea = form.querySelector('textarea');

function saveFormData() {
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function restoreText() {
  const savedData = localStorage.getItem(LS_KEY);

  if (savedData) {
    const parseData = JSON.parse(savedData);

    formData.message = parseData.message || '';
    textarea.value = formData.message;

    formData.email = parseData.email || '';
    emailForm.value = formData.email;
  }
}

restoreText();

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', onTextareaInput);

function onTextareaInput(event) {
  const { name, value } = event.target;

  if (name in formData) {
    formData[name] = value;

    saveFormData();
  }
}

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  form.reset();
  localStorage.removeItem(LS_KEY);
  formData.email = '';
  formData.message = '';
}

console.log(formData);
