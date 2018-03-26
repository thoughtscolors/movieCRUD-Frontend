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
    let id = movie.id
    let title = movie.title
    let director = movie.director
    let year = movie.year
    let rating = movie.rating
    let editButton = document.createElement('button')
    editButton.addEventListener('click', editMovie)
    let deleteButton = document.createElement('button')
    deleteButton.addEventListener('click', deleteMovie)
    let insertionPoint = document.querySelector('.container')
    insertionPoint.append(`${id}, ${title}, ${director}, ${year}, ${rating}, ${editButton}, ${deleteButton}`)
  })

}
