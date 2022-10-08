const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];
let level = {
    Easy : 5,
    Normal : 3,
    Hard : 2,
}

// select ele
let selection = document.getElementById("selection");
let massegeLevel = document.querySelector(".message .level")
let massegeSecond = document.querySelector(".message .second")
let showWord = document.querySelector(".show-word")
let start = document.querySelector(".start")
let input = document.querySelector(".inp")
let divWords = document.querySelector(".words")
let controlTime = document.querySelector(".control .time span")
let controlScoreTo = document.querySelector(".control .score .to")
let controlScoreFrom = document.querySelector(".control .score .from")
let result = document.querySelector(".result")

// normal
massegeLevel.innerHTML = selection.value
massegeSecond.innerHTML = level[selection.value]
controlTime.innerHTML = level[selection.value]
controlScoreTo.innerHTML = 0
controlScoreFrom.innerHTML = words.length
input.onpaste = () => {
    return false
}

let selectTime = selection.value

// onchange
selection.onchange = () => {
    selectTime = selection.value
    console.log(selectTime)
    massegeLevel.innerHTML = selectTime
    massegeSecond.innerHTML = level[selectTime]
    controlTime.innerHTML = level[selectTime]
}

start.onclick = () => {
    start.remove()
    input.focus()
    selection.remove()
    wordShow()
}

function wordShow() {
    let wordRandom = words[Math.floor(Math.random() * words.length)]
    let indexWord = words.indexOf(wordRandom)
    words.splice(indexWord, 1)
    showWord.innerHTML = wordRandom
    divWords.innerHTML = ""
    for (let i = 0; i < words.length; i++) {
        divWords.innerHTML += `<div>${words[i]}</div>`
    }
    startPly()
}

function startPly() {
    let timeOut = setInterval(() => {
        controlTime.innerHTML--
        if (controlTime.innerHTML === "0") {
            clearInterval(timeOut)
            if (input.value.toLowerCase() === showWord.innerHTML.toLowerCase()) {
                if (words.length > 0) {
                    wordShow()
                    input.value = ""
                    controlTime.innerHTML = level[selectTime]
                    controlScoreTo.innerHTML++
                }else {
                    controlScoreTo.innerHTML++
                    result.innerHTML = `<span class="good">congratulation</span>`
                    divWords.remove()
                }
            }else {
                result.innerHTML = `<span class="pad">Game Over</span>`
            }
        }
    }, 1000);
}