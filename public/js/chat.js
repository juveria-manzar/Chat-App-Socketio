var socket = io()
var messages = document.getElementById('messages')


//self executing code initializes socket.io on the client side and emits message typed in input box.
(function() {
    $('form').submit((e) => {
        let li = document.createElement('li')
        e.preventDefault();
        socket.emit('chat message', $('#message').val())
    })
})()