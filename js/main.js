var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper');
var $shuttleSection = $('.shuttle-section');
var $shuttle = $('.shuttle');
var $shipsSection = $('.ships-section');
var $ships = $('.ships');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos / 2 + 'px')
});

$dipperSection.waypoint(function () {
	$dipper.addClass('js-dipper-fade');
}, { offset: '50%' });

$shuttleSection.waypoint(function () {
	$shuttle.addClass('js-shuttle-fade');
}, { offset: '50%' });

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$shuttle.css('transform', 'slide(' + scrollPos / 5 + 'deg)');
	$shuttleSection.css('background-position', 'center ' + scrollPos / 2 + 'px')
});

$shipsSection.waypoint(function () {
	$ships.addClass('js-ships-fade');
}, { offset: '50%' });

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$ships.css('transform', 'slide(' + scrollPos / 5 + 'deg)');
	$shipsSection.css('background-position', 'center ' + scrollPos / 2 + 'px')
});