let listaDeAmigos = [];
const lista = document.getElementById("listaAmigos");
const inputNome = document.getElementById("amigo");
const resultado = document.getElementById("resultado");

// Funcion para adicionar un amigo a la Lista
function adicionarAmigo() {
    const nombreAmigo = inputNome.value.trim();

    if (!nombreAmigo) {
        alert("Por favor, inserte un nombre valido!.");
        return;
    }

    if (listaDeAmigos.includes(nombreAmigo)) {
        alert("Amigo ha sido adicionado.");
        return;
    }

    listaDeAmigos.push(nombreAmigo);
    atualizarLista();
    inputNome.value = ""; // Limpia el campo de entrada
}

// Funcion para actulizar la lista mostrada en la interfaz
function atualizarLista() {
    lista.innerHTML = ""; 
    // Limpia la lista antes de actualizar

    listaDeAmigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;

        // Crea boton para eliminar
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("button-remove"); // Adiciona la clase button-remove
        botaoRemover.onclick = () => removerAmigo(index);

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

// Funcion para remover un amigo de la lista
function removerAmigo(index) {
    listaDeAmigos.splice(index, 1);
    atualizarLista();
}

// Funcion para sortear Amigo Secreto
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Añade almenos un amigo para sortear.");
        return;
    }

    const amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

// Funcion para limpiar la lista del resultado del sorteo
function limparLista() {
    listaDeAmigos = [];
    atualizarLista();
    resultado.innerHTML = "";
}