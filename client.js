const mensajes = document.getElementById('mensajes');
const msgForm = document.getElementById('msgForm');

const socket = io('https://qr-socket.ga:8080');

socket.on('message', data => {
	console.log(data)
	agregarMensaje(data);
})

msgForm.addEventListener('submit', e => {
	e.preventDefault();
	socket.emit('chatmsg', msgForm.msg.value)
	msgForm.msg.value = '';
})

function agregarMensaje(mensaje) {
	const html = `<div>${mensaje}</div>`;
	mensajes.innerHTML += html;
}