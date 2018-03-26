document.addEventListener('DOMContentLoaded', ev => {
  let newButton = document.getElementById('new')
  newButton.addEventListener('click', newMovie)

  let showButton = document.getElementById('show')
  showButton.addEventListener('click', showMovies)

  init()
});

function init(ev) {
  console.log('** INITIALIZE **');
  $('form').submit(event => {
    event.preventDefault();
  });
}
