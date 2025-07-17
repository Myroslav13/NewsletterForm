const submitBtn = document.getElementById('submit-btn')
const form = document.getElementById('form')
const warning = document.getElementById('warning')
const emailInput = document.getElementById('email')
const afterMessage = document.getElementById('after-message')
const container = document.getElementById('container')
const afterMessageText = document.getElementById('after-message-text')
const dismissBtn = document.getElementById('dismiss-btn')

function submitBtnClicked(event) {
    event.preventDefault()

    const data = Object.fromEntries(new FormData(form))
    let isBlank = false

    // Pre-hiding of warnings
    emailInput.classList.remove('warningInput')
    warning.style.display = "none"

    for(let key in data) {
        if((data[key] === "") || !(data[key].endsWith(".com") && (data[key]).includes("@"))) {
            warning.style.display = "block"
            emailInput.classList.add('warningInput')
            isBlank = true
        }
    }

    if(!isBlank) {
        container.style.display = "none"
        afterMessage.style.display = "block"

        afterMessageText.innerHTML = `A confirmation email has been sent to <b>${emailInput.value}</b>. 
            Please open it and click the button inside to confirm your subscription.`
    }
}

function dismissBtnClicked() {
    afterMessage.style.display = "none"
    emailInput.value = ""
    container.style.display = "flex"
}

submitBtn.addEventListener('click', submitBtnClicked)
dismissBtn.addEventListener('click', dismissBtnClicked)