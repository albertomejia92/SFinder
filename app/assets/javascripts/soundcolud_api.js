SC.initialize({
  client_id: '0e43f3b794fdcc9ee9b17298c096fe7a'
});

function soundcloud () {
  SC.get('/tracks', { q: encodeURIComponent($("#search").val()).replace(/%20/g, "+") }, function (tracks) {
   $(tracks).each(function(index, track) {
     $('#soundcloud').append($('<li class='+'sound_clip'+' id='+'video'+index+'></li>'));
     SC.oEmbed(track.permalink_url, document.getElementById('video'+index))
    });
  });
}