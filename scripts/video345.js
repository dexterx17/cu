var params = { allowScriptAccess: "always" };
var atts = { id: "myytplayer" };
swfobject.embedSWF("http://www.youtube.com/v/hae6v0KOe1o?enablejsapi=1&playerapiid=ytplayer&version=3",
                   "ytapiplayer3", "600", "400", "8", null, null, params, atts);

swfobject.embedSWF("http://www.youtube.com/v/KrISdRMNf3E?enablejsapi=1&playerapiid=ytplayer&version=3",
                   "ytapiplayer4", "600", "400", "8", null, null, params, atts);

swfobject.embedSWF("http://www.youtube.com/v/nON_lfXKM2k?enablejsapi=1&playerapiid=ytplayer&version=3",
                   "ytapiplayer5", "600", "400", "8", null, null, params, atts);
var ytplayer3;
var ytplayer4;
var ytplayer5;

function onYouTubePlayerReady(playerId) {
  console.log('onYouTubePlayerReady');
  if(typeof ytplayer3==="undefined"){
    ytplayer3 = document.getElementById("myytplayer3");
    ytplayer3.addEventListener("onStateChange", "onytplayerStateChange3");
  }
  if(typeof ytplayer4==="undefined"){
    ytplayer4 = document.getElementById("myytplayer4");
    ytplayer4.addEventListener("onStateChange", "onytplayerStateChange4");
  }

  if(typeof ytplayer5==="undefined"){
    ytplayer5 = document.getElementById("myytplayer5");
    ytplayer5.addEventListener("onStateChange", "onytplayerStateChange5");
  }

}

function onytplayerStateChange3(newState) {
   console.log('onytplayerStateChange');
   if(newState==1){
    var video3 = Lockr.get('video3');
    if(typeof video3 ==="undefined"){
      console.log('ver video 3');
      Lockr.set('video3',1);
      captain.up(function() {
        captain.action('mirar', {
          entity: {
            type: 'video',
            platform:'youtube',
            name: 'La contaminación y el desperdicio de agua',
            page_url: 'http://www.serpiente-amaru.com/course/view.php?id=2&section=3',
            url : 'https://www.youtube.com/watch?v=hae6v0KOe1o'
          }
        });
      });
    }else{
      console.log('ud ya vio el video 3');
      new PNotify({
          title: 'Actividad cumplida',
          text: 'Ya recibiste 10 puntos por ver <strong>La contaminación y el desperdicio de agua</strong>',
          type: 'success',
      });
    }
  }
}

function onytplayerStateChange4(newState) {
   console.log('onytplayerStateChange');
   if(newState==1){
    var video4 = Lockr.get('video4');
    if(typeof video4 ==="undefined"){
      console.log('ver video 4');
      Lockr.set('video4',1);
      captain.up(function() {
        captain.action('mirar', {
          entity: {
            type: 'video',
            platform:'youtube',
            name: 'Qué es la contaminación del agua',
            page_url: 'http://www.serpiente-amaru.com/course/view.php?id=2&section=3',
            url : 'https://www.youtube.com/watch?v=KrISdRMNf3E'
          }
        });
      });
    }else{
      console.log('ud ya vio el video 4');
      new PNotify({
          title: 'Actividad cumplida',
          text: 'Ya recibiste 10 puntos por ver <strong>Qué es la contaminación del agua</strong>',
          type: 'success',
      });
    }
  }
}
function onytplayerStateChange5(newState) {
   console.log('onytplayerStateChange');
   if(newState==1){
    var video5 = Lockr.get('video5');
    if(typeof video5 ==="undefined"){
      console.log('ver video 5');
      Lockr.set('video5',1);
      captain.up(function() {
        captain.action('mirar', {
          entity: {
            type: 'video',
            platform:'youtube',
            name: 'Desperdicio de Agua',
            page_url: 'http://www.serpiente-amaru.com/course/view.php?id=2&section=3',
            url : 'https://www.youtube.com/watch?v=nON_lfXKM2k'
          }
        });
      });
    }else{
      console.log('ud ya vio el video 5');
      new PNotify({
          title: 'Actividad cumplida',
          text: 'Ya recibiste 10 puntos por ver <strong>Desperdicio de Agua</strong>',
          type: 'success',
      });
    }
  }
} 