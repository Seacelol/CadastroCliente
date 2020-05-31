function validar_formCadastro () {
    
    let nome = formCadastro.nome.value;
    let email = formCadastro.email.value;
    let telefone = formCadastro.telefone.value;
    let cep = formCadastro.cep.value;
    let logradouro = formCadastro.logradouro.value;
    let numero = formCadastro.numero.value;
    let bairro = formCadastro.bairro.value;
    let cidade = formCadastro.cidade.value;
    let estado = formCadastro.estado.value;
   
    if (nome == "") {
        alert("Campo nome é obrigatorio");
        formCadastro.nome.focus();
        return false;
    }
        if (email == "") {
        alert("Campo E-mail é obrigatorio");
        formCadastro.email.focus();
        return false;
    }
    if (telefone == "") {
        alert("Campo telefone é obrigatorio");
        formCadastro.telefone.focus();
        return false;
    }
    if (cep == "") {
        alert("Campo CEP é obrigatorio");
        formCadastro.cep.focus();
        return false;
    }
    if (logradouro == "") {
        alert("Campo logradouro é obrigatorio");
        formCadastro.logradouro.focus();
        return false;
    }
    if (numero == "") {
        alert("Campo número é obrigatorio");
        formCadastro.numero.focus();
        return false;
    }
    if (bairro == "") {
        alert("Campo bairro é obrigatorio");
        formCadastro.bairro.focus();
        return false;
    }
    if (cidade == "") {
        alert("Campo cidade é obrigatorio");
        formCadastro.cidade.focus();
        return false;
    }
    if (estado == "") {
        alert("Campo estado é obrigatorio");
        formCadastro.estado.focus();
        return false;
    }
    
    let dados = {
        nome: nome,
        email: email,
        telefone: telefone,
        cep: cep,
        logradouro: logradouro,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
    }

    let storageAtual = localStorage.getItem("salvo") ? JSON.parse(localStorage.getItem("salvo")) : [];
    storageAtual.push(dados);
    localStorage.setItem("salvo", JSON.stringify(storageAtual));
    window.location.href="registro.html"

}

function criarTabela () {
    
    let registros = localStorage.getItem("salvo") ? JSON.parse(localStorage.getItem("salvo")) : [];
    let divRegistro = document.getElementById("divRegistro")

    for(let i in registros){
        let trId = document.createElement("tr");
        let trNome = document.createElement("tr");
        let trEmail = document.createElement("tr");
        let trTelefone = document.createElement("tr");
        let trCep = document.createElement("tr");
        let trLogradouro = document.createElement("tr");
        let trNumero = document.createElement("tr");
        let trBairro = document.createElement("tr");
        let trCidade = document.createElement("tr");
        let trEstado = document.createElement("tr");
        let trDivisao = document.createElement("tr");

        trId.innerHTML = "Id:" + i
        trNome.innerHTML = "Nome:" + registros[i].nome
        trEmail.innerHTML = "E-mail:" + registros[i].email
        trTelefone.innerHTML = "Telefone:" + registros[i].telefone
        trCep.innerHTML = "CEP:" + registros[i].cep
        trLogradouro.innerHTML = "Logradouro:" + registros[i].logradouro
        trNumero.innerHTML = "Número:" + registros[i].numero
        trBairro.innerHTML = "Bairro:" + registros[i].bairro
        trCidade.innerHTML = "Cidade:" + registros[i].cidade
        trEstado.innerHTML = "Estado:" + registros[i].estado
        trDivisao.innerHTML = "_______________________________________________________________________"

        divRegistro.appendChild(trId);
        divRegistro.appendChild(trNome);
        divRegistro.appendChild(trEmail);
        divRegistro.appendChild(trTelefone);
        divRegistro.appendChild(trCep);
        divRegistro.appendChild(trLogradouro);
        divRegistro.appendChild(trNumero);
        divRegistro.appendChild(trBairro);
        divRegistro.appendChild(trCidade);
        divRegistro.appendChild(trEstado);
        divRegistro.appendChild(trDivisao);
    
    }
}

function apagar () {
 
    let exclusao = formRegistro.exclusao.value
    
    if (exclusao == "") {
        alert("Selecione um Id para exclusão");
        formRegistro.exclusao.focus();
        return false;
    }
    let excluir = localStorage.getItem("salvo") ? JSON.parse(localStorage.getItem("salvo")) : [];
    excluir.splice(exclusao, 1)
    localStorage.setItem("salvo", JSON.stringify(excluir));
    window.location.href="registro.html"
}

function retornar() {
   
    window.location.href="index.html"

}