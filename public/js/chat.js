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