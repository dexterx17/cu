$(document).ready(function() {
	var vio = Lockr.get('vista1');
	if(typeof vio ==="undefined"){
		Lockr.set('vista1',1);
	    setTimeout(function() {
	        captain.up(function() {
	            captain.action('revisar', {
	                entity: {
	                    type: 'articulo',
	                    name: 'Yaku en el Ecuador',
	                    url: 'http://www.serpiente-amaru.com/mod/page/view.php?id=22'
	                }
	            });
	        });
	    }, 5000);
	}else{
		new PNotify({
		    title: 'Actividad cumplida',
		    text: 'Ya recibiste 10 puntos por revisar <strong>Yaku en el Ecuador</strong>',
		    type: 'success',
		});
	}
});