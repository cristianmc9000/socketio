const io = require('socket.io')(8080, {
	cors: {
		origin: "http://localhost",
		methods: ['GET', 'POST'],
		allowedHeaders: ["my-custom-header"],
		credentials: true
	}
});
io.on('connection', (socket) => {
	console.log('Usuario conectado');
	socket.emit('message', 'Hola mundo');
	socket.on('disconnect', () => {
		console.log('Usuario desconectado');
	})
	socket.on('chatmsg', msg => {
		io.emit('message', msg);
	})
})