const container = document.querySelector('.processes__items');
const imgPro = document.querySelector('.processes__img');


container.addEventListener('click', function(e) {
	const items = document.querySelectorAll('.processes__item');
	const target = e.target;
  Array.from(items).forEach(item => {
    item.lastElementChild.classList.remove('active');
  	item.classList.remove('active');
  });
  target.parentNode.classList.add('active');
  target.parentNode.lastElementChild.classList.add('active');
})

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    items:2,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})