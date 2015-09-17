
$('#contact-picture').on('click', function(event) {
  event.preventDefault();
  blueimp.Gallery([
    'assets/images/fabio/01.jpg',
    'assets/images/fabio/02.jpg',
    'assets/images/fabio/03.jpg',
    'assets/images/fabio/04.jpg',
    'assets/images/fabio/05.jpg',
    'assets/images/fabio/06.jpg',
    'assets/images/fabio/07.jpg',
    'assets/images/fabio/08.jpg',
    'assets/images/fabio/09.jpg',
    'assets/images/fabio/10.jpg'
  ], {
    fullScreen: true,
    useBootstrapModal: false
  });
});




