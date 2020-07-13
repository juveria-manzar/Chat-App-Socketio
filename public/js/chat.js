var socket = io();
// var messages = document.getElementById()


//self executing code initializes socket.io on the client side and emits message typed in input box.
(function() {
    $("#form").submit(function(e) {
        e.preventDefault(); // prevents page reloading
        socket.emit("chat message", $("#message").val());
        $("#message").val("");
        console.log('hello')
        return true;
    });
})()

// // fetching initial chat messages from the database
// (function() {
//   fetch("/chats")
//     .then(data => {
//       return data.json();
//     })
//     .then(json => {
//       json.map(data => {
//         let li = document.createElement("li");
//         let span = document.createElement("span");
//         messages.appendChild(li).append(data.message);
//         messages
//           .appendChild(span)
//           .append("by " + data.sender + ": " + formatTimeAgo(data.createdAt));
//       });
//     });
// })();

//is typing...
let messageInput = document.getElementById("message");
let typing = document.getElementById("typing");

messageInput.addEventListener('keypress',()=>{
    socket.emit('typing'{user:'Someone',message:'is typing...'})
})

socket.on('notifyTyping',data=>{
    typing.innerText=data.user+" "+data.message;
    console.log(data.user+data.message)
})

//stop typing event
messageInput.addEventListener('keyup',()=>{
    socket.emit('stopTyping',"")
})

socket.on('notifyStopTyping',()=>{
    typing.innerText=""
})