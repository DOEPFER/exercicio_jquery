$(document).ready(function () {
    
    const tasks = [];
    let taskList = '';

    function insertTask (taskName) {
        const taskNameValue = taskName.val();

        const newTask = `<li>${taskNameValue}</li>`;
        tasks.push(taskNameValue);

        taskList += newTask;

        $('#taskList').html(taskList);
        $('#taskList').slideDown();
    };

    function ltTask () {
        $(this).addClass('lt_task');
        taskList = $('#taskList').html();
    };

    function formSubmit (event) {
        event.preventDefault();
        
        const taskName = $('#taskName');

        if (taskName.val()) {
            if (!tasks.includes(taskName.val())) {
                insertTask(taskName);    
            } else {
                alert('Já existe uma atividade com esse nome/descrição.')
            };
            taskName.val('');
        };
    };

    $('form').on('submit', formSubmit);
    // $('li').on('click', ltTask);
    $('ul').on('click', 'li', ltTask);

});