import { useEffect, useState } from 'react'
import Header from "./Components/Header"
import MoviesMain from "./Components/MoviesMain"
import Modal from "./Components/Modal"

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bd1731e5099bcec07b39fd0c395864e5"

function App() {

  const [movies, setMovies] = useState([]);
  const [searchWord, setsearchWord] = useState("");
  const [modalSearch, setmodalSearch] = useState(false);
  const [modal, setModal] = useState(false)
  const [infoMovies, setInfoMovies] = useState([])


  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=bd1731e5099bcec07b39fd0c395864e5&language=en-US&query=${searchWord}&page=1&include_adult=false`

  useEffect(() =>{
    fetch(FEATURED_API)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results)
    })
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if(searchWord) {
      fetch(SEARCH_API).then((res) => res.json()).then((data) => {
        setMovies(data.results)
    })

    setsearchWord("")
    setmodalSearch(true)
    }

  }

  const handleOnChange = (e) => {
    setsearchWord(e.target.value)
    console.log(searchWord)
  }

  const modalChange = (id) => {
    setModal(true)
    console.log(id)
    const result = movies.filter(movie => movie.id == id )
    setInfoMovies(result);




    console.log(modal)
  }


  return (
    <>
    <Header 
    handleOnSubmit={handleOnSubmit}
    searchWord={searchWord}
    handleOnChange={handleOnChange}
    />




      <MoviesMain
      movies={movies}
      searchWord={searchWord}
      modalSearch={modalSearch}
      modalChange={modalChange}
      />

      {modal && <Modal 
          setModal={setModal}
          infoMovies={infoMovies}
      />
      }

    </>
  )
}

export default App
