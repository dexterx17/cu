$(document).ready(function() {
	var vio = Lockr.get('vista2');
	if(typeof vio ==="undefined"){
		Lockr.set('vista2',1);
	    setTimeout(function() {
	        captain.up(function() {
	            captain.action('revisar', {
	                entity: {
	                    type: 'articulo',
	                    name: 'Qué hacer para salvar a YAKU en el hogar?',
	                    url: 'http://www.serpiente-amaru.com/mod/forum/view.php?id=34'
	                }
	            });
	        });
	    }, 5000);
	}else{
		new PNotify({
		    title: 'Actividad cumplida',
		    text: 'Ya recibiste 10 puntos por revisar <strong>Qué hacer para salvar a YAKU en el hogar?</strong>',
		    type: 'success',
		});
	}
});