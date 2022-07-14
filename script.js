const
    stars = document.querySelectorAll(".stars"),
    submitButton = document.querySelector("#rate"),
    ratingText = document.querySelector("#rating"),
    rateState = document.querySelector(".rate-state"),
    thankState = document.querySelector(".thanks-state");

submitButton.onclick = () => {
    for (i = 0; i < stars.length; i++) {
        if (stars[i].checked) {
            rateState.classList.add("active");
            thankState.classList.remove("active");
            ratingText.textContent = `You selected ${stars[i].value} out of 5`;
        }
    }
};