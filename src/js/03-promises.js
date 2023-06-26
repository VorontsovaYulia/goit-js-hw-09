import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector(".form");

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (shouldResolve) {
    
    resolve({ position, delay })
  } else {

    reject({ position, delay })
  }
    }, delay)
  })
  promise
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
    })
  .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
    })
  
}

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
 

  const current = evt.currentTarget.elements;
  
  let inputDelay = Number(current.delay.value);
  const inputStep = Number(current.step.value);
  const inputAmount = Number(current.amount.value);
  

  for (let i = 1; i <= inputAmount; i += 1){
    if (i > 1) {
      inputDelay += inputStep;
    }
    createPromise(i, inputDelay)
  }
  form.reset();
}