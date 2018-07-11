$(document).ready(function () {
$('.location-photo li').hover(function (e) { 
    e.preventDefault();
    $(this).find('h4,p,img').toggleClass('active');
});

});