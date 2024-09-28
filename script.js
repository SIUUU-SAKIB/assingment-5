function classELm(cls) {
  return document.querySelector(cls);
}
const openBtn = classELm(`.openBtn`);
const closeBtn = classELm(`.closeBtn`);
const modal = classELm(`.menu`);
const popUpModal = classELm(`.pop-up`);

const historyBtn = classELm(`.history`);
const donateBtn = classELm(`.donation`);
const donateBtns = document.querySelectorAll(`.donate-btn`);
const modalCloseBtn = classELm(`.close-btn`);
const overlay = classELm(`.overlay`);
const messageContainer = classELm(`.message-container`);
const labelBalance1 = +classELm(`.cur-bal-1`).textContent;
const labelBalance2 = +classELm(`.cur-bal-2`).textContent;
const labelBalance3 = +classELm(`.cur-bal-3`).textContent;
let balance = 20000;
let pushBal = 0
let label1 = 150800
let label2 = 170500
let label3 = 354000
console.log(pushBal)
const currentBalance2 = parseFloat(
  document.querySelector(`.current-bal-2`).textContent
);

// hamburger
openBtn.addEventListener("click", (e) => {
  modal.style.display = `flex`;
  modal.style.trasnition = `0.5s`;
  openBtn.style.display = `none`;
  closeBtn.style.display = `block`;
  document.querySelectorAll(`.uni`).forEach(e => {
    e.style.visibility = `hidden`
  })
});

closeBtn.addEventListener("click", (e) => {
  modal.style.display = `none`;
  openBtn.style.display = `block`;
  closeBtn.style.display = `none`;
  document.querySelectorAll(`.uni`).forEach(e => {
    e.style.visibility = `visible`
  })
});
// hamburger ////////////////
historyBtn.addEventListener(`click`, (e) => {
  document.querySelector(`.content`).style.display = `none`;
  messageContainer.classList.remove(`hidden`);
  historyBtn.style.backgroundColor = `#B4F461`;
  donateBtn.style.backgroundColor = `white`;
});

donateBtn.addEventListener(`click`, (e) => {
  document.querySelector(`.content`).style.display = `flex`;
  messageContainer.classList.add(`hidden`);
  historyBtn.style.backgroundColor = `white`;
  donateBtn.style.backgroundColor = `#B4F461`;
});

classELm(`.btn-1`).addEventListener(`click`, () => {
  const input1 = +classELm(`.input-1`).value;
  if (!isNaN(input1) && +input1 > 0 && balance > +input1) {
    balance = balance - +input1; 
    label1 = +label1 + +input1
    classELm(`.cur-bal-1`).textContent = label1
    classELm(`.current-bal-1`).textContent = +balance + ` BDT`;
    classELm(`.current-bal-2`).textContent = +balance + ` BDT`;
    popUpModal.classList.remove(`hidden`);
    classELm(`.input-1`).value = ``;

    const html = `
    <div class="message py-4 border flex items-start justify-center flex-col  px-10 space-y-4">
<h1 class="font-bold text-lg">${input1} Taka is Donated for flood at Noakhali-2024 Bangladesh</h1>
<p>Date: ${new Date()}</p>
</div>`;
    messageContainer.insertAdjacentHTML("afterbegin", html);
  }
});

classELm(`.btn-2`).addEventListener(`click`, () => {
  const input2 = +classELm(`.input-2`).value;
  if (!isNaN(input2) && +input2 > 0 && balance > +input2) {
    const labelBal = +labelBalance1 + +input2;
    console.log(+labelBal);
    balance = balance - +input2;
    label2 = +label2 + +input2
    console.log(label2)
    classELm(`.cur-bal-2`).textContent = label2
    classELm(`.current-bal-1`).textContent = +balance + ` BDT`;
    classELm(`.current-bal-2`).textContent = +balance + ` BDT`;
    popUpModal.classList.remove(`hidden`);
    classELm(`.input-2`).value = ``;
    const html = `
    <div class="message py-4 border flex items-start justify-center flex-col  px-10 space-y-4">
<h1 class="font-bold text-lg">${input2} Taka is Donated for flood at Feni-2024 Bangladesh</h1>
<p>Date: ${new Date()}</p>
</div>`;
    messageContainer.insertAdjacentHTML("afterbegin", html);
  }
});

classELm(`.btn-3`).addEventListener(`click`, () => {
  const input3 = +classELm(`.input-3`).value;
  if (!isNaN(input3) && +input3 > 0 && balance > +input3) {
    const labelBal = +labelBalance3 + +input3;
    balance = balance - +input3;
   console.log(pushBal)
   label3 = label3 + +input3
   console.log(label3)
   classELm(`.cur-bal-3`).textContent = label3
    classELm(`.current-bal-1`).textContent = +balance + ` BDT`;
    classELm(`.current-bal-2`).textContent = +balance + ` BDT`;
    popUpModal.classList.remove(`hidden`);
    classELm(`.input-3`).value = ``;

    const html = `
    <div class="message py-4 border flex items-start justify-center flex-col  px-10 space-y-4">
<h1 class="font-bold text-lg">${input3} Taka is Donated for injured fighters of july revolution-2024 Bangladesh</h1>
<p>Date: ${new Date()}</p>
</div>`;
    messageContainer.insertAdjacentHTML("afterbegin", html);
  }
});


modalCloseBtn.addEventListener(`click`, (e) => {
  popUpModal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
});
const blog = document.querySelectorAll(".blog");
blog.forEach((e) => {
  console.log(e)
  e.addEventListener(`click`, () => {
    console.log(`noj`);
    window.location.href = `https://66f8045c51454fd90f9fa868--incandescent-churros-110126.netlify.app/`;
  });
});
