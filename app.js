const messageContent = document.getElementById('message-content');
const toasts = document.getElementById('toasts');
const addButton = document.getElementById('add-button');
const clearButton = document.getElementById('clear-button');
const success = document.getElementById('success');
const error = document.getElementById('error');
const cancelable = document.getElementById('cancelable');
const duration = document.getElementById('duration');
const message = document.querySelector('.message');
const toast = document.querySelector('.toast');

addButton.addEventListener('click', function() {
    const toastDiv = document.createElement('div');
    toastDiv.classList.add("toast")

    const messageP = document.createElement('p')
    messageP.innerText += "Message Content" 
    messageP.classList.add("message");
    toastDiv.appendChild(messageP)
    
    const buttonCancel = document.createElement('button')
    if(cancelable.checked) {
        buttonCancel.classList.add("cancel-button")
        buttonCancel.innerText += "X";
        toastDiv.appendChild(buttonCancel)
    }

    if(success.checked) {
        toastDiv.classList.add("success-toast")
    } else {
        toastDiv.classList.add("error-toast")
    }
    
    if(messageContent.value.length > 0) {
        messageP.innerText = messageContent.value
    } else if (messageContent.value.length == 0) {
        if(success.checked) {
            messageP.innerText =""
            messageP.innerText += "Succes"
        } else {
            messageP.innerText =""
            messageP.innerText += "Error"
        }
    }

    toasts.appendChild(toastDiv)

    buttonCancel.addEventListener('click', function() {
        toastDiv.remove()
    })
    setTimeout(() => {
        toastDiv.remove();
    }, duration.value)
})

clearButton.addEventListener("click", function() {
    toasts.innerHTML = ""
})