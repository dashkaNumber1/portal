document.querySelector('.year').innerHTML = new Date().getFullYear();

const btn_in = document.querySelector('.btn-in');
const modal_close = document.querySelector('.modal-close');
const btn_registry = document.querySelector('.btn-registry');


btn_in.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.auth-modal-wrap').classList.remove('close')
  document.querySelector('body').style.overflowY = 'hidden';
  document.querySelector('.auth-form').classList.remove('close');
  document.querySelector('.registry-form').classList.add('close');
});


modal_close.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.auth-modal-wrap').classList.add('close')
  document.querySelector('body').style.overflowY = 'scroll';
  document.querySelector('.registry-form').classList.remove('close');
  document.querySelector('.auth-form').classList.remove('close');
});

btn_registry.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.auth-modal-wrap').classList.remove('close')
  document.querySelector('body').style.overflowY = 'hidden';
  document.querySelector('.auth-form').classList.add('close');
  document.querySelector('.registry-form').classList.remove('close');
})