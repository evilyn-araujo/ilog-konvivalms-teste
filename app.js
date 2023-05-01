$(document).ready(function () {
  var numImages = $('.carousel-custom .card').length;
  var currentImage = 1;

  $('.carousel-custom .card:nth-child(1)').addClass('active');

  // para visualizar próximo cartão
  function showNextImage() {
    if (currentImage < numImages) {
      $('.carousel-custom .card.active').removeClass('active').next().addClass('active');
      currentImage++;
      // controle de apresentação dos botões
      if (currentImage == numImages) {
        $('#next-btn').hide();
        $('#prev-btn').show();
      } else {
        $('#prev-btn').show();
      }
    }
  }

  // para viausalizar o cartão anterior
  function showPrevImage() {
    if (currentImage > 1) {
      $('.carousel-custom .card.active').removeClass('active').prev().addClass('active');
      currentImage--;
      // controle de apresentação dos botões
      if (currentImage == 1) {
        $('#prev-btn').hide();
        $('#next-btn').show();
      } else {
        $('#next-btn').show();
      }
    }
  }

  $('#next-btn').click(function () {
    showNextImage();
  });

  $('#prev-btn').click(function () {
    showPrevImage();
  });
});