$(window).scroll(function () {
	if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {

		setTimeout(function() {
			$('.spinner').css('display', 'initial');
		}, 1000);

		setTimeout(function() {
			$('.loading').css('display', 'initial');
		}, 1000);

		setTimeout(function() {
			$('.hidden-tweet').css('display', 'initial');
		}, 2000);

		setTimeout(function() {
			$('.spinner').css('display', 'none');
		}, 2000);

		setTimeout(function() {
			$('.loading').css('display', 'none');
		}, 2000);
	}
});

$('.new_tweet_input').focusin(function(){
	$('.new_tweet_container').animate({height: '+=100px'},'fast');
	$('.new_tweet_input').animate({height: '+=50px'},'fast');
	$('.hidden_buttons').show();
	$('.suggestions').css('margin-top','110px')
});
$('.new_tweet_input').focusout(function(){
	$('.suggestions').css('margin-top','0px')
	$('.new_tweet_container').animate({height: '-=100px'},'fast');
	$('.new_tweet_input').animate({height: '-=50px'},'fast');
	$('.hidden_buttons').hide();
});