/******************************************************************************
*                   NEW HEADER IMAGE ANIMATION                                *
*******************************************************************************/
var animation = bodymovin.loadAnimation({
	container: document.getElementById('animatedHeader'),
	renderer: 'svg',

	autoplay: true,
	path: 'assets/js/data.json'
})
