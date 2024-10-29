const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwe = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const title1 = document.querySelector(".title");
const title2 = document.querySelector('.title-2');

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
btnNo.addEventListener("click", (e) => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = container.getBoundingClientRect().left;

    let newTop = btnTop;
    let newLeft = btnLeft;

    while (Math.abs(newTop - btnTop) < containerHeight / 3) {
        newTop = getRandomNumber(0, containerHeight - btnHeight)
    }

    while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
        newLeft = getRandomNumber(0, containerWidth - btnWidth);
    }
    btnNo.style.top = Math.floor(newTop) + "px";
    btnNo.style.left = Math.floor(newLeft) + "px"
});

btnYes.addEventListener("click", (e) => {
    btnNo.classList.add("hide");
    btnYes.classList.add('hide');
    imageOne.classList.add("hide");
    imageTwe.classList.remove("hide");
    title1.innerHTML=('I Love');
    title2.innerHTML=('You');

})