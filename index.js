document.addEventListener('DOMContentLoaded', ev => {
  let addButton = document.getElementById('add')
  addButton.addEventListener('click', showAddMovieForm)

  let showButton = document.getElementById('show')
  showButton.addEventListener('click', getMovies)

  let saveButton = document.getElementById('save')
  saveButton.addEventListener('click', saveMovieDetails, true)

  let cancelButton = document.getElementById('cancel')
  cancelButton.addEventListener('click', event => {
    getMovies()
  })

  getMovies()
  init()
});

function init(ev) {

  $('form').submit(event => {
    event.preventDefault();
  });
}
