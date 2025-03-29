import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

function onFormSubmit(evt) {
  evt.preventDefault();
  
  let delayPromise = Number(form.delay.value);
  const step = Number(form.step.value);
  const amount = Number(form.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delayPromise)
      .then((message) => Notiflix.Notify.success(message))
      .catch((message) => Notiflix.Notify.failure(message));
    
    delayPromise += step;
  }

  form.reset();
}

form.addEventListener('submit', onFormSubmit);