(function(win,doc){
    'use strict'

    const mensagem = document.querySelector('#mensagem');
    mensagem.addEventListener('keyup', (event) => {
        let subtrai = event.target.maxLength - event.target.textLength;
        document.querySelector('.aviso').innerHTML = `Número de caracteres: ${subtrai}`;
        
    }, false);

})(window.document);
  