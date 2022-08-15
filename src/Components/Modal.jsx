import closeBtn from '../img/cerrar.svg';
import notFoundIMG from '../img/notfoundIMG.jpg'


const Modal = ({ infoMovies,setModal }) => {

  const hideModal = () => {

    setTimeout(()=>{
      setModal(false)
    }, 500)
  }

  let title = "";
  let overview = "";
  let IMG_API = "";
  let rating = "";
  let language = "";
  let votes = "";



  infoMovies.forEach(movie => {
    console.log(movie)
    title= movie.title
    rating = movie.vote_average
    language = movie.original_language
    votes = movie.vote_count
    overview = movie.overview
    IMG_API = "https://image.tmdb.org/t/p/w300" + movie.poster_path

  });

  return(
    <div className='modal'>
      <div className='info_completa'>

      <div classNam='modal_img'>
      <img src={IMG_API} alt="" />
      </div>

      <div className='text'>
        <h1>{title}</h1>

        <div className='extra_info'>
        <p>Rating: {rating}</p> 
        <p>Language: {language} </p>
        <p>{votes} votes</p>
        </div>

        <h4>{overview}</h4>

        <div className='buttons'>
        <button>Watch Movie</button>
        <button>More Info</button>
      </div>
      </div>

      </div>


      <div className='close-modal'>
        <img src={closeBtn}
             alt="close modal"
             onClick={hideModal}
        />
      </div>

     </div>

     

 )
 };

export default Modal;
