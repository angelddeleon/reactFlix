import notFoundIMG from "../img/notfoundIMG.jpg"

const Movie = ({ movie, id, modalChange }) => {

  let IMG_API = "https://image.tmdb.org/t/p/w300" + movie.poster_path

  if(IMG_API === "https://image.tmdb.org/t/p/w300null") {
    IMG_API = notFoundIMG
}

  return (
    <li key={id} className='movie'>
        <img src={IMG_API} onClick={() => {modalChange(id)}} />
    </li>
  )
}

export default Movie