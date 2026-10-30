const port = 8000;
const http = require('http');

server = http.createServer((req, res) => {
    const dataHoraAtual = new Date().toLocaleString('pt-BR');

    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });
    res.write(`Data e hora atuais: ${dataHoraAtual}`);
    res.end();
})

server.listen(port);
console.log(`Servidor funcionando na porta: ${port}`);
	
