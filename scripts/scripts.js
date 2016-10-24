$('#updateclick').click(function(){
	$('html, body').animate({
		scrollTop: $('#updates').offset().top-83}, 'slow');
});

$('#homeclick').click(function(){
	$('html, body').animate({
		scrollTop: $('#mainpage').offset().top}, 'slow');
});

//when page is scrolled//
function heatherscroll(occur){
	occur.preventDefault();
	var heather = document.getElementById('titlesection');
	yPos = window.pageYOffset;
	if (yPos > 300){
		heather.style.backgroundColor = 'rgba(0, 0, 0, 1)';
		heather.style.width = '100%';
	}
	else {
		heather.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
		heather.style.width = '200px';
	}
}
window.addEventListener('scroll', heatherscroll, false);
$(document).ready(function(){
//set the time and date//
	$('#datedate').text(ledate);
	$('#datetime').text(letime);

var ledefault = 'America/Mexico_City';
var leday = moment().tz(ledefault).format('dddd');
var ledate = moment().tz(ledefault).format(leday+', '+'MMM'+' '+'gg');
var letime = moment().tz(ledefault).format('h'+':'+'mm'+':ss'+' '+'a');

function trackdate(){
var ledate = moment().tz(ledefault).format('dddd'+', '+'MMM'+' '+'gg');
$('#datedate').text(ledate);}
	
function tracktime(){
//track the time and date//	
var ledefault = 'America/Mexico_City';
var ledate = moment().tz(ledefault).format('dddd'+', '+'MMM'+' '+'gg');
var letime = moment().tz(ledefault).format('h'+':'+'mm'+':ss'+' '+'a');	
	$('#datetime').text(letime);}	
setInterval(tracktime, 1000);
setInterval(trackdate, 1000);
//change background based on dates//
if ( (leday) === 'Friday' ){ 
	$('#mainpagesheet').css('background-image', 'url(img/fridays.jpg)'); 
	$('#mainpagesheet').fadeIn();
}
else if ( (leday) === 'Sunday' ){
	$('#mainpagesheet').css('background-image', 'url(img/sundays.jpg)');
	$('#mainpagesheet').fadeIn();
}
else if ( (leday) === 'Monday' ){
	$('#mainpagesheet').css('background-image', 'url(img/mondays.jpg)');
	$('#mainpagesheet').fadeIn();
}
//weather//
function findweather(){
$.getJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22houston%2C%20tx%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(delta){
	var weathercon = delta.query.results.channel.item.condition.text;
	
	$('#currentweather').html(delta.query.results.channel.item.condition.temp);
	$('#currentstate').html(weathercon);
	
	if ( weathercon === "Sunny" )
	{ $('#aicon').html('<i class="wi wi-day-sunny"></i>'); }
	else if (weathercon === "Partly Cloudy")
	{ $('#aicon').html('<i class="wi wi-cloud"></i>'); }
	else if (weathercon === "Mostly Cloudy")
	{ $('#aicon').html('<i class="wi wi-cloudy"></i>'); }	
});
}
setInterval(findweather, 300000);	
findweather();
});