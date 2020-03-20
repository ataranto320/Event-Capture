const divs = document.querySelectorAll("div");

function logText(e) {
    console.log(this.classList.value);
    // console.log(this);
    // stop bubbling this event up
    e.stopPropagation();
}

// document.body.addEventListener("click", logText);

divs.forEach(div => div.addEventListener("click", logText, {
    // run function on way down - capture true
    // capture: true
    capture: false
}));