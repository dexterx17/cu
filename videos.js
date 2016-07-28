  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;

  function onYouTubePlayerAPIReady() {
    player = new YT.Player('video1', {
      height: '390',
      width: '640',
      videoId: 'afJ63nTVaE8',
       events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
    });
    function onPlayerReady(event) {
     console.log('video listo');
    }

    // when 
    function onPlayerStateChange(event) { 
      alert(event.data);
      if(event.data>=1){
        var video1 = Lockr.get('video1');
        if(typeof video1 ==="undefined"){
          console.log('jura1');
          Lockr.set('video1',1);
          captain.up(function() {
            captain.action('ver', {
              entity: {
                type: 'video',
                platform:'youtube',
                name: 'Historia de la Pachamama',
                page_url: 'http://www.serpiente-amaru.com/course/view.php?id=2&section=1',
                url : 'https://www.youtube.com/watch?time_continue=23&v=afJ63nTVaE8'
              }
            });
          });
        }else{
          console.log('ud ya vio esto joven');
          new PNotify({
              title: 'Actividad cumplida',
              text: 'Ya recibiste 10 puntos por esta actividad',
              type: 'success',
          });
        }

      }
    }

  }