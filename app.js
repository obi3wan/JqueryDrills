$(document).ready(function () {

    $("form").submit(function () {
        let msg = $('#message').val();
        if (msg.length === 0) {
            $("#btn").prop("disabled", true);
        } else {
            alert(msg);
        }
    });

    $('<div></div>').appendTo('body');
    $('<ul></ul>').appendTo('div');

    $("form").submit(function (e) {
        e.preventDefault();
        let msg = $('#message').val();
        $('ul').append(`<li>${msg}</li>`);

    });

    $('ul').click(function (event) {
        console.log(event);
        $(event.target).css({
            'background-color': getRandomColor(),
            'border-radius': '30px'
        });
    });

    $('ul').dblclick(function (event) {
        $(event.target).remove();
    })

    function getRandomColor() {
        let randColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        return randColor;
    }
});