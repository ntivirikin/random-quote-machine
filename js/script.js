$(document).ready(function(){

		function getQuote() {
			$.ajax ({
				cache: false,
				dataType: "jsonp",
				crossDomain: true,
				jsonpCallback: "parseQuote",
				url: "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=parseQuote"
			})

			.done(function(json){

				if (json.quoteAuthor == '' || json.quoteAuthor == ' ') {

					$("#quotedText").text(json.quoteText);
					$("#quotedAuthor").text("Anonymous");
					tweetText = json.quoteText;
					tweetAuthor = "Anonymous";

				} else {

					$("#quotedText").text(json.quoteText);
					$("#quotedAuthor").text(json.quoteAuthor);
					tweetText = json.quoteText;
					tweetAuthor = json.quoteAuthor;
				}

			})

			.fail(function(xhr, status, errorThrown) {

				alert("An error occurred!");
				console.log("Error: " + errorThrown);
			})

		};

		$("#quoteButton").click(function(){
			getQuote();
			$("#quotedText").show();
			$("#quotedAuthor").show();
			$("#tweetQuote").show();
		});

		$("#tweetQuote").click(function(){
			window.open('https://twitter.com/intent/tweet?text=' + tweetText + '- '+ tweetAuthor);
		});

});
