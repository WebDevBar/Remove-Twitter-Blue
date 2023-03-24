function remove_twitter_blue() {
	if (window.location.hostname == 'twitter.com') {
		document.querySelector("nav a[aria-label='Twitter Blue']").style.display = 'none';
		document.querySelector("nav a[aria-label='Twitter Blue']").style.pointerEvents = 'none';
		document.querySelector("nav a[href^='/i/twitter_blue_sign_up']").style.display = 'none';
		document.querySelector("nav a[href^='/i/twitter_blue_sign_up']").style.pointerEvents = 'none';
	}
}

document.addEventListener("DOMContentLoaded", function (event) { 
	remove_twitter_blue();
});
