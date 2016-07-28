$(document).ready(function(){
    $('.img-amaru2').on('click',function(){
		var vio = Lockr.get('img-amaru2');
		if(typeof vio ==="undefined"){
			Lockr.set('img-amaru2',1);

		    captain.up(function() {
		       captain.action('revisar', {
		         entity: {
		           type: 'articulo',
		           name: 'Aymara amaru el agua',
		           url : 'http://www.rukuyaya.com.ec/index.php/amaru/'
		        }
		      });
		    });

			new PNotify({
			    title: 'Abriendo recurso',
			    text: 'Ganas 10 puntos por esta actividad, recuerda que debes habilitar las ventanas emergentes(popups) en tu navegador',
			    type: 'success',
			});

   			setTimeout(function(){
				var win = window.open('http://www.rukuyaya.com.ec/index.php/amaru/', '_blank');
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
			    text: 'Ya recibiste 10 puntos por revisar <strong>Aymara amaru el agua</strong>',
			    type: 'success',
			});
			console.log('ud ya vio esto joven');
			var win = window.open('http://www.rukuyaya.com.ec/index.php/amaru/', '_blank');
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
