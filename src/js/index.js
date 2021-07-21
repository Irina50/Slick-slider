
$('.creators__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  arrows: true,
  variableWidth: true,
  prevArrow: '<button type="button" class="btn slick-btn slick-prev"><img src="img/arrow-prev.svg" alt="prev"></button>',
  nextArrow: '<button type="button" class="btn slick-btn slick-next"><img src="img/arrow-next.svg" alt="prev"></button>',
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
$('.slide__btn--create').on('click', function() {
  const div = $(`<div class="slide creators__slide">
          <img src="img/slide-3.jpg" alt="slide" class="creators__img">
          <div class="slide__inner">
            <div class="slide__content">
              <p class="slide__title">Bridget Phetasy</p>
              <p class="slide__text">Get exclusive content. Interact with Bridget.</p>
              <p class="slide__text--hidden">Get exclusive content. Interact with Bridget. Verified Nobody. My
                tribe is tribeless. Captain of the Fence Riding Team.
                Fiddling while Rome burns. Find another hero.</p>
            </div>
            <a href="#" class="slide__btn slide__btn--join">Join community</a>
          </div>
        </div>`);
  $('.creators__slider').slick('slickAdd', div);

});

if(window.matchMedia('(min-width: 768px)').matches){
	$('.creators__slider').on('click', function( ) {
   if( $('.slick-prev').attr('aria-disabled') == 'false' ){
  $(this).addClass('_active');  
 }
 else {
     $(this).removeClass('_active');
  }
});
};


if(window.matchMedia('(max-width: 768px)').matches){
	$('.creators__slider').addClass('_active');
};


$('.header__btn').on('click', function() {
 $('.login').addClass('_active');
 $('.popup__bg').addClass('_active');

});
if(window.matchMedia('(max-width: 500px)').matches){
	$('.header__avatar').on('click', function() {
 $('.login').addClass('_active');
  $('.popup__bg').addClass('_active');

});
};

$('.popup__bg').on('click', function() {
   $('.login').removeClass('_active');
    $('.popup__bg').removeClass('_active');
});

