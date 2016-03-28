/* Without the document.ready, the form submission doesn't work since the code might run
before loading the DOM elements. */
$(document).ready(function(){
	
	$(".search-form").submit(function(event){
		event.preventDefault();
		var wikiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+
						$(".search-field").val() +'&format=json&callback=wikiCallback';
		$.ajax ({
	        url: wikiURL,
	        dataType: "jsonp",
	        success: function(response) {
	        	$(".results").append("<h3 class='reasults-header'>Search results:</h3>");
	        	for (var i = 0; i < response[1].length; i++){
	         		$(".results").append("<div class='result'><a href='" + response[3][i] + 
	         			"' target='blank'><p class='result-title'><strong>" + response[1][i] + 
	         			"</strong></p><p class='result-snippet'>" + response[2][i] + "</p></a>");
	         		$(".result").slideDown();
	         	}
	        }
	    });
	});
});