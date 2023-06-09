let userMessages = [];
let assistantMessages = [];

const chatBox = document.querySelector('.chat-box');

const sendMessage = async() => {
    const chatInput = document.querySelector('.chat-input input');
    const message = chatInput.value;

    // Create user message div and append to chatbox
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user');
    userMessage.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(userMessage);
    
    //add userMessage message
    userMessages.push(message);
    
    chatInput.value = '';

    // Show spinner
    document.getElementById('spinner').style.display = 'block';

    const response = await fetch('http://localhost:5500/tarsumy', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: message,
            userMessages: userMessages,
            assistantMessages: assistantMessages,
        })
    });

    const data = await response.json();

    // hide spinner
    document.getElementById('spinner').style.display = 'none';
    
    //add assistantMessage message
    assistantMessages.push(data.assistant);

    // Create assistant message div and append to chatbox
    const assistantMessage = document.createElement('div');
    assistantMessage.classList.add('chat-message', 'assistant');
    assistantMessage.innerHTML = `<p>${data.assistant}</p>`;
    chatBox.appendChild(assistantMessage);

    // scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
};

document.querySelector('.chat-input button').addEventListener('click', sendMessage);

// add event listener for Enter key
document.querySelector('.chat-input input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});

// Create an introduction message from the assistant
const introductionMessage = document.createElement('div');
introductionMessage.classList.add('chat-message', 'assistant');
introductionMessage.innerHTML = `<p>Hello. I am Tasumi, who tells you everything about Suwon Target Zone. How can I help you?</p>`;

// Append the introduction to the chat box
chatBox.appendChild(introductionMessage);
