const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
    console.log(this.classList.value);
    // console.log(this);
    // e.stopPropagation(); // stop bubbling this event up
}

// document.body.addEventListener("click", logText);

divs.forEach(div => div.addEventListener("click", logText, {
    // capture: true // run function on way down - capture true
    capture: false,
    once: true // unbind itself // wont run again
}));

button.addEventListener("click", () => {
    console.log("click.");
}, {
    once: true
});

// once similar to: div.removeEventListener("click", logText);