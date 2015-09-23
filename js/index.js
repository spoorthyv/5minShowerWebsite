(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
var a='data-lazy'; if($('.gallery .slide0').hasAttr('src')) { a='src'; } $('.gallery .slide0').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/4.7-inch-iphone-6-screenshot-1-990.jpg' : 'images/4.7-inch-iphone-6-screenshot-1-660.jpg') : 'images/4.7-inch-iphone-6-screenshot-1-330.jpg');
var a='data-lazy'; if($('.gallery .slide1').hasAttr('src')) { a='src'; } $('.gallery .slide1').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/4.7-inch-iphone-6-screenshot-2-990.jpg' : 'images/4.7-inch-iphone-6-screenshot-2-660.jpg') : 'images/4.7-inch-iphone-6-screenshot-2-330.jpg');
var a='data-lazy'; if($('.gallery .slide2').hasAttr('src')) { a='src'; } $('.gallery .slide2').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/4.7-inch-iphone-6-screenshot-3-990.jpg' : 'images/4.7-inch-iphone-6-screenshot-3-660.jpg') : 'images/4.7-inch-iphone-6-screenshot-3-330.jpg');
var a='data-lazy'; if($('.gallery .slide3').hasAttr('src')) { a='src'; } $('.gallery .slide3').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/4.7-inch-iphone-6-screenshot-4-990.jpg' : 'images/4.7-inch-iphone-6-screenshot-4-660.jpg') : 'images/4.7-inch-iphone-6-screenshot-4-330.jpg');
$('.img-2').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/madewithsparkle-12.png' : 'images/madewithsparkle-8.png') : 'images/madewithsparkle-4.png');};
$(window).resize(r);
r();
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.img').attr('src', 'images/download_on_the_app_store_badge_us-uk_135x40-174.png');

}
$('.gallery .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 300,dots: false,arrows: false,infinite: true,autoplay: true,autoplaySpeed: 2000});
});