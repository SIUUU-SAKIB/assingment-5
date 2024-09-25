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
let pushBal = [];

const currentBalance2 = parseFloat(
  document.querySelector(`.current-bal-2`).textContent
);

// hamburger
openBtn.addEventListener("click", (e) => {
  modal.style.display = `flex`;
  modal.style.trasnition = `0.5s`;
  openBtn.style.display = `none`;
  closeBtn.style.display = `block`;
});

closeBtn.addEventListener("click", (e) => {
  modal.style.display = `none`;
  openBtn.style.display = `block`;
  closeBtn.style.display = `none`;
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
  if (!isNaN(input1) && +input1 > 0) {
    const labelBal = +labelBalance1 + +input1;
    console.log(+labelBal);
    const curBalance = balance - +input1;
    classELm(`.cur-bal-1`).textContent = labelBal;
    classELm(`.current-bal-1`).textContent = curBalance + ` BDT`;
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
  if (!isNaN(input2) && +input2 > 0) {
    const labelBal = +labelBalance2 + +input2;
    const curBalance = balance - +input2;
    console.log(curBalance);
    classELm(`.cur-bal-2`).textContent = labelBal;
    currentBalance1.textContent = curBalance + ` BDT`;
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
  if (!isNaN(input3) && +input3 > 0) {
    const labelBal = +labelBalance3 + +input3;
    const curBalance = balance - +input3;
    console.log(curBalance);
    classELm(`.cur-bal-2`).textContent = labelBal;
    classELm(`.current-bal-1`).textContent = curBalance + ` BDT`;
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
    window.location.href = `http://127.0.0.1:5500/history.html`;
  });
});
