$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            order: "viewCount",
            maxResults: 10
       }); 
       request.execute(function(response) {
          var results = response.result;
          $("#youtube").html("");
          $.each(results.items, function(index, item) {
            $("#youtube").append(" <iframe class='video_container yt ' width='45%' height='auto' frameborder='5%' src='http://www.youtube.com/embed/"+item.id.videoId+"' allowfullscreen></iframe> ")
          });
          resetVideoHeight();
       });
    });
    $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight(){
  $(".video").css("height", $("#youtube").width() * 9/16);
}

function init(){
  gapi.client.setApiKey("");
  gapi.client.load("youtube", "v3", function(){
  });
}
