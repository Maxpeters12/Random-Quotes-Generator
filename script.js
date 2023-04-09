const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote(url){
	const response = await fetch(url);
	var data = await response.json();
	quote.innerHTML = data.content;
	author.innerHTML = data.author;
}

getquote(api_url);

	function tweet(){
		window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "--- by" + author.innerHTML, "Tweet window", "width=600, height=300");
	}
	function share(){
		window.open("https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v16.0" + quote.innerHTML + "--- by" + author.innerHTML, "share window", "width=600, height=300");
	}
