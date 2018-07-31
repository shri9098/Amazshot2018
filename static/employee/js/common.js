
// Changing the Header to Small while scroll
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 20,
            header = document.getElementById('site_header');
        if (distanceY > shrinkOn) {
            header.className='site_header_small';
            // classie.add(header,"site_header_small");
        } else {
            if (header.hasAttribute('class')) {
                header.removeAttribute('class');
            }
        }
    });
}
window.onload = init();

<!--Start of Tawk.to Script-->
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/58faf4264ac4446b24a6b800/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();
<!--End of Tawk.to Script-->

$('.button-collapse').sideNav({
    draggable: true // Choose whether you can drag to open on touch screens
    }
  );