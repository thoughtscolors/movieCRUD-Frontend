

const addMovie = () => {

  let title = document.querySelector('#title').value
  let year = document.querySelector('#year').value
  let director = document.querySelector('#director').value
  let rating = document.querySelector('#rating').value
  let url = document.querySelector('#url').value



  axios.post(`https://blooming-wildwood-85758.herokuapp.com/movies/`, { title, director, year, rating, url })
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

  axios.get(`https://blooming-wildwood-85758.herokuapp.com/movies/${id}`)
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

  axios.get(`https://blooming-wildwood-85758.herokuapp.com/movies/${id}`)
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


//whys it still thinking localhost3000
  axios.put(`https://blooming-wildwood-85758.herokuapp.com/movies/${id}`, { title, director, year, rating, url })
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

  axios.delete(`https://blooming-wildwood-85758.herokuapp.com/movies/${id}`)
  .then(res => {
    getMovies()
    return res
  })
  .catch(err => {
    return err
  })

}
