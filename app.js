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

  // para visualizar o carrossel em loop(após a última imagem volta para a primeira)
  function showNextImagecarousel() {
    if (currentImage < numImages - 1) {
      $('.carousel-custom .card.active').removeClass('active').next().addClass('active');
      currentImage++;
      // controle de apresentação dos botões
      if (currentImage == numImages - 1) {
        $('#next-btn').hide();
        $('#prev-btn').show();
      } else {
        $('#prev-btn').show();
      }
    } else {
      $('.carousel-custom .card.active').removeClass('active');
      $('.carousel-custom .card:first-child').addClass('active');
      currentImage = 0;
      $('#next-btn').show();
      $('#prev-btn').hide();
    }
  }

  setInterval(showNextImagecarousel, 3000);

  $('#next-btn').click(function () {
    showNextImage();
  });

  $('#prev-btn').click(function () {
    showPrevImage();
  });
});