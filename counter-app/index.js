// declare
const count = document.body.querySelector('.count');
const buttons = document.body.querySelectorAll('.btn');

// handle function
const handleCountColor = () => {
  let countVal = count.innerHTML;
  if (+countVal < 0) {
    count.style.color = 'brown';
  } else if (+countVal == 0) {
    count.style.color = 'white';
  } else if (+countVal > 0) {
    count.style.color = 'chartreuse';
  }
};
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('add')) count.innerHTML++;
    if (btn.classList.contains('reset')) count.innerHTML = '0';
    if (btn.classList.contains('subtract')) count.innerHTML--;
    handleCountColor();
  });
});
// function eventHandler(event, fn) {
//   console.log(event);
//   if (event.target.classList.contains('add')) count.innerHTML++;
//   if (event.target.classList.contains('reset')) count.innerHTML = '0';
//   if (event.target.classList.contains('subtract')) count.innerHTML--;
//   fn();
// }
// const doClick = (event) => {
//   eventHandler(event, handleCountColor);
// };
// // main call
// button.forEach((e) => {
//   e.addEventListener('click', doClick);
//   //   e.removeEventListener('click', doClick);
//   //   e.addEventListener('click', handleCountColor);
// });
// const subtract = document.body.querySelector('.subtract');
// // const reset = document.body.querySelector('.reset');
// // const add = document.body.querySelector('.add');

// const subtractEvent = () => {
//   console.log('you click button');
// };
// const resetEvent = () => {
//   count.textContent = '0';
// };
// const addEvent = () => {
//   count.innerHTML++;
// };

// subtract.addEventListener('click', subtractEvent);
// reset.addEventListener('click', resetEvent);
// add.addEventListener('click', addEvent);
// btns.addEventListener('click', (e) => {
//   console.log(e);
//   if (e.target.classList.contains('add')) console.log('you click btns');
// });
