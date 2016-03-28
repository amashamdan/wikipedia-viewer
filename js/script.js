/* Without the document.ready, the form submission doesn't work since the code might run
before loading the DOM elements. */
$(document).ready(function(){
	/* The function to run once the search button is clicked or when enter is pressed. */
	$(".search-form").submit(function(event){
		/* To stop page from doing default action, and then execute the code below */
		event.preventDefault();
		/* The url for wikipedia api. Note jsonp data type. */
		var wikiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+
						$(".search-field").val() +'&format=json&callback=wikiCallback';
		$.ajax ({
	        url: wikiURL,
	        dataType: "jsonp",
	        success: function(response) {
	        	/* Upon response, the results header is appended. */
	        	$(".results").append("<h3 class='reasults-header'>Search results:</h3>");
	        	/* For each item in the results, a thread is appended to the results div
	        	which includes title, snippet and a link tp the corresponding wikipedia
	        	page. */
	        	for (var i = 0; i < response[1].length; i++){
	         		$(".results").append("<div class='result'><a href='" + response[3][i] + 
	         			"' target='blank'><p class='result-title'><strong>" + response[1][i] + 
	         			"</strong></p><p class='result-snippet'>" + response[2][i] + "</p></a>");
	         		/* The slideDown effect to display search results. */
	         		$(".result").slideDown();
	         	}
	        }
	    });
	});
});