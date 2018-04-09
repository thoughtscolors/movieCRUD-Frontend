const getMovies = () => {

  let displayMessage = document.getElementById("save-status")
  axios.get(`http://localhost:3000/movies`)
  .then(res => {
    displayMessage.innerHTML = "Success!"
    displayMessage.style.backgroundColor = "rgba(124, 252, 0, .5)"
    $('#save-status').fadeIn(500).delay(2000).fadeOut(500)
    document.querySelector('tbody').innerHTML = ''
    let moviesArray = res.data.result
    renderMoviesTableHead(moviesArray)
  })
  .catch(err => {

    displayMessage.innerHTML = "Error"
    displayMessage.style.backgroundColor = "rgba(252, 0, 0, .5)"
    $('#save-status').fadeIn(500).delay(2000).fadeOut(500)
    return err
  })
}

const renderMoviesTableHead = (moviesArray) => {
  let insertionPoint = document.querySelector('tbody')
  let thead = document.createElement('thead')
  let headers = ['Title', 'Director', 'Year', 'Rating']

  for (var i = 0; i < headers.length; i++) {
    let th = document.createElement('th')
    th.textContent = headers[i]
    thead.append(th)
  }

  let editTH = document.createElement('th')
  thead.append(editTH)

  let delTH = document.createElement('th')
  thead.append(delTH)

  insertionPoint.append(thead)
  renderMoviesTable(moviesArray)

  let showTable = document.querySelector('.table')
  if (showTable.classList.contains('hidden')) {
    showTable.classList.remove('hidden')
  }
  let hideForm = document.querySelector('.form')
  if (hideForm.classList.contains('hidden') === false) {
    hideForm.classList.add('hidden')
  }

  let hideDetails = document.querySelector('.movie')
  if (hideDetails.classList.contains('hidden') === false) {
    hideDetails.classList.add('hidden')
  }
}

const renderMoviesTable = (moviesArray) => {
  if (moviesArray.length === 0) {
    let insertionPoint = document.querySelector('thead')
    let tr = document.createElement('tr')
    tr.textContent = "None to show..."
    insertionPoint.append(tr)

  }

  moviesArray.forEach(movie => {
    let keys = Object.keys(movie)

    let editButton = document.createElement('button')
    editButton.textContent = "Edit"
    editButton.addEventListener('click', editMovieDetails)
    let deleteButton = document.createElement('button')
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener('click', deleteMovie)
    let insertionPoint = document.querySelector('thead')


    let tr = document.createElement('tr')
    tr.addEventListener('click', getMovieDetails)
    tr.setAttribute('id', movie.id)

    keys.forEach(key => {
      if (key === 'title' || key === 'director' || key === 'year' || key === 'rating') {
      let td = document.createElement('td')

      td.textContent = `${movie[key]}`
      tr.append(td)
      }
    })

    let editTD = document.createElement('td')
    editTD.addEventListener('click', getMovieDetails)
    editTD.append(editButton)
    tr.append(editTD)

    let delTD = document.createElement('td')
    delTD.addEventListener('click', deleteMovie)
    delTD.append(deleteButton)
    tr.append(delTD)

    insertionPoint.append(tr)
  })
}

const renderEditForm = (res) => {

  let showForm = document.querySelector('.form')
  if (showForm.classList.contains('hidden')) {
    showForm.classList.remove('hidden')
  }
  let hideTable = document.querySelector('.table')
  if (hideTable.classList.contains('hidden') === false) {
    hideTable.classList.add('hidden')
  }

  let hideDetails = document.querySelector('.movie')
  if (hideDetails.classList.contains('hidden') === false) {
    hideDetails.classList.add('hidden')
  }

  let image = document.getElementById('image')
  let title = document.getElementById('title')
  let director = document.getElementById('director')
  let year = document.getElementById('year')
  let rating = document.getElementById('rating')
  let url = document.getElementById('url')
  let form = document.querySelector('form')

  let saveButton = document.querySelector('#save')
  saveButton.addEventListener('click', saveMovieDetails, true)
  saveButton.removeEventListener('click', addMovie, true)


  title.value = res.title
  director.value = res.director
  year.value = res.year
  rating.value = res.rating
  image.setAttribute('src', res.url)
  url.value = res.url
  form.id = res.id

}

const showAddMovieForm = () => {


  clearForm()
  let showForm = document.querySelector('.form')

  if (showForm.classList.contains('hidden')) {
    showForm.classList.remove('hidden')
  }
  let hideTable = document.querySelector('.table')
  if (hideTable.classList.contains('hidden') === false) {
    hideTable.classList.add('hidden')
  }

  let hideDetails = document.querySelector('.movie')
  if (hideDetails.classList.contains('hidden') === false) {
    hideDetails.classList.add('hidden')
  }

  let saveButton = document.querySelector('#save')
  saveButton.removeEventListener('click', saveMovieDetails, true)
  saveButton.addEventListener('click', addMovie, true)

}

const renderMovieDetails = (res) => {

  let showDetails = document.querySelector('.movie')
  if (showDetails.classList.contains('hidden')) {
    showDetails.classList.remove('hidden')
  }
  let hideTable = document.querySelector('.table')
  if (hideTable.classList.contains('hidden') === false) {
    hideTable.classList.add('hidden')
  }
  let image = document.querySelector('#movie-image')

  let title = document.querySelector('#movie-title')
  let director = document.querySelector('#movie-director')
  let year = document.querySelector('#movie-year')
  let rating = document.querySelector('#movie-rating')

  title.textContent = res.title
  director.textContent = res.director
  year.textContent = res.year
  rating.textContent = res.rating
  image.setAttribute('src', res.url)



}

const clearForm = () => {
  let title = document.getElementById('title')
  let director = document.getElementById('director')
  let year = document.getElementById('year')
  let rating = document.getElementById('rating')
  let url = document.getElementById('url')


  title.value = ''
  director.value = ''
  year.value = ''
  rating.value = parseInt(Math.random() * 1000) / 10
  image.setAttribute('src', '')
  url.value = ''
}
