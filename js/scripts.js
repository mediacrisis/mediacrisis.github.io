if (window.history) {
	var myOldUrl = window.location.href;
	window.addEventListener('hashchange', function(){
		// grab hash tag
		var curHash = window.location.hash.slice(1);
		// add active class to current section, reset others
		var navLinks = this.document.getElementsByClassName('navlink');
		var navArray = Array.from(navLinks);
		navArray.forEach(link => {
			link.classList.remove('active');
		});
		if (curHash !== 'top') {
			this.document.getElementById('nav-'+ curHash).classList.add('active');
		}
		// hide hash in url
		window.history.pushState({}, null, myOldUrl);
	});
}