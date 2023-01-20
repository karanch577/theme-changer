const toggler = document.querySelector(".toggler")
const ball = document.querySelector(".ball")
let isDark = false

toggler.addEventListener("click", () => {
    ball.classList.toggle("dark")
    isDark = !isDark
    changebg(isDark)
})

function changebg(isDark) {
    if(isDark) {
        document.body.style.backgroundColor = "#202124"
        document.body.style.color = "#E7EAED"
    } else {
        document.body.style.backgroundColor = "#fff"
        document.body.style.color = "#000"
    }
}