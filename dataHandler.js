

const addMovie = () => {

  let title = document.querySelector('#title').value
  let year = document.querySelector('#year').value
  let director = document.querySelector('#director').value
  let rating = document.querySelector('#rating').value
  let url = document.querySelector('#url').value



  axios.post(`http://localhost:3000/movies/`, { title, director, year, rating, url })
    .then(res => {
      getMovies()
      return res;
    })
    .catch(err => {
      return err
    })
}

const getMovieDetails = () => {
  
  const id = event.target.parentNode.id

  axios.get(`http://localhost:3000/movies/${id}`)
  .then(res => {
    let result = res.data.data.fulfillmentValue
    renderMovieDetails(result)
  })
  .catch(err => {
    return err
  })
}

const editMovieDetails = () => {

  const id = event.target.parentNode.parentNode.id

  axios.get(`http://localhost:3000/movies/${id}`)
  .then(res => {
    let result = res.data.data.fulfillmentValue
    renderEditForm(result)
  })
  .catch(err => {
    return err
  })
}

const saveMovieDetails = () => {

  let id = document.querySelector('.form').id
  let title = document.querySelector('#title').value
  let year = document.querySelector('#year').value
  let director = document.querySelector('#director').value
  let rating = document.querySelector('#rating').value
  let url = document.querySelector('#url').value



  axios.put(`http://localhost:3000/movies/${id}`, { title, director, year, rating, url })
    .then(res => {
      getMovies()
      return res;
    })
    .catch(err => {
      return err
    })
}

const deleteMovie = () => {

  let id = event.target.parentNode.parentNode.id

  axios.delete(`http://localhost:3000/movies/${id}`)
  .then(res => {
    getMovies()
    return res
  })
  .catch(err => {
    return err
  })

}
