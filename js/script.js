$(document).ready(function(){
	$(".search-form").submit(function(event){
		event.preventDefault();
		var wikiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+
						$(".search-field").val() +'&format=json&callback=wikiCallback';
		$.ajax ({
	        url: wikiURL,
	        dataType: "jsonp",
	        success: function(response) {
	        	for (var i = 0; i < response[1].length; i++){
	         		$(".results").append("<div class='result'><a href='" + response[3][i] + 
	         			"' target='blank'><p>" + response[1][i] + "</p><p>" + response[2][i] + 
	         			"</p></a>");
	         	}
	        }
	    });
	});
});