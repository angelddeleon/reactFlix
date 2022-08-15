import Movie from "./Movie"
import rightArrow from "../img/right-arrow.png"
import leftArrow from "../img/right-left.png"

function MoviesMain({movies, modalSearch, modalChange}) {

  const arrowRight = () =>{
    const ul = document.querySelector("ul")

    ul.scrollLeft = ul.scrollLeft + 1070
  }

  const arrowLeft = () =>{
    const ul = document.querySelector("ul")

    ul.scrollLeft = ul.scrollLeft - 1070
  }

  let hideModal = ''
  let ul = 'ulMain'
  let li = 'liMain'
  if(modalSearch === true){
  hideModal = 'hideModal'
  ul = 'ulSearch'
  li = 'liSearch'
  }

  return (
    <div>

          <div className="moviesSide">
          <h3 className={hideModal}>New Releases</h3>

          <button type="button" onClick={arrowLeft} className={hideModal}>
            <img src={leftArrow} className="ArrowLeft" />
          </button>

          <ul className={ul}>
          {movies.map((movie) => (
            <Movie
            key={movie.id}
            id={movie.id}
            movie={movie}
            modalChange={modalChange}
          />

            ))}
          </ul>

          <button type="button" onClick={arrowRight} className={hideModal}>
            <img src={rightArrow} className="ArrowR" />
          </button>

          </div>




      </div>
  )
}

export default MoviesMain
