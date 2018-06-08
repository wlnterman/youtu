/*key 
AIzaSyC6EY2yh0-AAei226sgYsWIe5gusv8P_08
*/
mouse = false;

list = document.getElementById("list");
var temp = "";
for (var i = 1; i <= 20; i++) {
	temp += "<li  class='scrblock'>"+
				"<div>"+
					"<img class='imgvid' src='preview.jpg'>"+
					"<p>МСТИТЕЛИ: ВОЙНА БЕСКОНЕЧНОСТИ финальный Трейлер (Русский) 2018</p>"+
					"<p>Description MELOVIN represented Ukraine at the Grand Final of the 2018 Eurovision Song Contest with the song Under The Ladder. Read more about MELOVIN: https://eurovision.tv/participant/mel...</p>"+
					"<p>Опубликовано: 16 мар. 2018 г.</p>"+
					"<p>Автор: FilmSelect Россия</p>"+
				"</div>"+
			"</li>";
}

list.innerHTML = temp;

document.onmousedown = event => {
	mouse = true;
	// alert('Запрос отправлен')
}

//swipe (доделать)
document.onmousemove = event => {
	if (mouse){
		if (document.all)  { 
    		  x = event.x + document.body.scrollLeft; 
    		  y = event.y + document.body.scrollTop; 
    	// Для остальных браузеров
    	} else {
    	  x = e.pageX; // Координата X курсора
    	  y = e.pageY; // Координата Y курсора
    	}
    // document.getElementById("coords").innerHTML = "X : " + x + ", Y : " + y;

	}
	// alert('Запрос отправлен')
}

document.onmouseup = event => {
	mouse = false;
	// alert('Запрос отправлен')
}

document.onkeydown = event => {
var key = event.keyCode;
if (key == 13) {
		alert('Запрос отправлен')
	}
}

var request = '';



function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyC6EY2yh0-AAei226sgYsWIe5gusv8P_08');
}
 
// Called when the search button is clicked in the html code
function search() {
    var query = document.getElementById('query').value;
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q:query,
        maxResults: 20
    });
    // Send the request to the API server, call the onSearchResponse function when the data is returned
    request.execute(onSearchResponse);
}
// Triggered by this line: request.execute(onSearchResponse);
function onSearchResponse(response) {
   console.log(response)
}

document.getElementById("searchit").addEventListener("click", function(){
	search();
});


 // document.getElementById("searchit").addEventListener("click", buildApiRequest('GET',
 //                '/youtube/v3/search',
 //                {'maxResults': '20',
 //                 'part': 'snippet',
 //                 'q': 'surfing',
 //                 'type': ''});;
 // });

 // document.getElementById("searchit").addEventListener("click", buildApiRequest('GET',
 //                '/youtube/v3/videos',
 //                {'id': 'Ks-_Mh1QhMc',
 //                 'part': 'snippet,contentDetails,statistics'});
 // });


// // After the API loads, call a function to enable the search box.
// function handleAPILoaded() {
// 	document.getElementById("search-button").disabled = false;
//   // $('#search-button').attr('disabled', false);
// }

// // Search for a specified string.
// function search() {
// 	var q = document.getElementById("query").val();
//   // var q = $('#query').val();
//   var request = gapi.client.youtube.search.list({
//     q: q,
//     part: 'snippet'
//   });

//   request.execute(function(response) {
//     var str = JSON.stringify(response.result);
//     $('#search-container').html('<pre>' + str + '</pre>');
//   });
// }


// {
//   "kind": "youtube#searchListResponse",
//   "etag": etag,
//   "nextPageToken": string,
//   "prevPageToken": string,
//   "regionCode": string,
//   "pageInfo": {
//     "totalResults": integer,
//     "resultsPerPage": integer
//   },
//   "items": [
//     search Resource
//   ]
// }


// onmousedown\up\move