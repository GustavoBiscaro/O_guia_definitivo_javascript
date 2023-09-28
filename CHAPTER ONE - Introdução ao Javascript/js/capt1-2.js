console.clear();

function moveon() {
    // Exibe uma caixa de diálogo modal para fazer uma pergunta ao usuário
    var resposta = confirm("Está preparado?");
    // Se ele clicou no botão 'OK' faz o navegador carregar uma nova página
    if (resposta) window.location = "http://google.com";
}

// Executa a função definida acima por 1 minuto (60000 milisegundos) a partir de agora.
// setTimeout(moveon, 60000);

function debug(msg) {
    // Localiza a seção de depuração do documento, examinando os atributos de
    // Identificação HTML
    var log = document.getElementById("debuglog");
    // Se não existe elemento algum com a identificação "debuglog", cria um.
    if(!log) {
        log = document.createElement("div"); // Cria um novo elmento <div>
        log.id = "debuglog"; // Define o atributo de identificação HTML nele

        log.innerHTML = "<h1>Debug log </h1>"; // Define o conteúdo inicial
        document.body.appendChild(log); // Adiciona-o no final do documento
    }

    // Agora, coloca a mensagem em seu próprio <pre> e a anexa no log
    var pre = document.createElement("pre"); // Cria uma marca <pre>
    var text = document.createTextNode(msg); // Coloca a msg em um nó de texto
    pre.appendChild(text); // Adiciona o texto no <pre>
    log.appendChild(pre); // Adiciona <pre> no log
}
