//funcao de iniciar modal vai incluir uma classe chamada mostrar na div container.

function iniciaModal(IdModal) {
    const modal = document.getElementById(IdModal);
    if (modal) {
        modal.classList.add('mostrar');

        //add escutador de evento para remover a modal
        modal.addEventListener('click', (e) => {
            if (e.target.id == IdModal || e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
            }
        });
    }
}

//adiciona escutador de evento no botão saiba mais para que a modal inicie assim que clicado.
const botao = document.querySelector('.saiba-mais');
botao.addEventListener('click', () => iniciaModal('modal-promocao'));