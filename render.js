const showMovies = () => {
  console.log('clickd show');
  let displayMessage = document.getElementById("save-status")
  axios.get(`http://localhost:3000/movies`)
  .then(res => {
    console.log(res);
    displayMessage.innerHTML = "Success!"
    displayMessage.style.backgroundColor = "rgba(124, 252, 0, .5)"
    $('#save-status').fadeIn(500).delay(2000).fadeOut(500)
    let moviesArray = res.data.result
    renderMoviesTable(moviesArray)
  })
  .catch(err => {
    console.log(err);
    displayMessage.innerHTML = "Error"
    displayMessage.style.backgroundColor = "rgba(252, 0, 0, .5)"
    $('#save-status').fadeIn(500).delay(2000).fadeOut(500)
    return err
  })
}

const renderMoviesTable = (moviesArray) => {
  moviesArray.forEach(movie => {
    let keys = Object.keys(movie)
    console.log(keys);
    let editButton = document.createElement('button')
    editButton.textContent = "Edit"
    editButton.addEventListener('click', editMovie)
    let deleteButton = document.createElement('button')
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener('click', deleteMovie)
    let insertionPoint = document.querySelector('tbody')

    let tr = document.createElement('tr')
    tr.setAttribute('id', movie.id)
    keys.forEach(key => {
      if (key === 'title' || key === 'director' || key === 'year' || key === 'rating') {
      let td = document.createElement('td')
      td.textContent = `${movie[key]}`
      tr.append(td)
    }
    })
    let editTD = document.createElement('td')
    editTD.append(editButton)
    tr.append(editTD)
    let delTD = document.createElement('td')
    delTD.append(deleteButton)
    tr.append(delTD)

    insertionPoint.append(tr)
  })
}
