// Predefined questions and answers
const predefinedResponses = {
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a bot, but I'm doing fine! How about you?",
    "what is your name": "I'm Chatbot! Your friendly assistant.",
    "bye": "Goodbye! Have a great day!",
  };
  
  // Random replies for unmatched queries
  const randomReplies = [
    "Sorry, I didn't understand that.",
    "Can you rephrase your question?",
    "I'm not sure about that.",
    "Interesting... Tell me more!",
  ];
  
  // DOM Elements
  const chatWindow = document.getElementById("chat-window");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");
  
  // Add message to chat window
  function addMessage(content, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = content;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to bottom
  }
  
  // Handle user message
  function handleUserMessage() {
    const userMessage = userInput.value.trim().toLowerCase();
    if (!userMessage) return;
  
    // Add user message to chat
    addMessage(userMessage, "user");
  
    // Bot response
    let botReply = predefinedResponses[userMessage] ||
                   randomReplies[Math.floor(Math.random() * randomReplies.length)];
    setTimeout(() => addMessage(botReply, "bot"), 500);
  
    userInput.value = ""; // Clear input field
  }
  
  // Event listener for send button
  sendBtn.addEventListener("click", handleUserMessage);
  
  // Event listener for Enter key
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleUserMessage();
    }
  });
  