$("form").on("submit"), function(e) {
    e.preventDefaul();

}

$('#toda-list li:first').remove();


$("#add-button").click(function () {
    const novaTarefa = $('#todo-input').val();
    

    if (novaTarefa.trim() !== '') {
        const novoItem = $('<li></li>').text(novaTarefa);
    
    $(`#toda-list`).append(novoItem);

    $(`#todo-input`).val('');
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
});

const tarefaFeita = document.querySelector('ul');

tarefaFeita.addEventListener('click', function (e) {
    if(e.target.classList.contains('completed')) {
        e.target.classList.remove('completed');
    }else{
        e.target.classList.add('completed');
    }
})

