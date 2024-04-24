$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault(); // Evitar o comportamento padrão do formulário

        // Pegar o valor da tarefa do input
        var taskName = $('#task-input').val();

        // Adicionar a tarefa como um novo item de lista
        $('#task-list').append('<li>' + taskName + '</li>');

        // Limpar o input após adicionar a tarefa
        $('#task-input').val('');
    });

    // Adicionar evento de clique aos itens da lista
    $(document).on('click', '#task-list li', function() {
        $(this).toggleClass('completed'); // Alternar classe completed para aplicar ou remover o efeito de linha através do CSS
    });
});