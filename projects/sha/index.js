hashButton = document.getElementById("hash-button");
hashInput = document.getElementById("hash-input");

socket = new WebSocket("ws://54.191.27.179:8080/");

hashButton.onclick = function(){
  
  socket.send(hashInput.value);
  
};

socket.onmessage = function (event) {
  hashInput.value = event.data;
}