$(document).ready(function() {
    $('#mformforum input#id_submitbutton').on('click', function(e) {
        $('#mformforum input#id_submitbutton').val('Procesando...');
        captain.up(function() {
            captain.action('publicar', {
                entity: {
                    type: 'foro',
                    name: $('#id_subject').val(),
                    url: location.href
                }
            });
        });
        setTimeout(function() {}, 2500);
    });
});