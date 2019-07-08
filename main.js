const text = document.querySelector(".description")
const cursor = document.querySelector('.cursor');
const letter = "Wakacje na każdą kieszeń..."


let indexText = 0;
const time = 200;

const addLetter = () => {
    text.textContent += letter[indexText];
    indexText++;
    if (indexText === letter.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
    cursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, time)
setInterval(cursorAnimation, 400);