$(function() {
	var pushy = $('.pushy'), //menu css class
		body = $('body'),
		push = $('.push'), //css class to add pushy capability
		pushyActiveClass = "pushy-active", //css class to toggle site overlay
		menuWidth = pushy.width() + "px"; //jQuery fallback menu width

    $('.menu-btn').on('click', function(){
        body.addClass(pushyActiveClass); //toggle site overlay
        pushy.animate({left: "0px"}, 200);
        push.removeClass('pushy-left');
    });
    $('.site-overlay').on('click', function(){
        body.removeClass(pushyActiveClass); //toggle site overlay
        pushy.animate({left: "-" + menuWidth}, 100);
    });

});