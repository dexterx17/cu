function main(){
	$('#juramento').on('click',function(event) {
		var juro = Lockr.get('jurament');
		if(typeof juro ==="undefined"){
			console.log('jurar');
			Lockr.set('jurament',1);
			captain.up(function() {
			  captain.action('jurar', {
			    entity: {
			      type: 'juramento',
			      name: 'Proteger el agua'
			    }
			  });
			});
		}else{
			new PNotify({
			    title: 'Actividad cumplida',
			    text: 'Ya recibiste 10 puntos por esta actividad',
			    type: 'success',
			});
			console.log('ud ya juro joven');
		}
	});

	$('#tarea1').on('click',function(event) {
		console.log('tarea1');
		captain.up(function() {
		   captain.action('revisar', {
		    entity: {
		      type: 'articulo',
		      name: 'Pachamama (madre tierra)',
		      url : 'http://www.kanobosur.com/2012/10/la-divinidad-pachamama-madre-tierra.html'
		    }
		  });
		});
	});

	$('#imagen1').on('click',function(event) {
		console.log('imagen');
		captain.up(function() {
		   captain.action('revisar', {
		    entity: {
		      type: 'articulo',
		      name: 'Pachamama (madre tierra)',
		      url : 'http://www.kanobosur.com/2012/10/la-divinidad-pachamama-madre-tierra.html'
		    }
		  });
		});
		setTimeout(function(){
			 var win = window.open('http://www.kanobosur.com/2012/10/la-divinidad-pachamama-madre-tierra.html', '_blank');
	  		 if (win) {
				    //Browser has allowed it to be opened
				    win.focus();
				} else {
				    //Browser has blocked it
				    alert('Por favor habilitar los Popups para este sitio');
				}
		},1500);
	});

	$('#tarea2').on('click',function(event) {
		console.log('tarea2');
		captain.up(function() {
		  captain.action('watch', {
		    entity: {
		      type: 'video',
		      platform:'youtube',
		      name: 'Historia de la Pachamama',
		      page_url: 'http://www.serpiente-amaru.com/course/view.php?id=2&section=1',
		      url : 'https://www.youtube.com/watch?time_continue=23&v=afJ63nTVaE8'
		    }
		  });
		});
	});

	$('#tarea3').on('click',function(event) {
		console.log('tarea3');
		captain.up(function() {
		   captain.action('cargar', {
		    entity: {
		      type: 'recurso',
		      name: 'Tema del foro',
		      tema: 'Tema del foro',
		      url : 'http://www.serpiente-amaru.com/mod/forum/view.php?id=2'
		    }
		  });
		});
	});

		$('#tarea4').on('click',function(event) {
		console.log('tarea4');
		captain.up(function() {
		   captain.action('revisar', {
		    entity: {
		      type: 'articulo',
		      name: 'Pachamama (madre tierra)',
		      url : 'http://www.rukuyaya.com.ec/index.php/amaru/'
		    }
		  });
		});
	});

	$('#audio').on('click',function(event) {
		console.log('audio');
		captain.up(function() {
		   captain.action('cargar', {
		    entity: {
		      type: 'audio',
		      name: 'Lo que he aprendido',
		      tema: 'Lo que he aprendido',
		      url : 'http://www.serpiente-amaru.com/mod/assign/view.php?id=13'
		    }
		  });
		});
	});

	$('#tarea5').on('click',function(event) {
		console.log('tarea5');
		captain.up(function() {
		   captain.action('revisar', {
		    entity: {
		      type: 'articulo',
		      name: 'Distribución del agua en el mundo',
		      url : 'https://issuu.com/juancamf/docs/el_agua_en_la_tierra'
		    }
		  });
		});
	});	

	$('#tarea6').on('click',function(event) {
		console.log('tarea6');
		captain.up(function() {
		   captain.action('revisar', {
		    entity: {
		      type: 'articulo',
		      name: 'Yaku en Ecuador',
		      url : 'http://www.serpiente-amaru.com/mod/page/view.php?id=22'
		    }
		  });
		});
	});
}
$(document).ready(main);