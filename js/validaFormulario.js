//seleciona todos os campos que possui required
const campos = document.querySelectorAll("[required]");

function ValidarCampo(campo) {
    // Lógica para verificar se existem erros
    function verificarErros() {
        let encontraErro = false;
        for (let erro in campo.validity) {
            //se n for customError, então verifica se há erro
            if (campo.validity[erro] && !campo.validity.valid) {
                encontraErro = erro;
            }
        }
        return encontraErro;
    }
    function mensagemcustomizada(typeErro) {
        const messages = {
            text: {
                valueMissing: "Por favor preencha este campo"
            },
            email: {
                valueMissing: "Email é obrigatório",
                typeMismatch: "Por favor preencha um e-mail válido"
            },
            textarea: {
                valueMissing: "Por favor, digite uma mensagem"
            }
        }
        return messages[campo.type][typeErro];
    }
    function ConfigCustomMessage(message) {
        const spanErro = campo.parentNode.querySelector(".erro");
        if (message) {
            spanErro.classList.add("active");
            spanErro.innerHTML = message;
        } else {
            spanErro.classList.remove("active");
            spanErro.innerHTML = "";
        }
    }
    //mudança da cor de borda e da fonte quando o erro aparecer
    return function () {
        const erro = verificarErros();
        if (erro) {
            const message = mensagemcustomizada(erro);
            campo.style.borderColor = "tomato";
            ConfigCustomMessage(message);
        } else {
            campo.style.borderColor = "forestgreen";
            ConfigCustomMessage();
        }
    }
}
function validacaoCustomizada(event) {
    const campo = event.target;
    const validacao = ValidarCampo(campo);
    validacao();
}

//adiciona escutador para cada campo individualmente
for (campo of campos) {
    campo.addEventListener("invalid", event => {
        //eliminar o bubble
        event.preventDefault();
        validacaoCustomizada(event);
    });
    campo.addEventListener("blur", validacaoCustomizada);
    campo.addEventListener("change", validacaoCustomizada);
}

//coloca um listener no botão do form
document.querySelector("form").addEventListener("submit", event => {
    //console.log("Enviar o Formulário");
    event.preventDefault();
});