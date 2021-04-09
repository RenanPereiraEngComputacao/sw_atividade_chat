function gotoBottom(id) {
  var element = document.getElementById(id);
  element.scrollTop = element.scrollHeight - element.clientHeight;
}

window.addEventListener("load", function (event) {
  gotoBottom("chat");
});

function captMess(){
  const inputMess = document.getElementById("texto");
  
  const container = document.getElementById('container');
  const sec = document.getElementById('sec');
  const botton = document.getElementById('botton');
  const chat = document.getElementById('chat');


  const div = document.createElement('div');
  div.className = "right";
  const span = document.createElement('span');
  const conteudoSpan = document.createTextNode("Você diz:");
  div.appendChild(span);
  span.appendChild(conteudoSpan);
  const h4 = document.createElement('h4');
  h4.innerText = inputMess.value;
  div.appendChild(h4);


  container.appendChild(sec);
  sec.appendChild(botton);
  botton.appendChild(chat);
  chat.appendChild(div);

  inputMess.value = "";
}
formAdd = document.getElementById("formAdd");
formAdd.addEventListener("submit", function(event) {
  event.preventDefault();  
captMess();
gotoBottom("chat");
});
