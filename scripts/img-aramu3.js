$(document).ready(function(){
    $('.img-amaru3').on('click',function(){
		var vio = Lockr.get('img-amaru3');
		if(typeof vio ==="undefined"){
			Lockr.set('img-amaru3',1);

		    captain.up(function() {
		       captain.action('revisar', {
		         entity: {
		           type: 'articulo',
		           name: 'El agua en la tierra',
		           url : 'https://issuu.com/juancamf/docs/el_agua_en_la_tierra'
		        }
		      });
		    });

			new PNotify({
			    title: 'Abriendo recurso',
			    text: 'Ganas 10 puntos por esta actividad, recuerda que debes habilitar las ventanas emergentes(popups) en tu navegador',
			    type: 'success',
			});

   			setTimeout(function(){
				var win = window.open('https://issuu.com/juancamf/docs/el_agua_en_la_tierra', '_blank');
		  		if (win) {
				    //Browser has allowed it to be opened
				    win.focus();
				} else {
				    //Browser has blocked it
				    alert('Por favor habilitar los Popups para este sitio');
				}
			},1500);

		}else{
			new PNotify({
			    title: 'Actividad cumplida',
			    text: 'Ya recibiste 10 puntos por revisar <strong>El agua en la tierra</strong>',
			    type: 'success',
			});
			console.log('ud ya vio esto joven');
			var win = window.open('https://issuu.com/juancamf/docs/el_agua_en_la_tierra', '_blank');
	  		if (win) {
			    //Browser has allowed it to be opened
			    win.focus();
			} else {
			    //Browser has blocked it
			    alert('Por favor habilitar los Popups para este sitio');
			}
		}
  });
});
