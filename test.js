'use strict';

// const faqEl = document.getElementById('test');
// const buttonEl = document.getElementById('button');
// const textEl = document.getElementById('text');
// console.log(faqEl);

// faqEl.addEventListener('click', () => {
//   if(faqEl.classList.contains('active')){
//     faqEl.classList.remove('active')
//     textEl.hidden = 'true';
//   } else {
//     faqEl.classList.add('active');
//     textEl.hidden = 'false';
//   }
// });

const faqEl = document.querySelectorAll('.faq');

faqEl.forEach((faq) => {
  let btnEl = faq.querySelector('.faq-toggle');
  let textEl = faq.querySelector('.faq-text');

  btnEl.addEventListener('click', () => {
    faq.classList.toggle('active')
  })

  // btnEl.addEventListener('click', () => {
  //   if(faq.classList.contains('active')){
  //     faq.classList.remove('active');
  //     textEl.hidden = ' true'
  //   } else {
  //     faq.classList.add('active');
  //     textEl.hidden = 'false';
  //   }
  // })
})
