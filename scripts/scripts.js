body {overflow: hidden;}
//when page is scrolled//
function yScroll(){
	var header = document.getElementsByTagName('header')[0];
	yPos = window.pageYOffset;
	if (yPos > 200){
		header.style.backgroundColor = "rgba(0,0,0,1)";
		header.style.top = "14%";		
		header.style.left = "0%";
		header.style.marginLeft = "0px";}
	else {
		header.style.backgroundColor = "rgba(0,0,0,0.8)";
		header.style.top = "50%";		
		header.style.left = "50%";
		header.style.marginLeft = "-200px";}
}

function heatherscroll(){
	
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

window.addEventListener('scroll', heatherscroll);
window.addEventListener('scroll', yScroll);
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
//change image based on dates//
if ((leday) === 'Sunday'){$('#mainpage').css('background-image', 'url(img/sundays.jpg)');}
else if ((leday) === 'Monday'){$('#mainpage').css('background-image', 'url(img/mondays.jpg)');}
//weather//
function findweather(){
$.getJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22houston%2C%20tx%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(delta){
	$('#currentweather').html(delta.query.results.channel.item.condition.temp);
	$('#currentstate').html(delta.query.results.channel.item.condition.text);
});	
}

//weather icons//
function iconcheck(){
	if ($('#currentstate:contains("Partly Cloudy")'))
	{ $('#aicon').html('<i class="wi wi-cloud"></i>'); }
}

setInterval(findweather, 300000);	
setInterval(iconcheck, 300000);
findweather();
iconcheck();
});