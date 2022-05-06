const shareBtn = document.querySelector(".share-btn");
const shareTooltip = document.querySelector(".share-tooltip");
const bottomRow = document.querySelector(".article-preview .bottom-row");

shareBtn.addEventListener('click', (e) => {
    bottomRow.classList.toggle("tooltip-active");
})