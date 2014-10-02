/**
 * This is a JQuery demo that I'm learning so my boyfriend will like me more.
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#04769F',
    lineColor: '#04769F'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});