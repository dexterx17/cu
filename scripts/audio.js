$(document).ready(function() {
    $('#mform1 input#id_submitbutton').on('click', function(e) {
        $('#mform1 input#id_submitbutton').val('Procesando...');
        captain.up(function() {
            captain.action('cargar', {
                entity: {
                    type: 'audio',
                    name: 'conocimiento adquirido sobre Amaru',
                    tema: 'conocimiento adquirido sobre Amaru',
                    url: location.href
                }
            });
        });
        setTimeout(function() {}, 2500);
    });
});