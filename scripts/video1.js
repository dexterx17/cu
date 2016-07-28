var params = { allowScriptAccess: "always" };
var atts = { id: "myytplayer" };
swfobject.embedSWF("http://www.youtube.com/v/afJ63nTVaE8?enablejsapi=1&playerapiid=ytplayer&version=3",
                   "ytapiplayer", "500", "400", "8", null, null, params, atts);
var ytplayer;

  function onYouTubePlayerReady(playerId) {
  console.log('onYouTubePlayerReady');
  if(typeof ytplayer==="undefined"){
    ytplayer = document.getElementById("myytplayer");
    ytplayer.addEventListener("onStateChange", "onytplayerStateChange");
  }

}

function onytplayerStateChange(newState) {
   console.log('onytplayerStateChange');
   if(newState==1){
    var video1 = Lockr.get('video1');
    if(typeof video1 ==="undefined"){
      console.log('ver video 1');
      Lockr.set('video1',1);
      captain.up(function() {
        captain.action('mirar', {
          entity: {
            type: 'video',
            platform:'youtube',
            name: 'Historia de la Pachamama',
            page_url: 'http://www.serpiente-amaru.com/course/view.php?id=2&section=1',
            url : 'https://www.youtube.com/watch?v=afJ63nTVaE8'
          }
        });
      });
    }else{
      console.log('ud ya vio el video 1');
      new PNotify({
          title: 'Actividad cumplida',
          text: 'Ya recibiste 10 puntos por esta actividad',
          type: 'success',
      });
    }
  }
} 