const shareBtn = document.querySelector(".share-btn");
const shareTooltip = document.querySelector(".share-tooltip");

shareBtn.addEventListener('click', (e) => {
    shareTooltip.classList.toggle("shown");
})