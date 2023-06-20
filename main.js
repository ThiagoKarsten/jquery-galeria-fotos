$(document).ready(function(){
/*O jQuery funciona atraves do cifrão e dos parenteses 
* Selecionando o botão "Nova Imagem com jQuery, para que quando clicar nele faça as ações que tem dentro das chaves"*/
    $('header button').click(function(){ 
        $('form').slideDown(); /* Fazendo com que o formulario apareça apos clicar no botão com "slideDown"*/
})
    $('#botao-cancelar').click(function(){
        $('form').slideUp(); /* Recolhendo o formulário através do "slideUp"*/
})
    $('form').on('submit', function(e){
        e.preventDefault(); /* Tirando a atualização da pagina apos clicar no botão*/
        var enderecoNovaImagem = $('#endereco-imagem-nova').val(); /* Usamos ".val" para o jQuery ao inves de ".value" */
        var novoItem = $('<li style="display: none"></li>'); /* Colocando "display:none" para que possamos fazer o efeito de surgir na imagem na linha "25"*/
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);/* Adicionando a nova imagem ao site | O "appendTo" coloca o codigo que esta antes dele dentre os "<li>" da linha 14 */
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); /* Efeito de surgir na tela através do "fadeIn" */
        $('#endereco-imagem-nova').val('') /* apagando o formulario apos clicar no botão */
    })
})