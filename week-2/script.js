const welcomeMessageDiv = document.querySelector("#welcome-message");
const welcomeMessage = document.querySelector("#welcome-message h1");
const callToActionButton = document.querySelector("#button input");
const contentHide = document.querySelector("#content-hide");


// event: 變換 welcome message
welcomeMessageDiv.addEventListener("click", () => {
    welcomeMessage.textContent = "Have a Good Time!";
});

/* 
event: 
按下callToAction按鈕時會顯示隱藏的content box(content box的display初始設定是none)
再按一次會隱藏
*/
contentHide.style.display = "none";
callToActionButton.addEventListener("click", () => {
    if (contentHide.style.display === "none") {
        contentHide.style.display = "block";
    } else {
        contentHide.style.display = "none";
    }
});

