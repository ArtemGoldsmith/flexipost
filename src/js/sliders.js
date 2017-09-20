module.exports = function() {
  // $('#categories-slider').owlCarousel({
  //   loop: true,
  //   items: 5,
  //   nav: true,
  //   dots: false,
  //   onInitialized: function(event) {
  //     var $items = $(event.target).find('.owl-item');
  //     $items.removeClass('owl-item-first-visible owl-item-last-visible');
  //     $items.eq(event.item.index).addClass('owl-item-first-visible');
  //     $items.eq(event.item.index + event.page.size - 1).addClass('owl-item-last-visible');
  //   },
  //   onChanged: function(event) {
  //     var $items = $(event.target).find('.owl-item');
  //     $items.removeClass('owl-item-first-visible owl-item-last-visible');
  //     $items.eq(event.item.index).addClass('owl-item-first-visible');
  //     $items.eq(event.item.index + event.page.size - 1).addClass('owl-item-last-visible');
  //   }
  // });
  //
  // $('#details-activity-slider').owlCarousel({
  //   loop: true,
  //   nav: true,
  //   navText: ["<img src='./images/icons/arrow-left.png'>","<img src='./images/icons/arrow-right.png'>"],
  //   items: 10,
  //   dots: false,
  //   margin: 15,
  //   onInitialized: function(event) {
  //     var $items = $(event.target).find('.owl-item');
  //     $items.removeClass('owl-item-first-visible owl-item-last-visible');
  //     $items.eq(event.item.index).addClass('owl-item-first-visible');
  //     $items.eq(event.item.index + 1).addClass('owl-item-first-visible');
  //     $items.eq(event.item.index + event.page.size - 1).addClass('owl-item-last-visible');
  //     $items.eq(event.item.index + event.page.size - 2).addClass('owl-item-last-visible');
  //   },
  //   onChanged: function(event) {
  //     var $items = $(event.target).find('.owl-item');
  //     $items.removeClass('owl-item-first-visible owl-item-last-visible');
  //     $items.eq(event.item.index).addClass('owl-item-first-visible');
  //     $items.eq(event.item.index + 1).addClass('owl-item-first-visible');
  //     $items.eq(event.item.index + event.page.size - 1).addClass('owl-item-last-visible');
  //     $items.eq(event.item.index + event.page.size - 2).addClass('owl-item-last-visible');
  //   }
  // });

  $('#post-slider-2').owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    nav: true,
    navText: ["<img src='./images/icons/arrow-left.svg' alt='arrow'>","<img src='./images/icons/arrow-right.svg' alt='arrow'>"]
  });

};